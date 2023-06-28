import { HiDownload } from "react-icons/hi"

export function Hero() {

    return (
        <section className="bg-gradient-to-tr from-black to-gray-700 rounded-br-[12rem]" >
            <div className="container mx-auto max-w-4x1 text-white md:px-[7rem] md:py-[3rem] xxs:px-1 xxs:py-7 flex flex-col md:flex-row">
                <div className="basis-1/2">

                    <h1 className="font-handwriting text-white text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-blue-100 text-center md:text-left">Olá, me chamo </span>
                        <span className="font-headline font-semibold text-5xl">Gustavo </span>
                        <span className="font-headline font-light text-5xl text-blue-400">Musse</span>
                    </h1>

                    <h2 className="items-center justify-center gap-2 flex text-center md:text-left">
                        <div className="h-1 w-12 rounded-full bg-blue-800 "></div>
                        Desenvolvedor Fullstsack React e Node JS
                    </h2>

                    <p className="text-gray-400 my-6 text-center md:text-left">Desenvolvedor apaixonado por tecnologia e aprendizado contínuo com sólida experiência no trabalho em equipe. </p>

                    <div className="flex items-center justify-center md:justify-start">
                        <a href="#contact" className="unoderline font-bold text-white">
                            Fale comigo
                        </a>
                        <span className="italic text-gray-300 mx-2 mr-px-2" > ou </span>

                        <button
                            type="button"
                            className="px-4 py-3 bg-blue-600/80 rounded-md font-bold unoderline text-white 
                            outline-none shadow-md transform active:scale-[102%] mx-2 flex justify-center md:justify-start
                            hover:shadow-md hover:shadow-blue-950"
                        >
                            <svg className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>

                            <span className="ml-2 ">baixe meu CV</span>
                        </button>


                        {/* <a href="#" className="button flex text-gray-500 hover:text-gray-900 flex-center ml-1 ">
                            baixe meu CV<HiDownload className="mr-1 text-center my-auto ml-3" />
                        </a> */}
                    </div>
                </div>

                <div className="basis-1/2 text-center flex-col md:flex-row">
                    <h1>Minha foto </h1>
                </div>

            </div>
            <div className="absolute left-0 -mt-[6px] h-3 xxs:w-60 rounded-r-full bg-gradient-to-t from-black via-blue-800 to-blue-900 md:w-96" />
        </section>
    )
}
