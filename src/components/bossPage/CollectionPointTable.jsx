import { useState } from "react";
import { collection_points as data } from "../../mockData/sitesData.json";
import { Form, Input, Modal, Popconfirm, Table } from "antd";

import { BsFillTrashFill } from "react-icons/bs";
console.log(data);
const CollectionPointTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "6%",
      className: "text-center font-bold",
    },
    {
      title: "Tên",
      dataIndex: "name",
      //   sorter: (a, b) => a.age - b.age,
      width: "20%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Phân loại",
      dataIndex: "type",
      filters: [
        {
          text: "Giao dịch",
          value: "Giao Dịch",
        },
        {
          text: "Tập kết",
          value: "Tập Kết",
        },
      ],
      onFilter: (value, record) => record.type.startsWith(value),
      filterSearch: true,
      width: "10%",
    },
    {
      title: "Trưởng điểm",
      dataIndex: "head_of_site",

      width: "10%",
      render: (_, record) => {
        console.log(_);
        console.log(record);
        return (
          <>
            <a className="cursor-pointer hover:underline" onClick={showModal}>
              {record.head_of_site}
            </a>
            <Modal
              title="Thông tin Trưởng điểm"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form>
                <Form.Item>
                  <Input placeholder={record.head_of_site} />
                </Form.Item>
              </Form>
            </Modal>
          </>
        );
      },
    },
    {
      title: "Số lượng",
      className: "text-center",

      children: [
        {
          title: "Nhân viên",
          dataIndex: "number_of_staff",
          key: "building",
          width: "10%",
          className: "text-center",
        },
        {
          title: "Đơn hàng",
          dataIndex: "number_of_goods",
          key: "number",
          width: "10%",
          className: "text-center",
        },
      ],
    },
    {
      title: "Tình trạng",
      render: (_, record) => {
        if (record.number_of_goods > 1000)
          return <p className="font-semibold text-red-500">Quá tải</p>;
        else return <p className="font-semibold text-green-500">Bình thường</p>;
      },
      width: "10%",
    },
    {
      title: "Hành động",
      className: "text-center",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Xác nhận"
            description="Bạn chắc chắn muốn xóa dữ liệu này?"
            okType="danger"
            okText="Xóa"
            cancelText="Hủy"
          >
            <span
              onClick={() => console.log(record.id)}
              className="text-lg cursor-pointer hover:text-red-600"
            >
              <BsFillTrashFill />
            </span>
          </Popconfirm>
        );
      },
      width: "10%",
    },
  ];

  return (
    <div className="w-full h-screen py-4">
      <Table
        rowKey={(row) => row.id}
        columns={columns}
        dataSource={data}
        bordered
        scroll={{
          x: "calc(700px + 50%)",
        }}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
};

export default CollectionPointTable;
