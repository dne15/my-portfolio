import { useState } from "react"

function Contact(){
    const [formData, setFormData] = useState ({ name: '', email: '', message: ''})

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Form Submitted', formData)
    }

    return (

        <section id="contact" className="border-t border-neutral-200 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    <h2 className="text-sm tracking-widest mb-8 text-neutral-600">GET IN TOUCH</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight font-medium">
                        Let's create something extraordinary
                    </h3>
                <div className="space-y-6">
                <div>
                    <p className="text-xs tracking-widest mb-2 text-neutral-600">EMAIL</p>
                        <a href="mailto:d.memie@gmail.com" className="text-lg hover:text-neutral-600 transition-colors">
                        d.memie@gmail.com
                        </a>
                </div>
                {/* <div>
                    <p className="text-xs tracking-widest mb-2 text-neutral-600">PHONE</p>
                        <a href="tel:+447969192485" className="text-lg hover:text-neutral-600 transition-colors">
                        07969 192 485
                        </a>
                </div> */}
                <div>
                    <p className="text-xs tracking-widest mb-3 text-neutral-600">CONNECT</p>
                        <div className="flex space-x-6">
                            <a href="mailto:d.memie@gmail.com" target="_blank" rel="noopener noreferrer"
                                className="text-xl hover:text-neutral-600 transition-colors">
                                <i class="fa fa-envelope"></i>
                            </a>
                            <a href="https://github.com/dne15" target="_blank" rel="noopener noreferrer"
                                className="text-xl hover:text-neutral-600 transition-colors">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/dionne-m" target="_blank" rel="noopener noreferrer"
                                className="text-xl hover:text-neutral-600 transition-colors">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                </div>
            </div>
{/* Right column - form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs tracking-widest mb-3">NAME</label>
                            <input name="name" value={formData.name} onChange={handleChange}
                                placeholder="Your name"
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-xs tracking-widest mb-3">EMAIL</label>
                            <input name="email" value={formData.email} onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-xs tracking-widest mb-3">MESSAGE</label>
                            <textarea name="message" value={formData.message} onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="4"
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none" />
                        </div>
                        <button type="submit"
                            className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-neutral-800 transition-colors">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
