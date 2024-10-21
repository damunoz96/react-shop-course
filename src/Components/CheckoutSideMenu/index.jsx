import { useContext } from "react";
import "./styles.css";
import { IoClose } from "react-icons/io5";
import { ShopContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils/totalPrice/index";
import { Link } from "react-router-dom";

export function CheckOutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useContext(ShopContext);

  function handleDelete(id){
       const filteredProducts = cartProducts.filter(product => product.id != id)
       setCartProducts(filteredProducts);
  }

  function handleCheckout() {
    const orderToAdd = {
      date:  '17.10.2024',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
    closeCheckoutSideMenu();

  }



  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg"> My Order </h2>
        <IoClose
          className="cursor-pointer"
          onClick={() => closeCheckoutSideMenu()}
        />
      </div>
      <div className="p-5 overflow-y-scroll flex-1">
        {cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total price:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className="bg-black w-full py-3 text-white bottom-0 rounded-lg" 
            onClick={() => handleCheckout()}>CHECKOUT            
          </button>
        </Link>
      </div>
    </aside>
  );
}
