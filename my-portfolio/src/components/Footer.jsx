function Footer() {
    return (
        <footer className="border-t border-neutral-200 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs tracking-wider text-neutral-600">© 2026 DIONNE MEMIE. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6">
                        <a href="mailto:d.memie@gmail.com" target="_blank" rel="noopener noreferrer"
                            className="text-sm hover:text-neutral-600 transition-colors">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a href="https://github.com/dne15" target="_blank" rel="noopener noreferrer"
                            className="text-sm hover:text-neutral-600 transition-colors">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/dionne-m" target="_blank" rel="noopener noreferrer"
                            className="text-sm hover:text-neutral-600 transition-colors">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer