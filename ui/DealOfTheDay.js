import Image from "next/image";
import Link from "next/link";
import React from "react";
import getProducts from "../hooks/useFetch";

import image from "../images/bag.png";

async function DealOfTheDay() {
  const item = await getProducts(`9?populate=*`);

  return (
    <Link
      href="/view-all/[id]"
      as={`/view-all/${item.id}`}
      className="w-[100%]"
    >
      <div className="bg-secondary mt-10 cursor-pointer ">
        <div className="lg:w-[70%] w-[90%] max-w-[1800px] m-auto md:grid md:grid-rows-3 md:grid-flow-col  flex flex-col">
          <div className="md:col-span-2 md:row-span-1 h-fit ">
            <h1 className=" text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10 mb-10 md:mb-0 md:text-[2rem] text-[1.5rem]">
              Offerta del giorno
            </h1>
          </div>

          <div className="w-[90%] m-auto md:row-span-2 md:col-span-2 bg-white rounded-md shadow-xl  p-6 relative mb-20">
            <h3 className="text-[1.7rem]">{item.attributes.title}</h3>
            <p className="mt-5">{item.attributes.desc}</p>
            <p className="mt-10 font-[600] text-[2rem] mb-10 text-redish">
              <s className="text-[1.5rem] font-[300] text-secondary mr-5 ">
                €149.99{" "}
              </s>{" "}
              €{item.attributes.price}
            </p>
            <button className="absolute left-0 right-0 m-auto bottom-[-20px] border-button border-[3px] bg-button text-white  w-[100px] h-[50px] text-[1.3rem] hover:border-button hover:border-[3px] hover:bg-white hover:text-button hover:transition hover:ease-in cursor-pointer">
              Vedi
            </button>
          </div>
          <div className="w-[60%]   m-auto md:row-span-3 md:col-span-2 items-center">
            <Image
              src={image}
              alt="/"
              className="w-[100%] p-8 object-scale-down"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DealOfTheDay;
