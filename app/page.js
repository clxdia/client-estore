import React from "react";

import DealOfTheDay from "../ui/DealOfTheDay";
import SwiperMB from "../ui/SwiperMB";
import SwiperComponent from "../ui/Swiper";
import NewArrivals from "../ui/NewArrivals";
import Banner from "../ui/Banner";
import Categories from "../ui/Categories";
import Articles from "../ui/Articles";

const Home = () => {
  return (
    <main>
      <SwiperComponent />
      <SwiperMB />
      <NewArrivals />
      <section>
        <DealOfTheDay />
      </section>
      <Categories />
      <Banner />
      <Articles />
    </main>
  );
};

export default Home;
