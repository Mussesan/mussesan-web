import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ImSpinner10, } from "react-icons/im"
import { CiCircleAlert } from "react-icons/ci"
import { MdContentCopy, MdOutlineOpenInNew } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import {
    HiCheckCircle,
    HiOutlineEnvelope
} from "react-icons/hi2"





export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    let copied = false

    console.log(copied)

    function copy() { //função copiar para área de transferência
        navigator.clipboard.writeText('gmusse.dev@gmail.com')
        if (!copied) {
            copied = true
        }
    }

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
            contactIcon: <MdOutlineOpenInNew className="h-6 w-6" />
        },
        {
            name: "Email",
            description: "gmusse.dev@gmail.com",
            link: 'mailto:gmusse.dev@gmail.com?subject=Olá...',
            icon: <HiOutlineEnvelope className="h-10 w-10" />,
            contactIcon: <MdContentCopy className="h-6 w-6" />
        }
    ]

    return (
        <section id="contact" className="-mt-1 bg-gradient-to-tr from-black via-slate-900 to-neutral-900 text-gray-200 shapedividers_com-5568">
            <div className="container mx-auto max-w-4xl p-4 py-8 mt-32">
                <div className="mb-6">
                    <h2 className="z-50 mb-2">
                        <span className="mr-2 font-play text-6xl font-semibold">
                            Fale Comigo
                        </span>
                    </h2>
                    <p className="text-sm">
                        Entre em contato comigo, enviando uma mensagem por aqui.
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
                                    className="h-auto w-full shadow-inner  shadow-black rounded-lg border-b-2 focus:bg-blue-900/10 bg-transparent p-2 outline-none active:scale-[102%] transition-transform"
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
                                        className="w-full shadow-inner  shadow-black rounded-lg border-b-2 focus:bg-blue-900/10 bg-transparent  p-2 outline-none active:scale-[102%] transition-transform"
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
                                        className="w-full shadow-inner  shadow-black rounded-lg border-b-2 focus:bg-blue-900/10 bg-transparent  p-2 outline-none active:scale-[102%] transition-transform"
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
                                    <span className="text-green-500 absolute p-8 text-bold md:-mb-0 -mt-4">
                                        <HiCheckCircle className="h-8 w-8 mx-auto " />
                                        <p>Obrigado pelo contato, retornarei o mais breve possível!</p>
                                        
                                        {/* <HiCheckCircle className="h-8 w-8 ml-[26rem] -mt-7 absolute" /> */}
                                    </span>
                                )}

                                {error && (
                                    <span className="text-red-500/90 absolute p-8 xs:h-40 -mt-4">
                                        <CiCircleAlert className="h-8 w-8 mx-auto"/>
                                        <p>Ocorreu um erro ao enviar a mensagem,<br/> tente novamente mais tarde.</p>
                                        {/* <CiCircleAlert className="h-8 w-8 ml-[32rem] xxs:-mt-7 md:absolute xxs:relative"/> */}
                                        
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="basis-1/3 mb-16">
                        <div className="mb-8"> Ou através dos canais abaixo:</div>
                        {contacts.map((contact, index) => (
                            <div className="bg-gradient-to-tr from-green-600 via-purple-600 to-cyan-700 p-[2px] rounded-lg mb-4">
                                <div
                                    key={`contact-${index}`}
                                    className="h-16 px-4 flex items-center gap-4 rounded-lg bg-gradient-to-tr from-black via-slate-900 to-neutral-900"
                                >
                                    {contact.icon}
                                    <div className="flex justify-between w-full">
                                        <a id={contact.name}
                                            href={contact.link}
                                            target="_blank"
                                            className="text-gray-300 underline underline-offset-2"
                                            onClick={copy}
                                        >
                                            {contact.description}
                                        </a>
                                        <a onClick={copy}>{contact.contactIcon}</a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>                    
                </div>
            </div>
        </section>
    )
}