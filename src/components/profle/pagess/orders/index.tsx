import { Empty, Skeleton } from "antd";
import { useQueryHandler } from "../../../../hooks/useQuery";

const TrackOrder = () => {
  const { data, isLoading, isError } = useQueryHandler({
    url: "order/get-order",
    pathname: "track-orders",
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} active />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500 font-medium">
        Buyurtmalarni yuklab bo‘lmadi
      </div>
    );
  }

  const orders = data?.data || [];

  return (
    <div className="w-full">
      <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">
        Track your Orders
      </h2>

      {/* HEADER (desktop) */}
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] pb-3 border-b border-[#46A358] font-semibold text-[#3D3D3D]">
        <div>Order Number</div>
        <div className="text-center">Date</div>
        <div className="text-center">Total</div>
        <div className="text-right pr-4">More</div>
      </div>

      {/* BODY */}
      {orders.length > 0 ? (
        <div className="mt-6 space-y-4">
          {orders.map((order: any) => (
            <div
              key={order._id}
              className="
                bg-[#F7F7F7]
                rounded-xl
                px-6
                py-4
                flex
                flex-col
                md:grid
                md:grid-cols-[2fr_1fr_1fr_1fr]
                gap-3
                items-center
                hover:bg-[#EFEFEF]
                transition-all
              "
            >
              {/* ORDER ID */}
              <div className="font-medium text-[#3D3D3D] break-all">
                <span className="md:hidden text-gray-400 text-xs">Order:</span>
                {order._id}
              </div>

              {/* DATE */}
              <div className="md:text-center text-[#000] font-medium">
                <span className="md:hidden text-gray-400 text-xs">Date:</span>
                {new Date(order.created_at).toISOString().slice(0, 10)}
              </div>

              {/* TOTAL */}
              <div className="md:text-center text-[#46A358] font-bold">
                <span className="md:hidden text-gray-400 text-xs">Total:</span>
                ${order.extra_shop_info?.total?.toFixed(2)}
              </div>

              {/* MORE INFO */}
              <div className="md:text-right w-full md:w-auto">
                <button
                  className="
                    w-full
                    md:w-auto
                    border
                    border-[#46A358]
                    text-[#46A358]
                    px-4
                    py-1.5
                    rounded-md
                    hover:bg-[#46A358]
                    hover:text-white
                    transition-all
                  "
                >
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20">
          <Empty description="Buyurtmalar topilmadi" />
        </div>
      )}
    </div>
  );
};

export default TrackOrder;

































