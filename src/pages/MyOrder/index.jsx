import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShopContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { IoChevronBack } from "react-icons/io5";

export function MyOrder() {
  const {
    order
  } = useContext(ShopContext)
  console.log(order)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === 'last') {index = order?.length - 1}

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <IoChevronBack className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-96">
        {order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          );
        })}
      </div>
    </Layout>
  );
}
