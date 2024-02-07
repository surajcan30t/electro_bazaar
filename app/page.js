import Image from "next/image";
import Home from "@/components/Home";
import Link from "next/link";

export default function page() {
  return (
    <main className="">
      <div className="flex flex-col gap-10 m-0 p-0 justify-center items-center w-[98.7vw] h-[91vh] bg-slate-950">

        <div className="flex flex-row gap-10">
          <Link href={"./newElectronics/"}>
            <div className="flex flex-row justify-center w-[25vw] items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/nec.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  Electronic Components
                </h1>{" "}
              </div>
            </div>
          </Link>
          
          <Link href={"./refurbishedProducts"}>
            <div className="flex flex-row justify-center w-[25vw] items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/refurbished.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  Refurbished Products
                </h1>{" "}
              </div>
            </div>
          </Link>

          <Link href={"./directMarketplace"}>
            <div className="flex flex-row justify-center w-[25vw] items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/logo.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  Direct Marketplace
                </h1>{" "}
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-row gap-10">
          <Link href={"./pcbDesign"}>
            <div className="flex flex-row w-[20vw] justify-center items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/pcbd.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  PCB Design
                </h1>{" "}
              </div>
            </div>
          </Link>
          
          <Link href={"./customisedProjects"}>
            <div className="flex flex-row justify-center w-[20vw] items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/projects.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  Customised Projects
                </h1>{" "}
              </div>
            </div>
          </Link>

          <Link href={"./printing3d"}>
            <div className="flex flex-row justify-center w-[20vw] items-center bg-slate-50 rounded-md hover:animate-pulse">
              <div className="relative flex h-20 w-20">
                <Image
                  src="/3d-printer.jpg"
                  fill
                  className="absolute px-2 object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black px-1 text-base text-center font-semibold">
                  3D Printing
                </h1>{" "}
              </div>
            </div>
          </Link>

        </div>
        {/* <div className="flex flex-row gap-32 mt-14 z-30">
          
          
          
        </div>
        <div className="flex flex-row gap-32 mt-14">
          <Link href={"./pcbDesign"}>
            <div className="bg-slate-400 hover:bg-slate-500 rounded-xl shadow-slate-950 shadow-md w-60 h-60  flex flex-col justify-center items-center relative ">
              <div className="relative flex h-28 w-96">
                <Image
                  src="/pcbd.jpg"
                  fill
                  className="absolute object-contain object-centers"
                />
              </div>
              <div>
                <h1 className="text-black text-2xl font-bold z-20 relative">
                  PCB Design
                </h1>{" "}
              </div>
            </div>
          </Link>
          <Link href={"./customisedProjects"}>
            <div className="bg-slate-400 hover:bg-slate-500 rounded-xl shadow-slate-950 shadow-md w-60 h-60  flex flex-col justify-center items-center relative">
              <div className="relative flex h-28 w-52">
                <Image
                  src="/projects.jpg"
                  fill
                  className="absolute object-cover object-centers"
                />
              </div>
              <div>
                <h1 className="text-slate-950 text-center text-2xl font-bold z-20 relative">
                  Customised Projects
                </h1>{" "}
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </main>
  );
}
