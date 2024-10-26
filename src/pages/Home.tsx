import NewCollection from "@components/ecommerce/NewCollection/NewCollection";
import HomeCarousel from "@components/common/HomeCarousel.tsx/HomeCarousel";
import ProductsCollection from "@components/ecommerce/ProductsCollection/ProductsCollection";
import CategoriesList from "@components/common/CategoriesList/CategoriesList";

const Home = () => {
  return (
    <main className="container">
      <HomeCarousel />
      <CategoriesList />
      <ProductsCollection />
      <NewCollection />
    </main>
  );
};

export default Home;
