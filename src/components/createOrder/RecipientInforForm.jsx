import { Form, Input } from "antd";

const RecipientInforForm = () => {
  return (
    <>
      <div className="grid w-full col-span-8 gap-x-6">
        <div className="col-span-4">
          <Form.Item label="Họ và tên" name="recipientName">
            <Input placeholder="Tên người nhận hàng" type="text" />
          </Form.Item>
          <Form.Item label="Email" name="recipientEmail">
            <Input placeholder="Email người nhận hàng" type="email" />
          </Form.Item>
        </div>
        <div className="col-span-4 col-start-5">
          <Form.Item label="Địa chỉ" name="recipientAddress">
            <Input placeholder="Địa chỉ người nhận" type="text" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="recipientPhoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Số điện thoại người nhận" type="number" />
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default RecipientInforForm;
