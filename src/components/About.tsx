export function About(){

    return (
       <section className="container mx-10 my-4 max-w-5xl p-4">
        
        <div className="relative p-4 text-center"> 
            <h2 className="relative text-blue-900 font-bold z-10">
                <span className="mr-2 font-handwriting text-3xl">Meu</span>
                <span className="font-handwriting text-4xl">perfil</span>
            </h2>
            <p className="relative text-sm text-gray-600 mt-2">
                Tenho mais de 4 aplicações Web, feitas em React e/ou JavaScript Vanilla e gostaria que a próxima fosse a sua.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-500/40">
                
            </div>

        </div>

        <div className="mx-auto mt-20 max-w-lg">
            <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
                <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                    <p className=" font-handwriting text-lg font-bold">Olá,</p>
                    <p>
                        <span className="mr-1">Meu nome é</span>
                        <span className="font-headline bold-bold uppercase text-blue-900">Gustavo Musse</span>
                    </p>
                </div>
                <div className="absolute left-2 top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)] 
                bg-center bg-cover md:-left-12 md:-top-12 md:h-72 md:-56 ">
                </div>            
            </div>
        </div>
       </section> 
    )
}

export default About