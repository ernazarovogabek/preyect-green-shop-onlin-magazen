import { Table, Empty, Skeleton } from "antd";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import { OrderType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { setTrackModalVisiblty } from "../../../../redux/modalSlice";
import { setOrder } from "../../../../redux/trackOrderSlice";
import { useDeleteOrder } from "../../../../hooks/useQueryHandler/useQueryAction";
import { getOrderColumns } from "./order-item";

const TrackOrder = () => {
  const { data, isLoading, isError } = useQueryHandler({
    url: "order/get-order",
    pathname: "order-list",
  });

  const dispatch = useReduxDispatch();
  const { mutate: deleteOrder } = useDeleteOrder();

  const handleViewDetails = (order: OrderType) => {
    dispatch(setOrder(order));
    dispatch(setTrackModalVisiblty());
  };

  const handleDeleteOrder = (orderId: string) => {
    deleteOrder({ _id: orderId });
  };

  const columns = getOrderColumns(handleViewDetails, handleDeleteOrder);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Buyurtmalar tarixi
        </h1>
      </div>
      {isLoading || isError ? (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Skeleton.Input key={idx} active className="!w-full !h-[40px]" />
          ))}
        </div>
      ) : !data?.length ? (
        <Empty description={<p>Buyurtmalar mavjud emas</p>} />
      ) : (
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 2 }}
          bordered
        />
      )}
    </div>
  );
};

export default TrackOrder;
