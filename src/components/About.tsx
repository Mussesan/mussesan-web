import { SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs} from "react-icons/si";

export function About() {

    return (
        <section className="container mx-auto my-4 max-w-2xl p-4">

            <div className="relative p-4 text-center">
                <h2 className="relative z-50 mb-4 font-bold text-blue-900">
                    <span className="mr-2 font-handwriting text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">mim</span>
                </h2>
          
                <p className="relative text-md text-gray-600 mt-2">
                  Fã de carteirinha da família JavaScript, tenho projetos publicados com as seguintes tecnologias:
                </p>

                <div className="justify-center text-blue-800 my-10 grid md:flex
                 border-slate-700 border-[0.01rem] rounded-lg shadow-lg shadow-gray-400
                  xxs:max-w-[100px] xxs:m-auto xxs:my-[3rem] xs:max-w-lg xs:flex">

                  <span className="mx-5 my-4" >
                    <span className="font-headline text-xl font-bold">React</span>
                    <SiReact className="text-[1.5em] mx-auto"  />                    
                  </span >

                  <span className="mx-5 my-4">
                    <span className="font-headline text-xl font-bold">Next</span>
                    <SiNextdotjs className="text-[1.5em] mx-auto" />
                    
                  </span>

                  <span className="mx-5 my-4" >
                    <span className="font-headline text-xl font-bold">Node</span>
                    <SiNodedotjs className="text-[1.5em] mx-auto"/>
                    
                  </span>

                  <span className="mx-5 my-4" >                      
                      <span className="font-headline text-xl font-bold">Tailwind</span>
                      <SiTailwindcss className="text-[1.5em] mx-auto"/>                      
                  </span>
                </div>

                <span className="relative text-md text-gray-600 mt-5">
                  <p>
                    ''...some text here...''
                    
                  </p>
                </span>
            </div>

            <div className="mx-auto mt-20 max-w-lg mb-10">
                <div className="relative w-full rounded-lg bg-slate-300 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className=" font-handwriting text-xl font-bold mb-2">Olá, muito prazer!</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">Gustavo Musse</span>
                        </p>

                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Idade:
                                    </td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a href="tel:+5534996781980" className="underline hover:text-blue-800">
                                            +55 34 9.9678-1980
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Email:
                                    </td>
                                    <td>
                                        <a href="mailto:joao-test@testemail.com" className="underline hover:text-blue-800">
                                            gmusse.dev@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                      Endereço:
                                    </td>
                                    <td>
                                        <a href="https://goo.gl/maps/LGPsJLLzNzF5xd87A" target="_blank" className="underline hover:text-blue-800">
                                          Uberlândia - MG 
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">Disponível:</td>
                                    <td>
                                        <span className="relative flex h-4 w-4">
                                            <span className="absolute inline-flex h-full w-full animate-ping -z-0 rounded-full bg-green-400 opacity-50"></span>
                                            <span className="m-auto inline-flex h-3 w-3 rounded-full bg-green-500 z-10"></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-slate-300 md:bg-[url('assets/images/man_developer.png')] 
                    bg-contain bg-no-repeat bg-center md:-left-12 md:-top-3 md:h-72 md:w-56 bg-[url('assets/images/face_man.jpg')] align-middle "></div>
                </div>
            </div>
        </section>
    )
}

export default About