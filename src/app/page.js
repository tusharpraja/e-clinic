"use client"
import {BsCreditCard2Front, BsCalendar3} from "react-icons/bs";
import {TbFileReport} from "react-icons/tb"
import {FaHistory, FaStar} from "react-icons/fa"

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Autoplay} from "swiper";
import { Footer } from "@/components";

export default function Home() {

    const services = [
        {
            icon: <BsCreditCard2Front className={"text-4xl"}/>,
            title: "Smart Card",
            description: "provides a digital card that stores and manages personal information such as identification and payment details."
        },
        {
            icon: <BsCalendar3 className={"text-4xl"}/>,
            title: "Make Appointment",
            description: "allows users to schedule appointments with healthcare providers or other service providers."
        },
        {
            icon: <TbFileReport className={"text-4xl"}/>,
            title: "Medical Report",
            description: "provides access to digital reports that contain medical test results and other healthcare-related information."
        },
        {
            icon: <FaHistory className={"text-4xl"}/>,
            title: "Medical History\n",
            description: "allows users to view their medical history, including previous diagnoses, treatments, and medications."
        },
    ]

    const doctors = [
        {
            image: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Dr.John Deo",
            category: "Cardiologists",
            rating: 4.5,
            reviews: 56
        },
        {
            image: "https://randomuser.me/api/portraits/women/42.jpg",
            name: "Dr. Jane Smith",
            category: "Dermatologists",
            rating: 4.9,
            reviews: 102
        },
        {
            image: "https://randomuser.me/api/portraits/men/72.jpg",
            name: "Dr. Mark Johnson",
            category: "Oncologists",
            rating: 4.2,
            reviews: 34
        },
        {
            image: "https://randomuser.me/api/portraits/women/91.jpg",
            name: "Dr. Emily Brown",
            category: "Pediatricians",
            rating: 4.7,
            reviews: 76
        },
        {
            image: "https://randomuser.me/api/portraits/women/66.jpg",
            name: "Dr. Rachel Lee",
            category: "Psychiatrists",
            rating: 4.3,
            reviews: 28
        },
        {
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            name: "Dr. Michael Chen",
            category: "Gastroenterologists",
            rating: 4.8,
            reviews: 89
        },
        {
            image: "https://randomuser.me/api/portraits/women/13.jpg",
            name: "Dr. Sophia Rodriguez",
            category: "Endocrinologists",
            rating: 4.6,
            reviews: 44
        }
    ]

    return (
        <>

            <main className="flex flex-col items-center justify-between">
                <div className={"w-full container"}>
                    <img src={"/home-bg.png"} alt={"background"} className={"w-full object-cover rounded-b-xl"}/>
                </div>

                {/*Our Services*/}
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className=" text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            our <span className="underline decoration-blue-500">Services</span>
                        </h1>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">

                            {
                                services.map((service, index) => {
                                    return (
                                        <div
                                            className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
                                            key={index}>
                      <span className="inline-block text-blue-500 dark:text-blue-400">
                        {service.icon}
                      </span>

                                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{service.title}</h1>

                                            <p className="text-gray-500 dark:text-gray-300">{service.description}</p>

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>


                {/*  Our Doctors */}
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto flex flex-col">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Our Doctors
                        </h1>

                        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                            Specialized Doctors from 100+ Hospitals
                        </p>

                        <div className="container w-full max-w-[85vw] ">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                breakpoints={{
                                    770: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    1080: {
                                        slidesPerView: 3,
                                        spaceBetween: 40
                                    }
                                }}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    stopOnLastSlide: false,
                                    reverseDirection: true
                                }}
                                modules={[Autoplay]}
                                loop={true}
                                grabCursor={true}
                                className="mySwiper mx-auto px-4 md:max-w-auto"
                            >
                                {
                                    doctors.map((doctor, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div
                                                    className="col-span-1 flex flex-col items-center p-8 border rounded-xl ">
                                                    <img
                                                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                                        src={doctor.image}
                                                        alt={doctor.name}/>

                                                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                                        {doctor.name}
                                                    </h1>

                                                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                                        {doctor.category}
                                                    </p>

                                                    <div className="flex items-center my-1 group-hover:text-gray-100">
                                                        <FaStar className={"text-amber-500"}/>
                                                        <p className="ml-2 text-sm font-bold">{doctor.rating}</p>
                                                        <span className="w-1 h-1 mx-1.5 rounded-full "></span>
                                                        <a href="#"
                                                           className="text-sm font-medium underline hover:no-underline ">
                                                            {doctor.reviews}
                                                            reviews</a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )

                                    })
                                }
                            </Swiper>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
