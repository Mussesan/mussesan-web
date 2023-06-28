import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ImSpinner10, } from "react-icons/im"
import { CiCircleAlert } from "react-icons/ci"
import {
    HiCheckCircle,
    HiOutlineEnvelope,
    HiOutlineMapPin,
} from "react-icons/hi2"

export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!form.current) return

        setLoading(true)

        emailjs
            .sendForm(
                "service_err4yar",
                "template_et3toxw",
                form.current,
                "K5ZOl2rPQ8bYp89Nv"
            )
            .then(
                () => {
                    setSuccess(true)
                    setLoading(false)
                },
                (error) => {
                    setError(true)
                    setLoading(false)
                    console.error(error)
                }
            )
    }

    const contacts = [
        {
            name: "WhatsApp",
            description: "+55 34 9.9678-1980",
            link: "https://wa.me/5534996781980?text=Olá...",
            icon: <FaWhatsapp className="h-10 w-10" />,
        },
        {
            name: "Email",
            description: "gmusse.dev@gmail.com",
            link: "mailto:joao-test@testemail.com?subject=Olá...",
            icon: <HiOutlineEnvelope className="h-10 w-10" />,
        },
        {
            name: "Uberlândia - MG",
            description: "Centro, 1140",
            link: "https://goo.gl/maps/hmhw5TyNgrytoMe96",
            icon: <HiOutlineMapPin className="h-10 w-10" />,
        },
    ]

    return (
        <section id="contact" className="bg-gradient-to-tr from-black via-slate-900 to-neutral-900 text-gray-200">
            <div className="container mx-auto max-w-4xl p-4 py-8">
                <div className="mb-6">
                    <h2 className="z-50 mb-2">
                        <span className="mr-2 font-headline text-3xl font-semibold">
                            Fale
                        </span>
                        <span className="font-handwriting text-4xl">Comigo</span>
                    </h2>
                    <p className="text-sm">
                        Entre em contato comigo, enviando uma mensagem por aqui. Ou através do WhatsApp.
                    </p>

                </div>

                <div className="flex flex-col gap-10 md:flex-row">
                    <div className="basis-2/3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block ps-4 font-headline font-semibold"
                                >
                                    Mensagem:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="h-40 w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none active:scale-[102%] transition-transform"
                                    required
                                />
                            </div>
                            <div className="mb-6 flex flex-col gap-4 md:flex-row">
                                <div className="flex-grow">
                                    <label
                                        htmlFor="fullName"
                                        className="mb-2 block ps-4 font-headline font-semibold"
                                    >
                                        Seu nome:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none active:scale-[102%] transition-transform"
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        required
                                    />
                                </div>
                                <div className="flex-grow">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block ps-4 font-headline font-semibold "
                                    >
                                        Seu email:
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 bg-transparent p-2 outline-none active:scale-[102%] transition-transform"
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="mb-10 mt-5 w-1/2 rounded-lg border border-gray-400 p-2 outline-none
                                    hover:bg-gradient-to-t hover:from-black hover:via-blue-950/10 hover:to-blue-800/60
                                    active:transform-90
                                    "
                                    disabled={loading}
                                >

                                    Enviar mensagem
                                </button>

                                {loading && <ImSpinner10 className="h-10 w-10 animate-spin absolute -mt-20 ml-72" />}
                                {success && (
                                    <span className="text-green-500 absolute p-8 text-bold md:-mb-0">
                                        <p>Obrigado pelo contato, retornarei o mais breve possível!</p>
                                        <HiCheckCircle className="h-8 w-8  " />
                                        {/* <HiCheckCircle className="h-8 w-8 ml-[26rem] -mt-7 absolute" /> */}
                                    </span>
                                )}

                                {error && (
                                    <span className="text-red-500/90 absolute p-8 xs:h-40">
                                        <p>Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.</p>
                                        {/* <CiCircleAlert className="h-8 w-8 ml-[32rem] xxs:-mt-7 md:absolute xxs:relative"/> */}
                                        <CiCircleAlert className="h-8 w-8" />
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="basis-1/3 xxs:mt-16 xs:mt-2">
                        {contacts.map((contact, index) => (
                            <div
                                key={`contact-${index}`}
                                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                            >
                                {contact.icon}
                                <div>
                                    <p className="font-headline font-semibold">{contact.name}</p>
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        className="text-gray-300 underline underline-offset-2"
                                    >
                                        {contact.description}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}