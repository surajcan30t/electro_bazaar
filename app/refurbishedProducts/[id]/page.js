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
    <div>
      <div className="pl-20 pt-5 text-xl text-center">
        <Link href="./"><FaArrowLeft /></Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative w-[35vw] h-[60vh] mt-5 md:col-span-2 ml-20 border-[2px] border-gray-400 rounded-lg" >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className='absolute object-contain object-center'
          />
        </div>
        <div className="flex flex-col mt-20">
          <div className="text-2xl text-black capitalize font-bold">
            {product.title}
          </div>
          <div>
            <br />
            <hr />
            <div className="card p-5 flex flex-col">
              <div className="mb-2 flex gap-2">
                <div>MRP</div>
                <div>&#8377;{product.price}</div>
              </div>
              <AddToCart product={product} redirect={true} />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default page