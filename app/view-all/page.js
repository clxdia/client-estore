import React from "react";
import ItemUI from "../../ui/ItemUI";
import getProducts from "../../hooks/useFetch";

async function page() {
  const items = await getProducts(`?populate=*`);
  return (
    <div>
      <h1 className="text-[2rem] text-black font-work font-[500] text-center p-10">
        Prodotti del momento
      </h1>
      <div className="md:w-[80%] w-[90%] m-auto ">
        <div className="flex flex-wrap gap-3 justify-center">
          {items.map((item) => (
            <ItemUI item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
