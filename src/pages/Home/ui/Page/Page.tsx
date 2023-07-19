import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

const Home: FC = () => {
  return (
    <>
      <section>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel]}
          className="h-full"
        >
          <SwiperSlide>
            <h1 className="z-30 text-8xl font-black uppercase leading-none text-white xl:w-[1172px]">
              Embrace scarcity, unlock self-control
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-8xl font-black uppercase leading-none text-white xl:w-[1065px]">
              Rediscover the power of restraint
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-8xl font-black uppercase leading-none text-white xl:w-[834px]">
              Your guide to a balanced and intentional lifestyle
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
