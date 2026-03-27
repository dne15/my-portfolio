//mapping over data 

const projects = [
    {
        id: 1,
        title: "Outfit Selector",
        description: "An outfit selector built with React",
        tags: ["REACT", "TAILWIND"],
        bg: "bg-neutral-800",
        label: "OUTFIT SELECTOR",
        imageRight: false,
    }
]

function Projects() {
    return (
        <section id="projects" className="py-20 lg:py-32">
            <div className="max-w 7xl mx-auto px-6 lg:px-12">
                <h2 className="text-sm tracking-widest mb-16 text-neutral-600">SELECTED WORKS</h2>
                {projects.map((project) => (
                    <div key={project.id} className="mb-32 border-b border-neutral-200 pb-32 last:border-0 last:mb-0">
                        <div className="grid md:grid-cols-2 gap-12 lg-gap-20 items-center">
                            <div className={`aspect-[4/3 ${project.bg} flex items-center justify-center ${project.imageRight ? 'order-1 md:order-2' : ''}`}>
                            <span className="text-white text-sm tracking-wider">{project.label}</span>
                            </div>
                            <div className={project.imageRight ? 'order-2 md:order-1' : ''}>
                                <h3 className="text-5xl mb-6 font-medium">{project.title}</h3>
                                <p className="text-neutral-600 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs tracking-wider border border-neutral-300 px-4 py-2">{tag}</span>
                                    ))}
                                </div>
                                <a href='#' className="inline-flex items-center text-sm tracking-wider hover:text-neutral-600">
                                    VIEW PROJECT <i className="fa-solid fa-arrow-right ml-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects