import { Modal, Select } from "antd";
import { useState } from "react";
import { Form } from "react-router-dom";

const Setting = ({ isModalOpen, setIsModalOpen }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Settings"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form.Item label="Language">
        <Select
          defaultValue="English"
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={[
            {
              label: "English",
              value: "en",
            },
            {
              label: "Vietnamese",
              value: "vi",
            },
          ]}
        />
      </Form.Item>
    </Modal>
  );
};

export default Setting;
