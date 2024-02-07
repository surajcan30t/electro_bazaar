import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {category} from "@/utils/category"
import { FaArrowLeft } from 'react-icons/fa'
import AddToCart from '@/components/AddToCart'
// import AddToCart from '@/components/AddToCart'


const page = async ({ params: { id } }) => {
    const product = category.categories.find((x) => x.id === id)
    console.log(product)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div className="min-h-screen">
      <div className="pl-20 pt-5 text-xl text-center">
        <Link href="./">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="flex flex-row gap-5">
        <div className="relative w-2/6 h-[60vh] mt-5 md:col-span-2 ml-20 border-[1px] border-gray-200 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="absolute object-contain object-center"
          />
        </div>
        <div className="w-3/6 flex flex-col mt-20">
          <div className="text-2xl text-black lowercase font-semibold ">
            {product.title}
          </div>
          <div>
            <br />
            <hr />
            <div className="card p-5 flex flex-col">
              <div className=" mt-20 mb-2 w-fit flex gap-2 text-black font-extrabold text-lg rounded-lg px-2 py-1">
                <div>MRP</div>
                <div>&#8377;{product.price}</div>
              </div>
              <div className="w-48">
                <AddToCart product={product} redirect={true} />
              </div>
              <div className="mt-16">
                <span className="text-black font-semibold">About this product: </span><br />
                {product.about}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6"></div>
      </div>
    </div>
  )
}

export default page