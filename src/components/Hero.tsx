import { HiDownload } from "react-icons/hi"

export function Hero(){

    return (
        <section className="bg-gradient-to-tr from-black to-gray-800 rounded-b-3xl" >
            <div className="container mx-auto max-w-4x1 text-white p-2 py-12 flex flex-col md:flex-row">
                
                <div className="basis-1/2">
                    <h1 className="font-handwriting text-white text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-blue-100 text-center md:text-left">Olá, me chamo </span>
                        <span className="font-headline font-semibold text-5xl">Gustavo </span>
                        <span className="font-headline font-light text-5xl text-blue-400">Musse</span>
                    </h1>
                    <h2 className="items-center justify-center gap-2 flex text-center md:text-left">
                        <div className="h-1 w-12 rounded-full bg-blue-800 "></div>
                        Desenvolvedor Fullstsack React Node JS
                    </h2>

                    <p className="text-gray-400 my-6 text-center md:text-left">Desenvolvedor apaixonado por tecnologia com sólida experiência no trabalho em equipe. </p>

                    <div className="flex items-center justify-center md:justify-start">
                        <a href="#" className="unoderline font-bold text-white">
                            Fale comigo
                        </a>
                        <span className="italic text-gray-300 mx-2 mr-px-2" > ou </span>
                        <a href="#" className="button flex text-gray-500 hover:text-gray-900 flex-center gap-2 ">
                            <HiDownload />baixe meu CV
                        </a>
                    </div>
                </div>

                <div className="basis-1/2 text-center flex-col md:flex-row">
                    <h1>Minha foto </h1>
                </div>

                

            </div>
        </section>
        
    )
}
