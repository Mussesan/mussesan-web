
export function Projects2(){

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

    

    return(<section className="shapedividers_com-5269 -mt-1 ">           
                <section className={`
                    bg-[url(https://images.unsplash.com/photo-1632779274972-fcd2bda1919f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80)]
                    h-auto bg-fixed w-full bg-no-repeat pb-32
                    `}>
                        <div className="flex flex-col justify-center text-cemter items-center">
                            <span className="font-headline md:text-8xl text-6xl font-semibold text-gray-100 pt-28 mx-auto mb-16 md:mb-32">
                                Projetos
                                </span>

                            {/* Cards */}
                            <div className="">
                                <div className={`container flex flex-wrap justify-around items-center text-center gap-8
                                
                                `}> 
                                    {projectsItens.map((item)=>{
                                        return(
                                            <div    key={item.title}
                                             className={`bg-gray-300/90 h-64 w-60 md:h-72 md:w-72 rounded-2xl blur-none
                                            `}>
                                                <div className={`bg-auto bg-no-repeat rounded-t-2xl`}>
                                                    <img className="rounded-t-2xl"
                                                    src={item.imgUrl} alt="" />
                                                </div>
                                                <div className="font-headline flex flex-col text-start ml-4">

                                                    <span className={`text-blue-950 font-semibold h-max bg-red-300/0
                                                                        mt-6
                                                    `}>
                                                        {item.title}
                                                    </span>

                                                    <span className={`mt-4 flex gap-2 text-sm`}>     
                                                        {item.techs.map((tech)=>
                                                                        <span className={`text-gray-300 border-[1px] rounded p-[4px] bg-gray-900 border-gray-50/30
                                                                        
                                                                        `}>
                                                                            {tech}
                                                                        </span>)}
                                                                        
                                                    </span>
                                                    <span className="">
                                                        <button>Detalhes</button>
                                                        <button>Abrir</button>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                </section>       
        </section>)
}