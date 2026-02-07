import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <section className="max-w-[90%] m-auto grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-5 mt-10">
      <Categories />
      <Products />
    </section>
  );
};

export default StoreProducts;
