import { QueryClient, QueryClientProvider } from "react-query";
import Shopping from "./Shopping";

const ShoppingCart = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Shopping />
    </QueryClientProvider>
  );
};

export default ShoppingCart;
