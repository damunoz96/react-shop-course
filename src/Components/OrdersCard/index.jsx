import { FaArrowRight } from "react-icons/fa";

export function OrderCards(productDetail) {
  const { totalPrice, totalProducts } = productDetail;

  return (
    <div className="flex items-center border border-black p-4 mb-5 rounded-lg w-80 hover:bg-gray-300">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
            <span className="font-medium text-2xl ">${totalPrice}</span>
            <FaArrowRight className="align-middle justify-center"/>
        </p>
      </div>
    </div>
  );
}
