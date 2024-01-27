import Image from "next/image";
import Home from "@/components/Home";
import Link from "next/link";

export default function page() {
  return (
    <main className="">
      <div className="flex flex-col m-0 p-0 justify-center items-center w-screen h-[91vh] bg-slate-950">
        <div className="flex flex-row gap-32 mt-14 z-30">
          <Link href={"./newElectronics/"}>
            <div className="bg-slate-400 hover:bg-slate-500 rounded-xl shadow-slate-900 shadow-md w-60 h-60  flex flex-col justify-center items-center">
              <div className="relative flex h-28 w-96">
                <Image
                  src="/nec.jpg"
                  fill
                  className="absolute object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black text-2xl text-center  font-bold z-20">
                  New Electronic Components
                </h1>{" "}
              </div>
            </div>
          </Link>
          <Link href={"./refurbishedProducts"}>
            <div className="bg-slate-400 hover:bg-slate-500 rounded-xl shadow-slate-900 shadow-md w-60 h-60  flex flex-col justify-center items-center">
              <div className="relative flex h-28 w-96">
                <Image
                  src="/refurbished.jpg"
                  fill
                  className="absolute object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black text-2xl text-center font-bold z-20">
                  Refurbished Components
                </h1>{" "}
              </div>
            </div>
          </Link>
          <Link href={"./directMarketplace"}>
            <div className="bg-slate-400 hover:bg-slate-500 rounded-xl shadow-slate-900 shadow-md w-60 h-60  flex flex-col justify-center items-center">
              <div className="relative flex h-28 w-96">
                <Image
                  src="/logo.jpg"
                  fill
                  className="absolute object-contain object-center"
                />
              </div>
              <div>
                <h1 className="text-black text-2xl text-center font-bold z-20">
                  Direct MarketPlace
                </h1>{" "}
              </div>
            </div>
          </Link>
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
        </div>
      </div>
    </main>
  );
}
