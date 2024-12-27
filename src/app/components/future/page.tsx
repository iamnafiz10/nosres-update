import React from 'react';
import Image from "next/image";
import {HiOutlineArrowRightCircle} from "react-icons/hi2";
import Link from "next/link";

function Page() {
    return (
        <>
            <section id="future-section">
                <div className="container">
                    <div className="relative future-section overflow-hidden rounded p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="col">
                                <Image src="/assets/images/future-team.jpg" width={1000} height={500}
                                       className="rounded-xl"
                                       alt="helloImg"/>
                            </div>
                            <div className="col">
                                <h2 className="text-[18px] font-semibold text-black">
                                    Build the future with Nosres
                                </h2>
                                <h4 className="text-[14px] text-prgcolor">
                                    Join a team dedicated to innovation, creativity,
                                    and impact. Explore opportunities to grow,
                                    connect, and make a difference with us.
                                </h4>
                                <div
                                    className="mt-4 flex cursor-pointer items-center gap-1 justify-start text-primary hover:text-[#3A5F8A]">
                                    <HiOutlineArrowRightCircle size={30}/>
                                    <Link href='/'
                                          className="text-[14px]">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;