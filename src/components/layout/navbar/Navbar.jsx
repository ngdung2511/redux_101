import { Avatar, Button, Dropdown, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
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
  const items = [
    {
      key: "1",
      label: <span onClick={showModal}>Thông tin cá nhân</span>,
    },
    {
      key: "2",
      label: (
        <span className="flex items-center text-red-500 ">
          <span className="mr-[10px]">Đăng xuất</span>
          <FiLogOut />
        </span>
      ),
    },
  ];
  return (
    <Header className=" h-[70px] fixed top-0 left-0 right-0 w-full z-[100] mb-[70px] bg-neutral-50 outline-[1px] shadow-md">
      <div className="flex items-center justify-between w-full h-full ">
        <div className="flex items-center gap-4">
          <Avatar
            size={50}
            src={
              "https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-GHTK-V.png"
            }
          />
          <h1 className="m-0 text-4xl">Magic Post</h1>
        </div>

        <Dropdown
          menu={{ items }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <Avatar
            className="border-black cursor-pointer"
            size={50}
            src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Boo"
          />
        </Dropdown>
        <Modal
          title={<h1 className="w-full text-2xl">Thông tin cá nhân</h1>}
          onOk={handleOk}
          onCancel={handleCancel}
          open={isModalOpen}
        >
          <ul className="font-semibold list-none">
            <li>
              Họ và tên: <span>Nguyễn Huy Dũng</span>
            </li>
            <li>
              Email: <span>huydung.jp@gmail.com</span>
            </li>
            <li>
              Ngày sinh: <span>25/11/1969</span>
            </li>
            <li>
              Số điện thoại <span>0989989989</span>
            </li>
          </ul>
          <h3 className="text-lg">Chức vụ</h3>
          <p>Giao dịch viên</p>
          <h3 className="text-lg">Điểm giao dịch</h3>
          <p>Số 120, đường Hoàng Quốc Việt, quận Cầu Giấy, Hà Nội</p>
        </Modal>
      </div>
    </Header>
  );
};

export default Navbar;
