'use client'
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StateProvider";
import App from "@/components/App";
import Background from "@/components/Background";

const omono = Overpass_Mono({ subsets: ["latin"], weights: [200,300, 400] });



export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`relative bg text-black ${omono.className} relative`}>
        <StoreProvider>
          <App className='absolute z-50'>{children}</App>
        </StoreProvider>
      </body>
    </html>
  );
}
