import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {

  const projects = [
    {
      title: "CRUD em React e PostgreSQL",
      description: "Projeto de pedido online de uma loja virtual",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Geek App",
      description: "Projeto protótipo realizado durante e conclusão de curso. Rede social voltada ao público Geek. Prótipo feito em Angular2",
      image:
        "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
      link: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Gerador de Senhas",
      description: "Projeto realizado em Javascript Vanilla com manipulação da DOM.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Angular To-do",
      description: "Primeiro projeto feito em Angular2 durante aulas do prof. André Baltieri. Projeto simples porém realizado com dedicação.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/Mussesan/my-todo-list",
      colSpan: "col-span-1",
    },
  ]

  return (

    <section className="md:rounded-tl-[12rem] bg-gradient-to-tr from-black via-slate-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl">
              Projetos & Portfólio
            </span>

          </h2>
          <p className="relative text-sm py-3 text-gray-400">
            Alguns dos projetos pessoais e que já realizei.
          </p>
        </div>

        <div className="grid grid-cols- gap-4 md:grid-cols-3">
          {projects.map((projects, index) => (
            <div
              key={index}
              className={`group relative h-52 cursor-default rounded-md ${projects.colSpan} bg-cover bg-center`}
              style={{ backgroundImage: `url('${projects.image}')` }}
            >
              <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-to-tr from-slate-900 to-slate-600 text-white opacity-0 transition-opacity group-hover:opacity-90">
                <h4 className="font-headline text-lg font-semibold">
                  {projects.title}
                </h4>
                <p className=" mb-4 text-sm text-center px-2">{projects.description}</p>
                <a href={projects.link} target="_blank">
                  <HiArrowTopRightOnSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 -mt-[6px] h-3 w-60 rounded-l-full bg-gradient-to-t from-black via-blue-800 to-slate-800 md:w-96" />
    </section>

  )
}