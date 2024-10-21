import { useContext } from "react";
import { ShopContext } from "../../Context";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

/* eslint-disable react/prop-types */
export function Card({data:item}) {
    const {
      openProductDetail,
      setProductToShow,
      cartProducts,
      setCartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      closeProductDetail,
    } = useContext(ShopContext);

    const showProduct = (itemDetail) => {
      openProductDetail()
      setProductToShow(itemDetail);
      closeCheckoutSideMenu();
    }
    
    const addProductsToCart = (event, itemData) => {
      event.stopPropagation()
      setCartProducts([...cartProducts,itemData]);
      openCheckoutSideMenu();
      closeProductDetail();      
    }

    const renderIcon = (id) => {
      const isInCart = cartProducts.filter(product => product.id === id).length > 0; 
      
      if (isInCart) {
        return (
          <FaCheck
            className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-500 text-white"
          />
        );
      } else {
        return (
          <IoMdAdd
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-green-500 hover:text-white"
            onClick={(event) => addProductsToCart(event, item)}
          />
        );
      }
    }
    return (
      <div
        className="bg-white cursor-pointer w-56 h-60"
        onClick={() => showProduct(item)}
      >
        <figure className="relative mb-4 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
            {item?.category.name}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={item?.images[0]}
            alt={item?.title}
          ></img>
          {renderIcon(item.id)}
        </figure>
        <p className="flex justify-between">
          <span className="text-sm font-light">{item?.title}</span>
          <span className="text-lg font-medium">${item?.price}</span>
        </p>
      </div>
    );
    
}


