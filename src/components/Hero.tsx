import { SiTailwindcss } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { BiGlassesAlt } from 'react-icons/bi'
import { MdComputer } from 'react-icons/md'

export function Hero() {

    return (
        <section className={`
            bg-[url(https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]
            bg-fixed
            h-[45rem] bg-no-repeat bg-cover
            
            `}>
            <div className="bg-gradient-to-t from-black via-black/30 to-purple-800/20 h-full flex items-center">
                <div className="container mx-auto  text-white md:px-[5rem] 2xl:px-[12rem] flex flex-col md:flex-row drop-shadow-2xl shadow-white">
                    <div className="basis-1/2 shadow-inner">
                        <span className={`font-headline font-semibold text-white-90 md:text-lg text-sm absolute md:-top-24 -top-28
                        -ml-9 bg-black/60 rounded-tr-[50px] rounded-bl-[50px] md:w-[24rem] w-[18rem] h-14 flex justify-center 
                        items-center select-none                    
                        `}>
                            Prazer, meu nome é Gustavo!
                        </span>
                        <div className="text-white md:text-left -ml-5 md:ml-0 select-none">
                            <span className="flex flex-col justify-start">
                                <span className="font-headline uppercase font-bold text-6xl md:text-[12rem] text-blue-100">React</span>
                                <div className={`flex md:text-[3rem] absolute md:right-[18rem] md:top-[7.8rem] gap-2 text-yellow-200
                                text-2xl -right-1 top-7 2xl:right-[29rem]
                                `}>
                                    <span className='animate-spin-slow '>
                                        <DiReact />
                                    </span>

                                    <span>
                                        <SiTailwindcss />
                                    </span>

                                    <span>
                                        <BiGlassesAlt />
                                    </span>

                                    <span className=''>
                                        <MdComputer />
                                    </span>
                                    
                                    
                                </div>
                                <span className="font-headline uppercase font-bold  text-6xl md:text-[12rem] text-blue-100">Developer</span>
                            </span>
                        </div>


                        <div className={`md:flex items-center text-center md:justify-end absolute -bottom-[12rem] md:-bottom-[4rem] md:right-20 2xl:right-[15rem]

                        `}>

                            <button
                                type="button"
                                className="px-4 py-3 w-[10rem] md:w-[12rem] bg-blue-600 rounded-md unoderline text-white 
                            shadow-md transform active:scale-[102%] mx-2 flex justify-center md:justify-start
                            hover:shadow-md hover:shadow-blue-950 xxs:mt-2 md:mt-0 md:rounded-l-[3rem] rounded-t-3xl"
                            >
                                <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>

                                <span className="ml-2 font-bold xxs:text-sm md:text-base ">Baixe meu CV</span>
                            </button>

                            <span className="italic text-gray-300 mr-px-2 md:mx-2" > ou </span>

                            <a href='#contact'
                            className={`px-4 py-3 bg-white/90 rounded-md font-bold unoderline text-blue-700 
                            shadow-md transform active:scale-[102%] mx-2 flex justify-center md:justify-start cursor-pointer
                            hover:shadow-md  xxs:text-xs md:text-base xxs:bt-3 md:bt-0
                            w-[10rem] md:w-[12rem] md:rounded-r-[3rem] rounded-b-3xl`}>
                                
                                Fale comigo
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
