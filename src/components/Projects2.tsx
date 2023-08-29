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

    return(<>
        {projectsItens.map((item)=>{
            return (<section className="flex flex-row bg-blue-600">

                <div className=" gap-2">
                    <div>
                        <img 
                            className="w-28 h-28"
                            src={item.imgUrl} 
                            alt="" 
                        />
                    </div>

                    <div>
                        <span>{item.title}</span>
                    </div>

                    <div>
                        <span>{item.tech}</span>
                    </div>
                </div>
            </section>)
        })}
    
    </>)
}