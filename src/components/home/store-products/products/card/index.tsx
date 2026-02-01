import { FC, useState } from "react";
import type {
  CartType,
} from "../../../../../@types";
import {
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { addData } from "../../../../../redux/shopSlice";
import { notificationApi } from "../../../../../generic/notification";
import {
  useDeleteIsLiked,
  useIsLiked,
} from "../../../../../hooks/useQueryHandler/useQueryAction";
import { getStore, setStore } from "../../../../../generic/store";

const Card: FC<CartType> = (props) => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { mutate: disLiked } = useDeleteIsLiked();
  const { mutate } = useIsLiked();
  const initialWishlist: CartType[] = getStore("wishlist") || [];
  const [wishlist, setWishlist] = useState<CartType[]>(initialWishlist);
  const isLiked = wishlist.some((item) => item._id === props._id);
  const isLike = () => {
    const updatedWishlist = [...wishlist, props];
    setWishlist(updatedWishlist);
    setStore("wishlist", updatedWishlist);
    mutate({ route_path: props.category, flower_id: props._id });
  };
  const disLike = () => {
    const updatedWishlist = wishlist.filter((item) => item._id !== props._id);
    setWishlist(updatedWishlist);
    setStore("wishlist", updatedWishlist);
    disLiked({ _id: props._id as string });
  };
  const style_icons: string =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]";
  return (
    <div className="cursor-pointer border-transparent border-t hover:border-[#46A358] ">
      <div className="group h-[320px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          src={props.main_image}
          className="w-4/5 h-[80%] max-sm:h-[100%]"
          alt={props.title}
        />
        <div className="hidden items-center absolute bottom-4 gap-5  group-hover:flex">
          <div
            onClick={() => {
              dispatch(addData(props));
              notify("add_data");
            }}
            className={style_icons}
          >
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
          {isLiked ? (
            <div onClick={disLike} className={style_icons}>
              <HeartFilled className="text-[22px] text-[red]" />
            </div>
          ) : (
            <div onClick={isLike} className={style_icons}>
              <HeartOutlined className="text-[22px]" />
            </div>
          )}
          <div
            onClick={() => {
              navigate(`/shop/${props.category}/${props._id}`);
            }}
            className={style_icons}
          >
            <SearchOutlined className="text-[22px]" />
          </div>
        </div>
      </div>
      <h3 className="mt-1">{props.title}</h3>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="text-[#46A358] text-[18px] font-bold">
          {" "}
          {props.price} $
        </h3>
        <h3 className="font-[300] text-[#A5A5A5] line-through">
          {props.discount_price} $
        </h3>
      </div>
    </div>
  );
};

export default Card;
