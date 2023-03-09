import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineShoppingCart,
  AiOutlineWallet,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="md:w-[100%] w-[90%] max-w-[1800px] lg:w-[100%] h-auto mt-[5rem] md:mt-[10rem] m-auto grid md:grid-cols-4 gap-1 grid-cols-2 text-center">
      <article className="gap-3 p-10 items-center bg-white cursor-pointer md:flex flex flex-col-reverse ">
        <div className="flex-col text-center ">
          <p className="font-[500]">SPEDIZIONE GRATIS</p>
        </div>
        <div>
          <AiOutlineShoppingCart size={30} />
        </div>
      </article>
      <article className="gap-3 p-10 items-center  bg-white cursor-pointer md:flex flex flex-col-reverse ">
        <div className="flex-col text-center">
          <p className="font-[500]">PAGAMENTO SICURO</p>
        </div>
        <div>
          <AiOutlineWallet size={30} />
        </div>
      </article>
      <article className="gap-3 p-10 items-center  bg-white cursor-pointer md:flex flex flex-col-reverse ">
        <div className="flex-col text-center">
          <p className="font-[500]">SPEDIZIONE GRATIS</p>
        </div>
        <div>
          <AiOutlineCreditCard size={30} />
        </div>
      </article>
      <article className="gap-3 p-10 items-center  bg-white  cursor-pointer md:flex flex flex-col-reverse ">
        <div className="flex-col text-center ">
          <p className="font-[500]">SPEDIZIONE GRATIS</p>
        </div>
        <div>
          <BsGlobe size={30} />
        </div>
      </article>
    </section>
  );
};

export default Banner;
