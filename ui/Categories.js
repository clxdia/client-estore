import Image from "next/image";
import React from "react";
import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";
import category5 from "../images/category5.png";

const Categories = () => {
  return (
    <section className="max-w-[1800px] lg:w-[70%] w-[90%] m-auto">
      <h4
        className="
      m-auto text-black font-work font-[500] underline decoration-button decoration-4 underline-offset-8 z-30 pt-10 md:text-[2rem] text-[1.5rem] mb-10"
      >
        Categorie
      </h4>
      <div className="flex w-[100%] h-auto gap-5 md:gap-20 lg:gap-30 justify-between">
        <Image src={category1} alt="/" className="w-[100%] h-auto" />
        <Image src={category2} alt="/" className="w-[100%] h-auto" />
        <Image src={category3} alt="/" className="w-[100%] h-auto" />
        <Image src={category4} alt="/" className="w-[100%] h-auto" />
        <Image src={category5} alt="/" className="w-[100%] h-auto" />
      </div>
    </section>
  );
};

export default Categories;
