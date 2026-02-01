import type { CartType } from "../../../../@types";
import Card from "../../../home/store-products/products/card";
import { getStore } from "../../../../generic/store";
import { Empty } from "antd";

const Wishlist = () => {
  // localStorage'dan wishlistni olish
  const wishlist: CartType[] = getStore("wishlist") || [];

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {wishlist.length === 0 ? (
          <div className="col-span-3 flex justify-center items-center h-40">
            <Empty description="No Data" />
          </div>
        ) : (
          wishlist.map((value) => <Card key={value._id} {...value} />)
        )}
      </div>
    </div>
  );
};

export default Wishlist;
