import { Divider } from "antd";
import Typography from "antd/es/typography/Typography";
import CollectionPointTable from "../../components/bossPage/CollectionPointTable";

const ManageSitesPage = () => {
  return (
    <div className="w-full h-screen">
      <Typography.Title className="mb-0" level={1}>
        Quản lý điểm kho
      </Typography.Title>
      <Divider />
      <div className="w-full">
        <Typography.Title className="mb-0" level={3}>
          Điểm Giao dịch và Tập kết
        </Typography.Title>
        <CollectionPointTable />
      </div>
    </div>
  );
};

export default ManageSitesPage;
