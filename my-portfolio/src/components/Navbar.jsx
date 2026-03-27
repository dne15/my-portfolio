function Navbar() {
    return (
        <header className="border-b border-neutral 200">
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                <a href="#" className="text-2xl tracking-widest font-serif">PORTFOLIO</a>
                <div className="hidden md:flex items-center space-x-12 text-sm tracking-wider">
                    <a href="#projects" className="hover:text-neutral-600 transition-colors">PROJECTS</a>
                    <a href="#about" className="hover:text-neutral-600 transition-colors">ABOUT</a>
                    <a href="#contact" className="hover:text-neutral-600 transition-colors">CONTACT</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar