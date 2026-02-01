import { Form, Input } from "antd";
import { cookieInfo } from "../../../../generic/cookies";
import type { AdressType } from "../../../../@types";
import { useEditAdress } from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";

const Adress = () => {
  const grid_style_form_item =
    "grid grid-cols-2 gap-4 max-[585px]:grid-cols-1 max-[585px]:gap-2";
  const { getCookie, setCookie } = cookieInfo();
  const authUser = getCookie("user");
  const { mutate, isPending } = useEditAdress();
  const finish = (e: AdressType) => {
    mutate({ ...e, _id: authUser._id });
    setCookie("user", { ...authUser, ...e });
  };
  return (
    <div>
      <h3 className="mb-[10px]">Billing Address</h3>
      <p className="font-light">
        The following addresses will be used on the checkout page by default.
      </p>
      <Form
        layout="vertical"
        onFinish={finish}
        fields={[
          { name: ["country"], value: authUser?.country },
          { name: ["town"], value: authUser?.town },
          { name: ["street_address"], value: authUser?.street_address },
          {
            name: ["additional_street_address"],
            value: authUser?.additional_street_address,
          },
          { name: ["state"], value: authUser?.state },
          { name: ["zip"], value: authUser?.zip },
        ]}
      >
        <div className={`${grid_style_form_item}`}>
          <Form.Item
            name="country"
            label="Country / Region"
            rules={[
              {
                required: true,
                message: "Please enter Country / Region",
              },
            ]}
          >
            <Input placeholder="Type your country name..." />
          </Form.Item>
          <Form.Item
            name="town"
            label="Town / City"
            rules={[
              {
                required: true,
                message: "Please enter Town / City",
              },
            ]}
          >
            <Input placeholder="Type your town..." />
          </Form.Item>
        </div>
        <div className={`${grid_style_form_item}`}>
          <Form.Item
            name="street_address"
            label="Streed Address"
            rules={[
              {
                required: true,
                message: "Please enter Streed Address",
              },
            ]}
          >
            <Input placeholder="Type your street name..." />
          </Form.Item>
          <Form.Item
            name="additional_street_address"
            label="Extra adress"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input placeholder="Appartament suite, unit, etc (optional)..." />
          </Form.Item>
        </div>
        <div className={`${grid_style_form_item}`}>
          <Form.Item
            name="state"
            label="State"
            rules={[
              {
                required: true,
                message: "Please enter State",
              },
            ]}
          >
            <Input placeholder="Type your country name..." />
          </Form.Item>
          <Form.Item
            name="zip"
            label="Zip"
            rules={[
              {
                required: true,
                message: "Please enter Zip",
              },
            ]}
          >
            <Input placeholder="Type your town..." />
          </Form.Item>
        </div>
        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] h-[40px] px-[10px]">
          {isPending ? <LoadingOutlined /> : "Place Order"}
        </button>
      </Form>
    </div>
  );
};

export default Adress;