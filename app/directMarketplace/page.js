"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBagPlusFill } from "react-icons/bs";
import { category } from "@/utils/category";

const page = (addToCart) => {
  const { categories } = category;
  console.log(categories);
  return (
    <div>
      <div className="ml-60 my-5 max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          PRODUCTS
        </h2>
        <p className="mt-4 z-50 text-black">
          Electronic components like Resistors, Capacitors, Inductors,
          semiconductor ICs, Relays form the backbone of all the technological
          advances today. With these, you can design any system, any model for
          your project. As the saying goes “You want it, we got it” and we at
          robu take extra pride in providing the highest quality products to
          fulfill your ideas at the best price. All products are shipped within
          24 hours and delivered right to your doorstep with the minimum
          shipping charges.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-0 gap-y-5 xl:gap-x-0 font-bold">
          {categories.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-row m-2 rounded-lg p-2 w-[38vw] border-[1px] border-slate-200 hover:border-slate-950 hover:shadow-lg"
            >
              <div className="relative aspect-h-1 w-1/3 overflow-hidden rounded-md bg-gray-300 lg:aspect-none lg:h-52">
                <Link href={`/directMarketplace/${product.id}`}>
                  <img
                    src={product.image}
                    alt={"alt"}
                    width={200}
                    height={200}
                    className="object-cover h-full w-full object-center"
                  />
                </Link>
              </div>
              <div className="mt-4 w-2/3 flex flex-col gap-32 mx-4">
                <div>
                  <h3 className="text-sm text-gray-700 line-clamp-2">
                    <span
                      aria-hidden="true"
                      className="absolute text-black font-bold"
                    />
                    {product.title}
                  </h3>
                </div>
                <p className="text-lg font-extrabold text-black rounded">
                  &#8377;{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    
  );
};

export default page;
