import { useContext } from 'react';
import './styles.css'
import { IoClose } from "react-icons/io5";
import { ShopContext } from '../../Context';

export function ProductDetail() {
    const { isProductDetailOpen, closeProductDetail, productToShow } =
      useContext(ShopContext);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg"> Product Detail </h2>
        <IoClose
          className="cursor-pointer"
          onClick={() => closeProductDetail()}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.images?.[0]}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6 overflow-y-scroll">
        <span className="font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}
