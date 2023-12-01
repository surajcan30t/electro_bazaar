import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div>
        <div className="absolute top-0 left-0 w-screen h-screen">
            <Image
              src={"/cool-background.png"}
              fill
              className="absolute z-0 object-contain object-center"
              />
          </div>
    </div>
  )
}

export default Background