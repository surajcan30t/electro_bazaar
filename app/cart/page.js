"use client";

import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white text-center">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className="mt-[20%] text-3xl flex flex-row justify-center items-center">
          Oops! cart is empty{" "} &#160;
          <span className="text-5xl">
            <MdRemoveShoppingCart />
          </span>{" "} &#160;
          <Link href="/product"><u className="text-blue-300">Go to shopping</u></Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-center">Product</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="w-96">
                      <Link
                        href={`/product/${item.id}`}
                        className="text-white ml-3"
                      >
                        {/* <img
                          src={item.image}
                          alt={item.name}
                          className="p-1"
                        ></img> */}

                        {item.title}
                      </Link>
                    </td>
                    <td className=" text-right">
                      <select
                        value={item.qty}
                        className="bg-slate-800 text-white"
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">&#8377;{item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card p-5">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) :
                    &#8377;
                    {itemsPrice}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/shipping")}
                    className="primary-button w-full"
                  >
                    Proceed to checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
