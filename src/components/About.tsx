import { AiFillGithub } from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {TiSocialInstagramCircular} from 'react-icons/ti'

export default function About() {

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <AiFillGithub />,
            link: 'https://github.com/Mussesan'
        },
        {
            name: 'LinkedIn',
            icon: <TiSocialLinkedinCircular />,
            link: 'https://www.linkedin.com/in/gmusse-dev/'
        },
        {
            name: 'Instagram',
            icon: <TiSocialInstagramCircular />,
            link: 'https://www.instagram.com/_vesselm/'
        }
    ]

    return (

        <section className="shapedividers_com-1960 -mt-1 mb-8">
            <div className="container mx-auto -mt-1 pt-12 max-w-3xl p-4 ">

                <div className="relative p-4 text-center mt-6">
                    <h2 className="relative z-50 mb-10 font-bold text-blue-900">
                        <span className="mr-2 font-play text-6xl">Sobre mim</span>
                        
                    </h2>
                    <span className="relative text-lg text-gray-500 mt-2 text-start font-bold ">
                        <p className="mb-4">
                            Tenho 31 anos, formado em Sistemas de Informação, pela <u>
                                <a className='text-blue-500' href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MTQz" target='_blank'>
                                    Universidade de Uberaba
                                </a>
                            </u>, sou um desenvolvedor frontend focado no domínio de React com TailwindCSS.
                            Também possuo experiência com Angular (versão 12), CSS modules e Bootstrap 5.
                        </p>

                        <p>
                            Minha trajetória profissional é marcada pela colaboração em equipe,
                            buscando sempre alcançar os objetivos de forma conjunta e eficaz.
                        </p>
                    </span>
                </div>

                <div className="mx-auto mt-16 max-w-lg mb-10">
                    <div className="relative w-full rounded-lg bg-slate-300 p-4 ps-20 md:h-64 md:ps-48">
                        <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                            <table className="w-full text-sm flex justify-center ">
                                <tbody>
                                    <tr>
                                        <td className="font-headline font-bold uppercase text-blue-900">
                                            Idade:
                                        </td>
                                        <td>31</td>
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
                                    <tr>
                                        <td className="font-headline font-bold uppercase text-blue-900 mt-4">
                                            Social:
                                        </td>
                                        <td className='row-span-2'>
                                            <span className='flex text-3xl gap-4  text-blue-900 mt-4 '>
                                                {socialLinks.map((item) => {

                                                    return (<a
                                                        className='shadow-lg shadow-black rounded-full' 
                                                            href={item.link}
                                                            target='_blank'
                                                            >
                                                                {item.icon}
                                                        </a>)
                                                })}
                                            </span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-slate-300 md:bg-[url('assets/images/man_developer.png')] 
                        bg-contain bg-no-repeat bg-center md:-left-12 md:-top-3 md:h-72 md:w-56 bg-[url('assets/images/face_man.jpg')]  "></div>
                    </div>
                </div>
            </div>
        </section>
    )
}