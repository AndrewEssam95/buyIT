import { TLoading } from "src/types/customTypes";
import CategorySkeleton from "./skeletons/CategorySkeleton";
import ProductSkeleton from "./skeletons/ProductSkeleton";
import CartSkeleton from "./skeletons/CartSkeleton";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.JSX.Element;
  type?: keyof typeof skeletonTypes;
};

const skeletonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: TLoadingProps) => {
  const Component = skeletonTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") return <h3>{error}</h3>;
  return <div>{children}</div>;
};

export default Loading;
