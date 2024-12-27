"use client"
import React from 'react';
import Image from "next/image";
import {IoMdCheckmark} from "react-icons/io";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import {PiArrowCircleLeftLight, PiArrowCircleRightLight} from "react-icons/pi";

function Page() {
    return (
        <>
            <section id="slider-section">
                <div className="container slider_wrap">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide"
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col md:col-span-7 slider_image">
                                    <Image src="/assets/images/newslider1.png" width={1000} height={500}
                                           className="rounded w-full"
                                           alt="helloImg"/>
                                </div>
                                <div className="col md:col-span-5 slider_content">
                                    <div className="head-wrap text-start">
                                        <h1 className="font-semibold text-[24px]">
                                          <span className="text-[#3A5F8A]">
                                            Make connections
                                          </span>
                                            <span className="text-primary">  on Blends</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Discover a vibrant community of buyers and
                                            sellers with shared interests.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Engage in seamless conversations through
                                            integrated messaging protected by end-to-end
                                            encryption.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Build trust by interacting directly with sellers and
                                            buyers.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col md:col-span-7 slider_image">
                                    <Image src="/assets/images/newslider2.png" width={1000} height={500}
                                           className="rounded w-full"
                                           alt="helloImg"/>
                                </div>
                                <div className="col md:col-span-5 slider_content">
                                    <div className="head-wrap text-start">
                                        <h1 className="font-semibold text-[24px]">
                                          <span className="text-[#3A5F8A]">
                                            Find your next favorite
                                          </span>
                                            <span className="text-primary">  on Blends</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Find high-quality, brand-new, or like-new
                                            products at competitive prices.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Explore curated listings with detailed
                                            descriptions and photos.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Stay informed with a straightforward browsing
                                            experience and clear product information.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col md:col-span-7 slider_image">
                                    <Image src="/assets/images/newslider3.png" width={1000} height={500}
                                           className="rounded w-full"
                                           alt="helloImg"/>
                                </div>
                                <div className="col md:col-span-5 slider_content">
                                    <div className="head-wrap text-start">
                                        <h1 className="font-semibold text-[24px]">
                                          <span className="text-[#3A5F8A]">
                                            Turn listings into cash
                                          </span>
                                            <span className="text-primary">  on Blends</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Showcase your products to a ready-to-buy
                                            audience.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Enjoy an easy listing process with tools to
                                            highlight your items.
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2 mt-4">
                                        <div className="icon text-primary">
                                            <IoMdCheckmark size={22}/>
                                        </div>
                                        <h4 className="text-[14px] text-prgcolor">
                                            Maximize visibility by adhering to standardized
                                            quality criteria.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* slider Navigation */}
                        <div className="navi_wrap flex gap-4 justify-end">
                            <div
                                className="button-prev-slide text-primary hover:text-black cursor-pointer">
                                <PiArrowCircleLeftLight size={30}/>
                            </div>
                            <div className="button-next-slide text-primary hover:text-black cursor-pointer">
                                <PiArrowCircleRightLight size={30}/>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Page;