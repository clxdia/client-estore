import React from "react";

import Recommendations from "./RecsList";

const URL = "https://fakestoreapi.com/products?limit=4";

const fetchItems = async () => {
  const res = await fetch(URL);
  const items = await res.json();
  return items;
};
async function page() {
  const items = await fetchItems();

  return (
    <div className="md:w-[80%] w-[90%] m-auto mt-20 mb-10">
      <h5 className="text-[1.5rem] md:mb-2 mb-4">
        Altri hanno acquistato anche
      </h5>
      <div className="w-[100%] md:flex sm:flex gap-5">
        {items.map((item) => (
          <Recommendations item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
