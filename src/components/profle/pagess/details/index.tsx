
import type { FC } from "react";

import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { cookiesInfo } from "../../../../generic/cookies";
import type { UploadType, UserType } from "../../../../@types";

interface DetailsType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  profile_photo: UploadType;
}
const grid_style_form_item =
  "grid grid-cols-2 gap-4 max-[585px]:grid-cols-1 max-[585px]:gap-2";
const Details: FC = () => {
  const { getCookies } = cookiesInfo();
  const authUser: UserType = getCookies("user");
  const finsh = async (e: DetailsType) => {
    console.log(e);
    
  };
  return (
    <Form
      onFinish={finsh}
      layout="vertical"
      fields={[
        { name: ["name"], value: authUser?.name },
        { name: ["surname"], value: authUser?.surname },
        { name: ["email"], value: authUser?.email },
        { name: ["phone_number"], value: authUser?.phone_number },
        { name: ["username"], value: authUser?.username },
      ]}
    >
      <div className={`${grid_style_form_item}`}>
        <Form.Item
          name="name"
          label="First name"
          rules={[{ required: true, message: "Please enter First name" }]}
        >
          <Input
            className="h-[35px] text-[16px]"
            placeholder="Type your first name..."
          />
        </Form.Item>
        <Form.Item
          name="surname"
          label="Last name"
          rules={[{ required: true, message: "Please enter Last name" }]}
        >
          <Input
            className="h-[35px] text-[16px]"
            placeholder="Type your Last name..."
          />
        </Form.Item>
      </div>
      <div className={`${grid_style_form_item}`}>
        <Form.Item
          name="email"
          label="Email adress"
          rules={[{ required: true, message: "Please enter Email adress" }]}
        >
          <Input
            className="h-[35px] text-[16px]"
            placeholder="Type your Email adress..."
          />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label="Phone number"
          rules={[{ required: true, message: "Please enter Phone number" }]}
        >
          <Input
            addonBefore="+998"
            className="h-[35px] text-[16px]"
            placeholder="Type your Phone number..."
          />
        </Form.Item>
      </div>
      <div className={`${grid_style_form_item}`}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter Username" }]}
        >
          <Input
            className="h-[35px] text-[16px]"
            placeholder="Type your Username..."
          />
        </Form.Item>
        <Form.Item
          name="`profile_photo`"
          label="Image"
          rules={[{ required: true, message: "Please enter File" }]}
        >
          <Upload
            name="image"
            action={
              ""
            }
            listType="picture"
            data={{ type: "img" }}
            headers={{
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }}
            accept=".png,.jpg,.jpeg"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </div>
      <button className="bg-[#46A358] w-[120px] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]">
        Save changes
      </button>
    </Form>
  );
};

export default Details;