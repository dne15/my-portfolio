function About() {
        
    const skillClass = "inline-block outline outline-1 outline-offset-2 outline-neutral-400 px-4 py-2"

    return (
        
        <section id="about" className="py-20 lg:py-32">
            <div className="text-left px-6 bg-gray">
                <h2 className="text-sm tracking-widest mb-5 text-neutral-600">ABOUT</h2>
                <h3 className="text-5xl mb-6 font-medium">Passion meets precision</h3>

                <p className="text-sm tracking-widest text-neutral-600">
                    As a junior front-end developer with an eye for design, I bridge the gap between aesthetics and functionality. My approach combines technical expertise with a deep appreciation for visual storytelling.<br/><br />

                    Every project is an opportunity to push boundaries, experiment with new technologies, and create experiences that resonate. I believe in code that's as elegant as the designs it brings to life.<br/>< br/>

                    Currently seeking opportunities to collaborate with forward-thinking teams and contribute to projects that challenge convention.
                </p>
                {/*  image goes here  */}
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
                <h2 className="text-sm tracking-widest mb-5 text-neutral-600">EDUCATION</h2>
                <p>
                    School of Code Bootcamp
                </p>
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