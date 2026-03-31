function About() {
        
    const skillClass = "inline-block outline outline-1 outline-offset-2 outline-neutral-400 px-4 py-2"

    return (
        
        <section id="about" className="py-20 lg:py-32">
            <div className="text-left px-6 bg-gray">
                <h2 className="text-sm tracking-widest mb-5 text-neutral-600">ABOUT</h2>
                <h3 className="text-5xl mb-6 font-medium">
                    Where compliance meets code
                    {/* Passion meets precision */}
                    </h3>

                <p className="text-sm tracking-widest text-neutral-600 leading-relaxed">
                    After a decade in the mortgage, protection and compliance industry, I made the 
                    decision to move into tech. Bringing with me a sharp eye for detail, a structured way 
                    of thinking and a genuine passion for creative, user-focused products that work.
                </p>
                <br/>
                <p className="text-sm tracking-widest text-neutral-600 leading-relaxed">
                    I started with a JavaScript course through Code First Girls, where I was awarded a 
                    Winner's Certificate, before committing to the School of Code, a competitve
                    13-week bootcamp where each week immersed us in a different engineering 
                    discipline: front-end, back-end, DevOps, AI, QA, product, and more.
                </p>
                <br/>
                <p className="text-sm tracking-widest text-neutral-600 leading-relaxed">
                    In November 2025 I made my break into tech with my first role as a QA Engineer in the transport
                    industry. Here I carried out both manual testing and automation using JavaScript and Cypress. 
                    I'm now looking to take the next step into a software development or business analyst role. 
                    Somewhere I can bring together my technical skills and my professional background.
                </p>


                    {/* As a junior front-end developer with an eye for design, I bridge the gap between aesthetics and functionality. My approach combines technical expertise with a deep appreciation for visual storytelling.
                    Every project is an opportunity to push boundaries, experiment with new technologies, and create experiences that resonate. I believe in code that's as elegant as the designs it brings to life.
                    Currently seeking opportunities to collaborate with forward-thinking teams and contribute to projects that challenge convention. */}
                
                <br />
                <img src="/cover-photo.png" alt='cover photo' />
                <br/>
                <h2 className="text-sm tracking-widest mb-8 text-neutral-600">EXPERTISE</h2>
                <ul className="grid grid-cols-2 gap-4">

                    <li className={skillClass}>React / Next.js</li>
                    <li className={skillClass}> JavaScript</li>
                    <li className={skillClass}>Tailwind CSS</li>
                    <li className={skillClass}>Github/Gitlab</li>
                    <li className={skillClass}>Cypress</li>
                    <li className={skillClass}>Manual & Automation QA</li>

                </ul>
                <br />
                <h2 className="text-sm tracking-widest mb-5 text-neutral-600">EXPERIENCE & EDUCATION</h2>

                <p className="font-medium">QA Engineer</p>
                <p className="text-neutral-600 text-sm">November 2025 — Present</p>
                <p className="text-sm text-neutral-600 mt-1">Manual and automated testing of Web and Mobile apps using Zephyr Scale, JavaScript and Cypress</p>
                <br />
                <p className="font-medium">School of Code — Full Stack Bootcamp</p>
                <p className="text-neutral-600 text-sm">2024 · 13-week intensive course</p>
                <p className="text-sm text-neutral-600 mt-1">Front-end, back-end, DevOps, AI, QA, product management</p>

                <br/>

                <p className="font-medium">Code First Girls — JavaScript Course</p>
                <p className="text-neutral-600 text-sm">Winner Certificate</p>

                <br/>

                <p className="font-medium">Mortgage and Protection Compliance</p>
                <p className="text-neutral-600 text-sm">10 years industry experience</p>

                <p className="text-neutral-600">2024</p>
                <br />
                < a 
                    href="/cv.pdf"
                    download="DionneMemie_CV.pdf"
                    className="inline-block border border-black px-6 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-colors">
                    DOWNLOAD CV
                </a>
               
            </div>
        </section>
    )
}

export default About