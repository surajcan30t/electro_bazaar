"use client";
import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiOutlineUpload } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";
import Image from "next/image";

export default function page() {
  const [file, setFile] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("File not uploaded");
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="relative flex max-h-screen flex-col text-white items-center justify-center p-2 capitalize">
      <div className="absolute top-0 left-0 w-screen h-screen">
        <Image
          src={"/elearth1.jpg"}
          fill
          className="object-fill object-center"
        />
      </div>

      <div className="bg-gray-800 z-10 shadow-md shadow-slate-700 text-white w-[500px] flex flex-col justify-center items-center  rounded mt-10">
        <div className="m-2 text-3xl">Upload your student ID proof</div>
        <div className=" flex-col justify-center items-center">
          <form
            onSubmit={onSubmit}
            className=" m-2 flex flex-col justify-center items-center"
          >
            <label htmlFor="uid">
              Name<span className="text-red-600">*</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Mr Bean"
              className="w-[100%] border-2 border-black p-2 rounded-lg text-white bg-slate-800 m-2"
            ></input>

            <label htmlFor="uid">
              University<span className="text-red-600">*</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Mr Bean"
              className="w-[100%] border-2 border-black p-1 placeholder:p-2 rounded-lg text-white bg-slate-800 m-2"
            ></input>

            <label htmlFor="uid">
              Registration No.<span className="text-red-600">*</span>{" "}
            </label>
            <input
              type="text"
              placeholder="Mr Bean"
              className="w-[100%] border-2 border-black p-2 rounded-lg text-white bg-slate-800 m-2"
            ></input>

            {/* <input type="file" name='file'  className='ml-10 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'/> */}
            <div className="flex items-center justify-center w-full mt-5">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-2 pb-2">
                  <svg
                    className="w-8 h-8 mb-2 text-grsay-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0])}
                  className="hidden p-4"
                />
              </label>
            </div>

            <button className="bg-green-500 mt-10 text-white flex-row flex justify-around items-center p-4 rounded-lg">
              <HiOutlineUpload />
              <span className="ml-2">upload</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
// export function metadata() {
//   return { title: 'upload file' }
// }
