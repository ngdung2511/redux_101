import { Typography, Table, Avatar, Rate, Input, Space, Button } from "antd";
import Highlighter from "react-highlight-words";
const { Title } = Typography;
import { useEffect, useState, useRef } from "react";
import getOrders from "../../api/getOrders";
import { AiOutlineSearch } from "react-icons/ai";
const InventoryTable = () => {
  const searchInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  useEffect(() => {
    setIsLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setIsLoading(false);
    });
  }, []);
  // console.log(dataSource);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<AiOutlineSearch />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <AiOutlineSearch
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (link) => <Avatar src={link} size={50} />,
    },
    {
      title: "Title",
      dataIndex: "title",
    },

    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (rating) => <Rate disabled value={rating} count={5} allowHalf />,
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      ...getColumnSearchProps("brand"),
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: [
        {
          text: "Smartphones",
          value: "smartphones",
        },
        {
          text: "Laptops",
          value: "laptops",
        },
      ],
      onFilter: (value, record) => record.category.indexOf(value) === 0,
    },
  ];

  return (
    <div className="w-full h-full">
      <Table
        scroll={{ x: 1000 }}
        className="max-w-full overflow-x-auto"
        rowKey={(record) => record.id}
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default InventoryTable;
