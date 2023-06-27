import { HiCommandLine, HiComputerDesktop, HiUsers } from "react-icons/hi2"

export function Services() {
    const services = [
        {
            title: "Web",
            description:
                "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
            icon: <HiComputerDesktop className="h-12 w-12" />,
        },
        {
            title: "Sistemas",
            description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
            icon: <HiCommandLine className="h-12 w-12" />,
        },
        {
            title: "Trabalho em Equipe",
            description: "Saber trabalhar de forma respeitosa, empática e responsável é algo que me acompanha na minha carreira.",
            icon: <HiUsers className="h-12 w-12" />
        }
    ]

    

    return (        
        <section className=" container text-center xxs:m-auto xxs:mb-9">
             <div className="p-4 text-center">
                <p className="text-md font-semibold uppercase text-blue-600">
                    O que faço de melhor
                </p>
                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline text-3xl">Meus</span>
                    <span className="font-handwriting text-4xl">Serviços</span>
                </h2>
                <p className=" text-md text-gray-800">
                    Atendo uma gama completa de serviços, do front-end ao back com excelência no trabalho em equipe.
                </p>
            </div> 




            <div className="my-7 flex flex-col gap-10 md:flex-row ">
                {services.map((service, index) => (
                    <div className="mb-7 basis-1/3 rounded-lg p-4 bg-gradient-to-tr from-slate-800 to-slate-700"
                        key={`service-${index}`}>

                        <div className="mb-2 text-yellow-100">{service.icon}</div>
                        <h3 className="text-xl font-headline font-semibold mb-3 -mt-2 text-white ">{service.title}</h3>
                        <p className="text-sm text-yellow-100">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}