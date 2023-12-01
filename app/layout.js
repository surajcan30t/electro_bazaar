
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StateProvider";
import App from "@/components/App";
import Background from "@/components/Background";

const omono = Overpass_Mono({ subsets: ["latin"], weights: [200,300, 400] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative bg text-black ${omono.className} relative`}>
        <StoreProvider>

        {/* <Background className='absolute top-0 z-0'/> */}
        {/* <div className=" fixed z-0">
          <div className="absolute top-0 left-0 w-screen h-screen">
            <Image
              src={"/rm222-mind-29.jpg"}
              fill
              className="absolute z-0 object-cover object-center max-w-md"
              />
          </div>
        </div> */}
        

           <App className='absolute z-50'>{children}</App>
          </StoreProvider>
      </body>
    </html>
  );
}
