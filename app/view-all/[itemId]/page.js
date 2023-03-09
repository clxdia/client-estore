import React from "react";
import CartButton from "../../../ui/CartButton";
import FavoriteButton from "../../../ui/FavoriteButton";

const URL = "http://127.0.0.1:1337/api/products/";

const fetchItem = async (itemId) => {
  const res = await fetch(URL + `${itemId}` + "?populate=*", {
    next: { revalidate: 60 },
  });
  const item = await res.json();
  return item.data;
};

async function ItemPage({ params: { itemId } }) {
  const item = await fetchItem(itemId);

  return (
    <main className="md:w-[80%] w-[90%] mt-[2rem] md:mt-[5rem] m-auto font-work">
      <section className="md:flex gap-10">
        <div className=" items-center self-center flex relative">
          <img
            src={
              "http://localhost:1337" + item.attributes.img.data.attributes.url
            }
            className="w-[100%] md:w-[1500px] md:h-[1000px] object-cover"
          />
          <FavoriteButton className="w-[100px] h-auto" />
        </div>
        <aside className="w-[100%] pt-3 pb-3">
          <div className="h-auto  md:sticky md:top-5">
            <h1 className="md:text-[2rem] text-[1rem] font-black">
              {item.attributes.title}
            </h1>
            <p className="md:text-[1.5rem] mt-4 text-button">
              €{item.attributes.price}
            </p>
            <p className="md:text-[1.3rem] md:text-left text-center mt-4 "></p>
            <p className="mt-5 text-paragraph text-[0.8rem] font-[300]">
              {item.attributes.desc}
            </p>
            <div className="sticky bottom-0 bg-background pb-2 pt-1">
              <CartButton />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ItemPage;
