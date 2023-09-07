"use client"
import {useEffect, useRef} from "react";
import {FaUserNurse} from "react-icons/fa";
import Image from "next/image"
const Chat = ({chatData}) => {
    const messageEl = useRef(null)

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])
    return(
        <div className={'max-w-3xl w-full h-[calc(90vh-4.7rem)] mx-auto flex flex-col'}>
            <div className="flex flex-col items-center text-sm dark:bg-gray-800 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent" ref={messageEl}>
                {
                    chatData.map((message,index)=>{
                        return(
                            <div className="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800" key={index}>
                                <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0 m-auto">
                                    <div className="flex-shrink-0 flex flex-col relative items-end w-[30px]">
                                            {
                                                message?.role === 'assistant' &&
                                                    <span className="relative rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center bg-green-400">
                                                        <FaUserNurse/>
                                                    </span>
                                            }
                                            {
                                                message?.role === 'user' &&
                                                    <span className="relative rounded-sm h-[40px] w-[40px] text-white flex items-center justify-center">
                                                        <Image height={40} width={40}  className={'w-full h-full'} src={'/chat-user.png'} alt={"user"}/>
                                                    </span>

                                            }
                                    </div>

                                    <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                                        <div className="flex flex-grow flex-col gap-3">
                                            <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words">
                                                {message?.content}
                                            </div>
                                        </div>
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

export default Chat