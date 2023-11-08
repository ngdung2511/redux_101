import { CreateCustomer, ThemeProvider } from "@onesme/dxui";

const CreateCustomerPage = () => {
  return (
    <ThemeProvider>
      <CreateCustomer
        customerType="enterprise"
        token="xkPsX0AzoepFRbBVwKw6ryBJomI"
      />
    </ThemeProvider>
  );
};

export default CreateCustomerPage;
