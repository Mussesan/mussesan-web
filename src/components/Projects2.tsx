export function Projects2(){
    const projectsItens = [
        {
            title: 'Github API',
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/techHub-blog/main/banner.png',
            tech: ['React JS', 'CSS Modules', 'API'],
            workUrl: 'https://github.com/ShaifArfan/techHub-blog',
        },
        {
            title: "some text",
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/shaif-s-cuisine/main/readmeImg/banner.png',
            tech: ['HTML', 'CSS', 'Netlify'],
            workUrl: 'https://github.com/ShaifArfan/shaif-s-cuisine',
        },
        {
            title: "some text",
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/AYANs-portfolio/main/ReadMeImages/ReadMeBanner.png',
            tech: ['React JS', 'CSS'],
            workUrl: 'https://github.com/ShaifArfan/AYANs-portfolio',
        },
        {
            title: 'some text',
            imgUrl:
                'https://raw.githubusercontent.com/ShaifArfan/artistic/main/readmeImg/banner.png',
            tech: ['React JS', 'CSS'],
            workUrl: 'https://github.com/ShaifArfan/artistic',
        }
    ]

    return(<section className="shapedividers_com-5269 -mt-1 ">           
                <section className={`
                    bg-[url(https://images.unsplash.com/photo-1632779274972-fcd2bda1919f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80)]
                    h-auto bg-fixed w-full bg-no-repeat pb-32
                    `}>
                        <div className="flex flex-col justify-center text-cemter items-center">
                            <span className="font-headline md:text-8xl text-4xl font-semibold text-gray-100 pt-28 mx-auto mb-16 md:mb-32">
                                Projetos
                                </span>

                            {/* Cards */}
                            <div className="">
                                <div className={`container flex flex-wrap justify-around items-center text-center gap-8
                                
                                `}> 
                                    {projectsItens.map((index)=>{
                                        return(
                                            <div className={`bg-[#262626] h-64 w-60 md:h-72 md:w-72 rounded-2xl blur-none
                                            `}>
                                                <div className={`bg-auto bg-no-repeat rounded-t-2xl`}>
                                                    <img className="rounded-t-2xl"
                                                    src={index.imgUrl} alt="" />
                                                </div>
                                                <div className="font-headline flex flex-col mt-8">
                                                    <span className="text-white font-semibold">{index.title}</span>
                                                    <span className="text-gray-300 bg-black w-[8rem]">{index.tech}</span>
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