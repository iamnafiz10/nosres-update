import React from 'react';
import Image from "next/image";

function Page() {
    return (
        <>
            <section id="patner-section" className="mt-14">
                <div className="container py-10">
                    <div className="head-wrap text-start">
                        <h1 className="font-semibold text-[24px]">
                              <span className="text-[#3A5F8A]">
                                Nosres Blends is more than a marketplace—it&apos;s a community
                              </span>
                            <br/>
                            <span className="text-primary">built on trust, quality, and simplicity.</span>
                        </h1>
                        <p className="mt-3 text-[#ABABAB] text-[16px]">
                            Whether you’re connecting with like-minded buyers and sellers, finding your next great deal,
                            or<br/>
                            turning unused items into income, Nosres Blens makes the process seamless and rewarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card_box col image-box py-10 px-8 flex flex-col justify-center rounded-md relative overflow-hidden">
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-[#009045] to-[#DAE2F9] opacity-[30%] z-10"></div>
                            <Image src="/assets/images/patner1.svg" width={1000} height={500}
                                   className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content mt-4">
                                <h2 className="font-semibold text-[16px] text-black">Curated and Simplified
                                    Selection</h2>
                                <h4 className="mt-3 text-[14px] text-black">
                                    Only brand-new or like-new items for
                                    consistent quality
                                </h4>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card_box col image-box py-10 px-8 flex flex-col justify-center rounded-md relative overflow-hidden">
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-[#29A9E0] to-[#DAE2F9] opacity-[30%] z-10"></div>
                            <Image src="/assets/images/patner2.svg" width={1000} height={500}
                                   className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content mt-4">
                                <h2 className="font-semibold text-[16px] text-black">
                                    Real-Time Messaging with
                                    End-to End Encryption
                                </h2>
                                <h4 className="mt-3 text-[14px] text-black">
                                    Seamless interactions between users to
                                    foster trust and collaboration
                                </h4>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000"
                             className="card_box col image-box py-10 px-8 flex flex-col justify-center rounded-md relative overflow-hidden">
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-[#00FFFF] to-[#DAE2F9] opacity-[30%] z-10"></div>
                            <Image src="/assets/images/patner3.svg" width={1000} height={500}
                                   className="w-[80px] rounded-md" alt="patnerImg"/>
                            <div className="content mt-4">
                                <h2 className="font-semibold text-[16px] text-black">
                                    A Community-Driven Platform
                                </h2>
                                <h4 className="mt-3 text-[14px] text-black">
                                    Strong relationships, quality discovery,
                                    seamless trades
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;