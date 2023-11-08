import { Typography, Space, Card, Statistic } from "antd";
const { Title } = Typography;
import { AiOutlineShoppingCart, AiOutlineDollarCircle } from "react-icons/ai";
import RecentOrders from "../components/dashboard/RecentOrders";
import { useTranslation } from "react-i18next";
const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Title level={1}>{t("Dashboard")}</Title>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Card>
          <Statistic
            prefix={<AiOutlineShoppingCart size={20} />}
            title={t("Orders")}
            value={112893}
          />
        </Card>
        <Card>
          <Statistic
            prefix={<AiOutlineShoppingCart size={20} />}
            title={t("Inventory")}
            value={112893}
          />
        </Card>
        <Card>
          <Statistic
            prefix={<AiOutlineShoppingCart size={20} />}
            title={t("Customer")}
            value={112893}
          />
        </Card>
        <Card>
          <Statistic
            prefix={<AiOutlineDollarCircle size={20} />}
            title={t("Revenue")}
            value={112893}
          />
        </Card>
      </div>
      <div className="mt-4">
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardPage;
