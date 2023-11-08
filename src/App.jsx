import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import InventoryPage from "./pages/InventoryPage";
import DashboardPage from "./pages/DashboardPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import CustomerDetail from "./pages/CustomerDetail";
import CreateCustomerPage from "./pages/CreateCustomerPage";
import ManageSitesPage from "./pages/bossPage/ManageSitesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/transport/create-order" element={<CreateOrderPage />} />
        <Route path="/customer-detail" element={<CustomerDetail />} />
        <Route path="/create-customer" element={<CreateCustomerPage />} />
      </Route>
      <Route path="/" element={<Home />}>
        <Route path="/boss/manage-sites" element={<ManageSitesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
