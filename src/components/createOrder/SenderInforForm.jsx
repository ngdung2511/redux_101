import { Button, Cascader, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
const { Option } = Select;
const SenderInforForm = ({ form }) => {
  const senderLocation = Form.useWatch("senderLocation", {
    form,
    preserve: true,
  });
  // console.log(senderLocation);
  useEffect(() => {
    form.setFieldValue(
      "detailSenderLocation",
      senderLocation?.reverse().join(", ")
    );
  }, [senderLocation, form]);
  const typesOfGoods = [
    {
      label: "Thực phẩm",
      value: "Thực phẩm",
    },
    {
      label: "Hàng tiêu dùng",
      value: "Hàng tiêu dùng",
    },
    {
      label: "Đồ điện tử",
      value: "Đồ điện tử",
    },
    {
      label: "Khác",
      value: "Khác",
    },
  ];
  const treeSelectData = [
    {
      value: "Hà Nội",
      label: "Hà Nội",
      children: [
        {
          value: "Bắc Từ Liêm",
          label: "Bắc Từ Liêm",
          children: [
            {
              value: "Phạm Văn Đồng",
              label: "Phạm Văn Đồng",
            },
            {
              value: "Cầu Noi",
              label: "Cầu Noi",
            },
          ],
        },
        {
          value: "Nam Từ Liêm",
          label: "Nam Từ Liêm",
        },
        {
          value: "Cầu Giấy",
          label: "Cầu Giấy",
        },
        {
          value: "Hoàng Mai",
          label: "Hoàng Mai",
        },
      ],
    },
    {
      value: "Hồ Chí Minh",
      label: "Hồ Chí Minh",
      children: [
        {
          value: "Quận 1",
          label: "Quận 1",
        },
        {
          value: "Quận 2",
          label: "Quận 2",
        },
        {
          value: "Quận Thủ Đức",
          label: "Quận Thủ Đức",
        },
        {
          value: "Quận Thủ Dầu Một",
          label: "Quận Thủ Dầu Một",
        },
      ],
    },
  ];

  return (
    <>
      <div className="grid w-full grid-cols-8 gap-x-4">
        <div className="col-span-4">
          {" "}
          <Form.Item label="Họ và tên" name="senderName">
            <Input placeholder="Tên người gửi hàng" type="text" />
          </Form.Item>
          <Form.Item label="Email" name="senderEmail">
            <Input placeholder="Email người gửi hàng" type="email" />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="senderPhoneNumber">
            <Input placeholder="Số điện thoại người gửi" type="number" />
          </Form.Item>
          <Form.Item
            name="typeOfGoods"
            label="Type of Goods"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {typesOfGoods.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.typeOfGoods !== currentValues.typeOfGoods
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("typeOfGoods") === "Khác" ? (
                <Form.Item
                  name="customizeTypeOfGoods"
                  label="Customize Type"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item label="TP, quận, đường" name="senderLocation">
            <Cascader options={treeSelectData} />
          </Form.Item>
          <Form.Item dependencies={["senderLocation"]} noStyle>
            {({ getFieldValue }) =>
              getFieldValue("senderLocation") !== undefined ? (
                <Form.Item
                  name="detailSenderLocation"
                  label="Địa chỉ chi tiết"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input onChange={(e) => console.log(e.target.value)} />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </div>
        <div className="col-span-4 col-start-5">
          <Form.Item label="Khối lượng" name="goodsWeight">
            <Input placeholder="Weight in kg" type="number" />
          </Form.Item>
          <Form.Item
            // hasFeedback
            label="Field A"
            name="field_a"
            validateTrigger="onBlur"
            rules={[
              {
                max: 3,
              },
            ]}
          >
            <Input placeholder="Validate required onBlur" />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Field B"
            name="field_b"
            validateDebounce={1000}
            rules={[
              {
                required: true,
                message: "Enter password to proceed",
              },
              {
                pattern: new RegExp(/.*[A-Z].*/),
                message: "Password must contain at least one uppercase letter",
              },
              {
                pattern: new RegExp(/\w*\d+\w*/),
                message: "Password must contain at least one number",
              },
              {
                pattern: new RegExp(/\w*\W+\w*/),
                message: "Password must contain at least one special character",
              },
            ]}
          >
            <Input placeholder="Validate required debounce after 1s" />
          </Form.Item>

          <Form.Item
            hasFeedback
            label="Field C"
            name="field_c"
            validateFirst
            rules={[
              {
                max: 6,
              },
              {
                max: 3,
                message: "Continue input to exceed 6 chars",
              },
            ]}
          >
            <Input placeholder="Validate one by one" />
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default SenderInforForm;
