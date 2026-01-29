import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: string;
  mrp?: string;
  emi?: string;
  qty: number;
};

const parsePrice = (v: string) => Number(v.replace(/[^0-9]/g, "")) || 0;

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item, qty = 1) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i)),
        };
      }
      return { items: [...state.items, { ...item, qty }] };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  setQty: (id, qty) =>
    set((state) => ({
      items: state.items
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(10, qty)) } : i))
        .filter((i) => i.qty > 0),
    })),
  clear: () => set({ items: [] }),
  subtotal: () => get().items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0),
}));
