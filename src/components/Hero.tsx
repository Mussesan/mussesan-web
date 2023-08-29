import { LuCopy } from "react-icons/lu"

export function Hero() {

    return (
        <section className={`
            bg-[url(https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]
            bg-fixed
            h-[48rem] bg-no-repeat bg-cover
            
            `}>
            <div className="bg-gradient-to-t from-black via-black/30 to-purple-800/20 h-full flex items-center">
            

                <div className="container mx-auto  text-white md:px-[7rem]  flex flex-col md:flex-row drop-shadow-2xl shadow-white">
                    
                    <div className="basis-1/2 shadow-inner">
                    <span className={`font-headline font-semibold text-blue-200 md:text-lg text-sm absolute md:-top-18 -top-16 -ml-9 bg-black/60
                    rounded-tr-[50px] rounded-bl-[50px] md:w-[24rem] w-[18rem] h-14 flex justify-center items-center select-none
                    
                    `}>Prazer, meu nome é Gustavo!</span>
                        <div className="font-handwriting text-white md:text-left -ml-5 md:ml-0 select-none">
                            
                            <span className="flex justify-start">
                                <span className="font-headline uppercase font-bold text-6xl md:text-[12rem] text-blue-100">React</span>
                            </span>
                            <span className="font-headline uppercase font-bold  text-6xl md:text-[12rem] text-blue-100">Developer</span>
                        </div>


                        <div className="md:flex items-center justify-start -mb-36">

                            <button
                                type="button"
                                className="px-4 py-3 bg-blue-600 rounded-md unoderline text-white 
                            shadow-md transform active:scale-[102%] mx-2 flex justify-center md:justify-start
                            hover:shadow-md hover:shadow-blue-950 xxs:mt-2 md:mt-0"
                            >
                                <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>

                                <span className="ml-2 font-bold xxs:text-sm md:text-base">Baixe meu CV</span>
                            </button>

                            <span className="italic text-gray-300 mr-px-2 xxs:mx-auto md:mx-2" > ou </span>

                            <a className="px-4 py-3 bg-white/90 rounded-md font-bold unoderline text-blue-700 
                            shadow-md transform active:scale-[102%] mx-2 flex justify-center md:justify-start cursor-pointer
                            hover:shadow-md  xxs:text-xs md:text-base xxs:bt-3 md:bt-0">
                                <LuCopy className="text-blue-700 flex my-auto mr-2 h-5 w-5" />
                                gmusse.dev@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="basis-1/2 text-center flex-col md:flex-row">

                    </div>

                </div>
            </div>
        </section>
    )
}
