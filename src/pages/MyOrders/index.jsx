import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCards } from "../../Components/OrdersCard";
import { ShopContext } from "../../Context";

export function MyOrders() {
  const {
    order
  } = useContext(ShopContext);
  return (
    <Layout>
      <div className="flex items-center justify-center w-96 relative mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => (

        <Link key={index} to={`/my-orders/${index}`}>
          <OrderCards
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))
      }
    </Layout>
  );
}
