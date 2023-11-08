import { Typography } from "antd";
const { Title } = Typography;

import InventoryTable from "../components/inventory/InventoryTable";
const InventoryPage = () => {
  return (
    <div className="w-full h-full">
      <Title level={1}>Inventory</Title>
      <div className="mt-4">
        <InventoryTable />
      </div>
    </div>
  );
};

export default InventoryPage;
