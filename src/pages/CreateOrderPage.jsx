import { DatePicker, Form, Typography, Button, Divider, Steps } from "antd";
const { RangePicker } = DatePicker;

import SenderInforForm from "../components/createOrder/SenderInforForm";
import { useState } from "react";
import RecipientInforForm from "../components/createOrder/RecipientInforForm";
const { Title, Description } = Typography;
const Step = {
  SenderForm: 0,
  RecipientForm: 1,
  Summary: 2,
};
const CreateOrderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [senderInfo, setSenderInfo] = useState({});
  const [recipientInfo, setRecipientInfo] = useState({});
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const forms = [
    <SenderInforForm form={form} key={Step.SenderForm} />,
    <RecipientInforForm key={Step.RecipientForm} />,
  ];
  const onHandleFinish = (values) => {
    if (current === 0) {
      onFinishSenderForm(values);
    }
    if (current === 1) {
      onFinishRecipientForm(values);
    }
    if (current === 2) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        console.log({ senderInfo, recipientInfo });
        form.resetFields();
        setCurrent(Step.SenderForm);
      }, 3000);
    }
  };
  const onFinishSenderForm = (values) => {
    setSenderInfo(values);
    setCurrent(1);
  };
  const onFinishRecipientForm = (values) => {
    setRecipientInfo(values);
    setCurrent(2);
  };

  const formButton = () => {
    let buttonLabel;
    if (current !== 2) {
      buttonLabel = "Bước tiếp theo";
    } else buttonLabel = "Tạo đơn hàng";
    return (
      <Button type="primary" htmlType="submit" loading={isLoading}>
        {buttonLabel}
      </Button>
    );
  };
  return (
    <div className="w-full">
      <Typography>
        <Title level={2}>Tạo đơn hàng cho khách</Title>
      </Typography>
      <Divider />
      <Steps current={current}>
        <Steps.Step
          className="cursor-pointer"
          onClick={() => setCurrent(Step.SenderForm)}
          title="Thông tin người gửi"
        />
        <Steps.Step
          className="cursor-pointer"
          onClick={() => {
            if (Object.keys(senderInfo).length === 0) {
              console.log("Vui lý nhận thống tin người gửi");
              return;
            } else setCurrent(Step.RecipientForm);
          }}
          title="Thông tin người nhận"
        />
        <Steps.Step title="Tạo đơn hàng" />
      </Steps>

      <div className="container w-full mx-auto mt-6">
        <Form
          labelAlign="left"
          form={form}
          onFinish={onHandleFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          style={{
            width: "100%",
          }}
        >
          {forms[current]}
          {formButton()}
        </Form>
      </div>
    </div>
  );
};

export default CreateOrderPage;
