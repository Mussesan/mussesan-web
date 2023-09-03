
import {MdOutlineOpenInNew} from 'react-icons/md'
import {HiOutlineInformationCircle} from 'react-icons/hi'


export function Projects2(){

    function flipCard(){
        console.log(`clicado`)
    }

    const projectsItens = [
        {
            title: 'Github API',
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/techHub-blog/main/banner.png',
            techs: ['React JS', 'CSS Modules', 'API'],
            projectUrl: 'https://github.com/ShaifArfan/techHub-blog',
        },
        {
            title: "Gerador de Senhas",
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/main/readmeImg/banner.png',
            techs: ['JavaScript', 'HTML', 'CSS'],
            projectUrl: 'https://github.com/ShaifArfan/shaif-s-cuisine',
        },
        {
            title: "Gerenciador de Chamados",
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/AYANs-portfolio/main/ReadMeImages/ReadMeBanner.png',
            techs: ['React JS', 'CSS'],
            projectUrl: 'https://github.com/ShaifArfan/AYANs-portfolio',
        },
        {
            title: 'Tabnews Clone',
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/artistic/main/readmeImg/banner.png',
            techs: ['React JS', 'CSS'],
            projectUrl: 'https://github.com/ShaifArfan/artistic',
        }
    ]

    

    return(<section className="shapedividers_com-5269 -mt-1">
                <div className={`
                    bg-[url(https://images.unsplash.com/photo-1632779274972-fcd2bda1919f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80)]
                    h-auto bg-fixed w-full bg-no-repeat
                    `}>
                        <div className='bg-gradient-to-t from-black via-white/10 h-auto'>
                            <div className="flex flex-col justify-center text-cemter items-center">
                                <span className="font-headline md:text-8xl text-6xl font-semibold text-gray-100 pt-28 mx-auto mb-16 md:mb-32">
                                    Projetos
                                    </span>

                                {/* Cards */}
                                <div className="">
                                    <div className={`container flex flex-wrap justify-around items-center text-center gap-8
                                        mb-16 md:mb-48
                                    `}> 
                                        {projectsItens.map((item)=>{
                                            return(
                                                <div    key={item.title}
                                                className={`bg-indigo-300/30 h-80 w-60 rounded-2xl
                                                    md:h-[22rem] md:w-72  shadow-2xl shadow-black
                                                `}>
                                                    <div className={`bg-auto bg-no-repeat rounded-t-2xl`}>
                                                        <img className="rounded-t-2xl"
                                                        src={item.imgUrl} alt="" />
                                                    </div>
                                                    <div className="font-headline flex flex-col text-start">

                                                        <span className={`text-blue-100 font-semibold h-max bg-red-300/0
                                                        drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,1)]
                                                        shadow-black mt-6 px-2 select-none
                                                        `}>
                                                            {item.title}
                                                        </span>

                                                        <span className={`mt-4 flex gap-2 text-xs px-2`}>     
                                                            {item.techs.map((tech)=>
                                                                            <span className={`text-gray-300 border-[1px] rounded-xl p-[8px] bg-gray-900 border-gray-50/30
                                                                            select-none
                                                                            `}>
                                                                                {tech}
                                                                            </span>)}
                                                                            
                                                        </span>

                                                        <span className='w-60 h-[1px] bg-gray-100/40 mt-4
                                                            md:w-72
                                                        '></span>

                                                        <span className="mt-4 flex justify-around gap-2 text-sm">
                                                            <button onClick={flipCard}
                                                            className={`text-gray-300 border-[1px] rounded w-28 h-10 bg-gray-900 border-gray-50/30 flex items-center justify-around
                                                            
                                                            `}>
                                                                Detalhes 
                                                                <span className='text-yellow-400 text-lg'>
                                                                    <HiOutlineInformationCircle />
                                                                </span>
                                                            </button> 
                                                            <button className="text-gray-300 border-[1px] rounded w-20 h-10 bg-gray-900 border-gray-50/30 flex items-center justify-around">
                                                                Abrir 
                                                                <span className='text-green-400 text-md'>
                                                                    <MdOutlineOpenInNew />
                                                                </span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>    
        </section>)
}