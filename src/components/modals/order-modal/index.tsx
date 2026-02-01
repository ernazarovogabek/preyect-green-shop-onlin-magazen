import { Modal } from "antd";
import { useReduxDispatch, useReduxSelctor } from "../../../hooks/useRedux";
import Card from "../../proced-checkout/proced-total/card";
import { useNavigate } from "react-router-dom";
import { setOrderModalVisiblty } from "../../../redux/modalSlice";
import { order } from "../../../redux/shopSlice";
import { DownloadOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const OrderModal = () => {
  const { orderModalVisiblity } = useReduxSelctor((state) => state.modalSlice);
  const dispatch = useReduxDispatch();
  const { data, coupon } = useReduxSelctor((state) => state.shopSlice);
  const navigate = useNavigate();

  const totalPrice = data.reduce((acc, value) => acc + value.userPrice, 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;

  const track = () => {
    dispatch(order());
    dispatch(setOrderModalVisiblty());
    navigate("/profile/track-order");
  };

  return (
    <Modal
      open={orderModalVisiblity}
      onCancel={track}
      footer={false}
      width="600px"
      title={
        <div className="text-xl font-semibold text-[#46A358]">
          ✅ Order Confirmation
        </div>
      }
    >
      <div className="space-y-4">
        {/* Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border rounded-xl p-4 bg-[#f9f9f9]">
          <div>
            <p className="text-sm text-gray-500">Order Number</p>
            <h2 className="font-semibold text-sm">{Date.now()}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <h2 className="font-semibold text-sm">
              {new Date().toLocaleDateString("en-GB")}
            </h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total</p>
            <h2 className="font-semibold text-sm">${total.toFixed(2)}</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment</p>
            <h2 className="font-semibold text-sm">Cash on delivery</h2>
          </div>
        </div>

        {/* Divider */}
        <h1 className="text-lg font-bold text-[#46A358] border-b pb-2">
        <ShoppingCartOutlined className="text-black text-2xl" /> Order Details
        </h1>

        {/* Product Cards */}
        <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
          {data.map((value) => (
            <Card key={value._id} {...value} />
          ))}
        </div>

        {/* Pricing */}
        <div className="space-y-1 border-t border-[#46a358] pt-4">
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span className="text-[#46A358] font-semibold">$16.00</span>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Total Price</span>
            <span className="text-[#46A358]">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-[13px] text-gray-600 mt-4">
          Your order is currently being processed. You will receive a
          confirmation email shortly with delivery info.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={track}
            className="bg-[#46A358] hover:bg-[#389b45] transition-all duration-200 rounded-lg px-5 py-2 text-white font-medium shadow-md"
          >
            <DownloadOutlined /> Track your order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
