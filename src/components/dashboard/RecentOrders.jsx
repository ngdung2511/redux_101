import { Typography, Table } from "antd";
const { Title } = Typography;
import { useEffect, useState } from "react";
import getOrders from "../../api/getOrders";
const RecentOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      console.log(res.products);
      setIsLoading(false);
    });
  }, []);
  console.log(dataSource);
  //   const dataSource = [
  //     {
  //       key: "1",
  //       name: "Mike",
  //       age: 32,
  //       address: "10 Downing Street",
  //     },
  //     {
  //       key: "2",
  //       name: "John",
  //       age: 42,
  //       address: "10 Downing Street",
  //     },
  //   ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Quantity",
      dataIndex: "stock",
    },

    {
      title: "Discounted Price",
      dataIndex: "price",
    },
  ];

  return (
    <div>
      <Title level={4}>Recent Orders</Title>
      <Table
        scroll={{ x: 1000 }}
        rowKey={(record) => record.id}
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pageSize={10}
      />
    </div>
  );
};

export default RecentOrders;
