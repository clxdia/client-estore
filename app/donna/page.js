import Link from "next/link";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ItemUI from "../../ui/ItemUI";
import getProducts from "../../hooks/useFetch";

async function page() {
  const items = await getProducts(
    `?populate=*&filters[categories][title][$eq]=donna`
  );

  return (
    <main>
      <h1 className="text-[2rem] text-black font-work font-[500] text-center p-10">
        Abbigliamento: Donna
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto ">
        <div className="flex flex-wrap gap-3 justify-center">
          {items.map((item) => (
            <ItemUI item={item} key={item.id} />
          ))}
        </div>
      </div>
      <section className="m-auto grid  grid-cols-2 gap-10 mt-10 md:mt-[5rem]">
        <Link href="/uomo" className="justify-self-end ">
          <h3 className="text-[1.2rem]">Uomo</h3>
          <div className="flex justify-end">
            <BsArrowLeftShort size={30} className="hover:text-redish" />
          </div>
        </Link>
        <Link href="/accessori">
          <h3 className="text-[1.2rem]">Accessori</h3>
          <BsArrowRightShort size={30} className="hover:text-redish" />
        </Link>
      </section>
    </main>
  );
}

export default page;
