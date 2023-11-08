import { CustomerDetail, ThemeProvider } from "@onesme/dxui";
import { Typography } from "antd";
const CustomerDetailPage = () => {
  return (
    <div>
      {/* <div className="custom-store">
        <ThemeProvider>
          <div
            style={{
              columnGap: "16px",
              display: "flex",
              marginBottom: "16px",
            }}
          >
            <Typography.Title level={2}>Customer details</Typography.Title>
          </div>
          <CustomerDetail
            accessToken="iyfeagfuaefgiueagfejaeh"
            customerId={1}
            customerType="personal"
            extraEnterprise={[
              {
                children: <p>Details...</p>,
                label: "Custom menu Enterprise",
              },
            ]}
            extraPersonal={[
              {
                children: (
                  <ul>
                    <li>Đại học Công nghệ</li>
                    <li>Cầu lông</li>
                    <li>Test linh tinh</li>
                  </ul>
                ),
                label: <p>Extra Enterprise Information</p>,
              },
            ]}
          />
        </ThemeProvider>
      </div> */}
    </div>
  );
};

export default CustomerDetailPage;
