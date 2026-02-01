import { Tag, Button, Space } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import type { OrderType } from "../../../../../@types";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setTrackModalVisiblty } from "../../../../../redux/modalSlice";
import { setOrder } from "../../../../../redux/trackOrderSlice";

const OrderItem = (data: OrderType) => {
  const dispatch = useReduxDispatch();
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] justify-between mt-5 bg-[#FBFBFB] p-4">
      <div className="border-r pl-4">
        <p>Order Number</p>
        <h2 className="font-bold">{data._id}</h2>
      </div>
      <div className="border-r pl-4">
        <p>Date</p>
        <h2 className="font-bold">{data.created_at.slice(0, 10)}</h2>
      </div>
      <div className="border-r pl-4">
        <p>Total</p>
        <h2 className="font-bold">
          $ {data?.extra_shop_info.total?.toFixed(2)}
        </h2>
      </div>
      <div
        onClick={() => {
          dispatch(setOrder(data));
          dispatch(setTrackModalVisiblty());
        }}
        className="border-r pl-4"
      >
        <p>More</p>
        <button className="text-[rgb(69,163,88)]">More details</button>
      </div>
    </div>
  );
};

export const getOrderColumns = (
  handleViewDetails: (order: OrderType) => void,
  handleDeleteOrder: (orderId: string) => void
) => [
  {
    title: "Buyurtma raqami",
    dataIndex: "_id",
    key: "_id",
    render: (id: string) => (
      <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
        {id.slice(-8)}
      </span>
    ),
  },
  {
    title: "Sana",
    dataIndex: "created_at",
    key: "created_at",
    render: (date: string) => (
      <span className="text-gray-600">
        {new Date(date).toLocaleDateString("uz-UZ", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </span>
    ),
  },
  {
    title: "Mahsulotlar soni",
    key: "products_count",
    render: (record: OrderType) => (
      <Tag color="blue">{record.shop_list?.length || 0} ta</Tag>
    ),
  },
  {
    title: "Jami summa",
    dataIndex: "extra_shop_info",
    key: "total",
    render: (info: any) => (
      <span className="font-bold text-green-600">
        ${info?.total?.toFixed(2) || "0.00"}
      </span>
    ),
  },
  {
    title: "To'lov usuli",
    dataIndex: "extra_shop_info",
    key: "payment_method",
    render: (info: any) => (
      <Tag color={info?.method === "cash" ? "green" : "orange"}>
        {info?.method === "cash" ? "Naqd pul" : info?.method || "Noma'lum"}
      </Tag>
    ),
  },
  {
    title: "Amallar",
    key: "actions",
    render: (record: OrderType) => (
      <Space size="small">
        <Button
          type="primary"
          size="small"
          icon={<EyeOutlined />}
          onClick={() => handleViewDetails(record)}
          className="bg-blue-500 hover:bg-blue-600"
        >
        </Button>
        <Button
          type="primary"
          danger
          size="small"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteOrder(record._id)}
        >
        </Button>
      </Space>
    ),
  },
];

export default OrderItem;
