import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import Menubutton from "./Menubutton";

export default function Navbar() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  const pathname = usePathname();

  return (
    <>
      <div className="top-0 z-50 sticky dark:text-zinc-50 text-while">
        <div className="h-16 bg-slate-950 z-50 top-0 backdrop-saturate-200 backdrop-blur-[6px] shadow-lg flex justify-around md:justify-around items-center">
          <div className="flex justify-center items-center mr-20 md:m-2">
            <Link href="/">
              <Image src="/logo.jpg" width={40} height={40} alt="/" />
            </Link>
            <Link href="/">
              <span className="m-2 md:text-3xl text-cyan-200 text-2xl font-bold">
                ELECTRO BAZAR
              </span>
            </Link>
          </div>

          <div className="search-bar flex items-center">
            <input
              type="text"
              className="w-[20rem] p-[0.5rem] placeholder:text-slate-900 bg-slate-300 text-black ring-0 rounded-full"
              placeholder="Search Here..."
            />
            <button className="sbtn p-[0.2rem] bg-transparent text-white cursor-pointer text-xl font-bold transition-all ease-in hover:scale-110 hover:rotate-6">
              <IoSearchOutline />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex justify-center text-while items-center mx-9">
                {/* <Link href="./home">
                  <li className="m-2 hover:text-cyan-200 hover:scale-110 rounded-full px-3 transition-all ease-in-out duration-100">
                    Home
                  </li>
                </Link> */}
                <Link href="/about">
                  <li className="m-2 hover:text-cyan-200 hover:scale-110 rounded-full px-3 transition-all ease-in-out duration-100">
                    About
                  </li>
                </Link>
                <Link href="/login">
                  <li className="m-2 hover:text-cyan-200 hover:scale-110 rounded-full px-3 transition-all ease-in-out duration-100">
                    Login
                  </li>
                </Link>
                <Link href="/cart">
                  <li className="flex flex-row-reverse justify-center items-center gap-2 hover:text-cyan-200 hover:scale-110">
                    <span className="cart-badge">
                      {loading ? "0" : cartItems.reduce((a, c) => a + c.qty, 0)}
                    </span>
                      <FaShoppingCart />
                    {!loading &&
                      cartItems.length > 0 &&
                      pathname !== "/cart" && <div className="caret"></div>}
                  </li>
                </Link>
              </ul>
            </div>

            <div className="md:m-3 flex pt-2 justify-center items-center">
              <div>
                <div className="focus:bg-none  p-2">
                  <Menubutton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
