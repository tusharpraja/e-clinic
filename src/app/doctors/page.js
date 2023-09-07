"use client"
import { db } from "src/firebase";
import { doc, collection, getDocs} from "firebase/firestore"
import { useState, useEffect } from "react";
const DoctorPage = () => {

    const getAppointments = async () => {
        const querySnapshot = await getDocs(collection(db, "appointments"));
        console.log(querySnapshot.docs.map((doc) => doc.data()));
        return querySnapshot.docs.map((doc) => doc.data());
    }

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments().then((data) => {
            setAppointments(data);
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <div className={'my-10'}>
            <h1 className=" text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Booked <span className="underline decoration-blue-500">Appointments</span>
            </h1>

            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 mx-auto my-10 gap-4'}>
                {
                    appointments?.map((appointment,index) => {
                        return(
                            <div className={'col-span-1 p-3 flex flex-col gap-2 border-2 border-gray-100 rounded-lg w-full cursor-pointer hover:border-blue-500'} key={index}>
                                <div className={'grid grid-cols-4'}>
                                    <div className={'col-span-1 flex flex-row justify-center '}>
                                        <img src={`https://unsplash.it/150/150?random=${index}`} alt={'user'} className={'w-16 h-16 rounded-full'}/>
                                    </div>
                                    <div className={'col-span-3 flex flex-row justify-between items-center px-2'}>
                                        <div className={'flex flex-col w-full'}>
                                            <div className={'flex flex-row justify-between w-full'}>
                                                <span className={'text-gray-500 text-sm'}>Name</span>
                                                <span className={'text-gray-700 text-sm font-light'}>
                                                    {appointment.date}
                                                </span>
                                            </div>
                                            <span className={'text-gray-800 text-md font-semibold'}>
                                                {appointment.name}
                                            </span>
                                        </div>
                                        <button
                                            className="px-2 py-1 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2">Accept
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DoctorPage