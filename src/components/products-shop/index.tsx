import Header from "../header";
import CardTotal from "./Card-Total";
import Shopping from "./shopping";


const ProductsShop = () => {
  return (
    <div className="">
      <Header/>
      <div className="grid grid-cols-[3fr_1fr] gap-5 mt-5">
        
        <Shopping />
        <CardTotal />
      </div>
    </div>
  );
}

export default ProductsShop