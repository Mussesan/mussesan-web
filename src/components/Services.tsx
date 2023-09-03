import { HiCommandLine, HiComputerDesktop, HiUsers } from "react-icons/hi2"

export function Services() {
    const services = [
        {
            title: "Web",
            description:
                "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React e Tailwind Next.js, HTML5 e CSS3.",
            icon: <HiComputerDesktop className="h-12 w-12" />,
        },
        {
            title: "Sistemas",
            description: "Desenvolvimento de sistemas e APIs Rest com Node.js.",
            icon: <HiCommandLine className="h-12 w-12" />,
        },
        {
            title: "Trabalho em Equipe",
            description: "Saber trabalhar de forma respeitosa, empática e responsável é algo que me acompanha na minha carreira.",
            icon: <HiUsers className="h-12 w-12" />
        }
    ]

    

    return (        
    <section className=" shapedividers_com-2310">
        <div className={`bg-[url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] h-auto text-center pt-36
        bg-fixed bg-cover bg-no-repeat
        flex flex-col items-center
        `}>
            <div className="h-screen container">
                <div className="bg-gray-100/40 h-[70rem] border-2 rounded-[10rem] border-zinc-400">
                    <span><h1 className="uppercase text-5xl mt-8">serviços</h1></span>
                    <div className=" container text-center mt-20">

                            <div className="my-7 flex flex-col gap-20 md:flex-row md:mx-20 xxs:mx-10">
                                {services.map((service, index) => (

                                    <div className="">
                                        <div className="mb-7 basis-1/3 rounded-lg border-2 border-black p-8 bg-gradient-to-t from-gray-900/90 via-indigo-950 to-indigo-900/80"
                                            key={`service-${index}`}>

                                            <div className="mb-6 -mt-5 -ml-5 text-gray-200">{service.icon}</div>
                                            <h3 className="text-xl font-headline font-semibold mb-3 xxs:mt-4 md:-mt-14 text-white ">{service.title}</h3>
                                            <p className="text-sm mt-8 text-gray-200 text-justify">{service.description}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
    )
}