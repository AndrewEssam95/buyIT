export type TLoading = "idle" | "pending" | "failed" | "succeded";

export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  image: string;
};

export interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

export type TProduct = {
  id?: number;
  title: string;
  categoryPrefix: string;
  image: string;
  price: number;
  maxQuantity?: number;
  quantity?: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};

export interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

export type TOrderItem = {
  id: number;
  userId: number;
  items: TProduct[];
  subtotal: number;
};

export type TMessage = {
  name: string;
  email: string;
  message: string;
};
