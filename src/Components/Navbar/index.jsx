import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShopContext } from "../../Context";
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
    const activeStyle = 'underline text-lg'
    const {
      openCheckoutSideMenu,
      cartProducts,
      closeProductDetail,
      setSearchByCategory,
    } = useContext(ShopContext);

    function openCart () {
      closeProductDetail();
      openCheckoutSideMenu();
    }
    return (
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-slate-100">
        <ul className="flex justify-between items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to={"/"} className={"text-lg"}>
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clothes"}
              onClick={() => setSearchByCategory("clothes")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/electronics"}
              onClick={() => setSearchByCategory("electronics")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/furnitures"}
              onClick={() => setSearchByCategory("furnitures")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/toys"}
              onClick={() => setSearchByCategory("toys")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/others"}
              onClick={() => setSearchByCategory("others")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-3">
          <li>damunoz96@gmail.com</li>
          <li>
            <NavLink
              to={"/my-orders"}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-account"}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/sign-in"}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li
            className="flex flex-row justify-between w-7 items-center cursor-pointer"
            onClick={() => openCart()}
          >
            <FaShoppingCart className="" />
            {cartProducts.length}
          </li>
        </ul>
      </nav>
    );
}