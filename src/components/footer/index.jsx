const Footer = () => {
    const footer = [
        {
            category:"About",
            links:[
                {
                    label:"E-Clinic",
                    link:"/about/e-clinic"
                },
                {
                    label:"Our Doctors",
                    link:"/about/e-clinic"
                },
                {
                    label:"Our Functioning",
                    link:"/about/e-clinic"
                },
            ]
        },
        {
            category:"Services",
            links:[
                {
                    label:"Book Appointment",
                    link:"/services/book-appointment"
                },
                {
                    label:"Consultation",
                    link:"/services/consultation"
                },
                {
                    label:"Medical Tests",
                    link:"/services/medical-tests"
                },
            ]
        },
        {
            category:"Contact Us",
            links:[
                {
                    label:"Email",
                    link:"/contact-us/email"
                },
                {
                    label:"Phone",
                    link:"/contact-us/phone"
                },
                {
                    label:"Address",
                    link:"/contact-us/address"
                },
            ]
        }
    ]
    return(
        <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-100">
            <div className="mx-auto w-full container px-10 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <span className={"text-3xl font-bold"}>E-Clinic</span>

                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        {
                            footer.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{item.category}</h2>
                                        <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                            {
                                                item.links.map((link,index)=>{
                                                    return(
                                                        <li className="mb-4" key={index}>
                                                            <a href={link.link} className="hover:underline">{link.label}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://flowbite.com/" className="hover:underline">E-Clinic™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;