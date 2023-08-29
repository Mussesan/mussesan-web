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
    <div className="bg-yellow-600/90 -mt-1 h-screen">
        <section className=" container text-center xxs:m-auto xxs:mb-9">

                <div className="my-7 flex flex-col gap-20 md:flex-row md:mx-20 xxs:mx-10">
                    {services.map((service, index) => (
                        <div className="mb-7 basis-1/3 rounded-lg p-8 bg-gradient-to-t from-slate-900 via-neutral-950 to-slate-700"
                            key={`service-${index}`}>

                            <div className="mb-6 -mt-5 -ml-5 text-gray-200">{service.icon}</div>
                            <h3 className="text-xl font-headline font-semibold mb-3 xxs:mt-4 md:-mt-14 text-white ">{service.title}</h3>
                            <p className="text-sm mt-8 text-gray-200 text-justify">{service.description}</p>
                        </div>
                    ))}
                </div>

        </section>
    </div>
    )
}