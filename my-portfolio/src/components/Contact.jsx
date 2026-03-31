import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('sending')

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
        })
        .catch(() => {
            setStatus('error')
        })
    }

    return (
        <section id="contact" className="border-t border-neutral-200 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left column */}
                    <div>
                        <h2 className="text-sm tracking-widest mb-8 text-neutral-600">GET IN TOUCH</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight font-medium">
                            Let's build something great together
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs tracking-widest mb-2 text-neutral-600">EMAIL</p>
                                <a href="mailto:d.memie@gmail.com"
                                    className="text-lg hover:text-neutral-600 transition-colors">
                                    d.memie@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-xs tracking-widest mb-3 text-neutral-600">CONNECT</p>
                                <div className="flex space-x-6">
                                    <a href="mailto:d.memie@gmail.com" target="_blank" rel="noopener noreferrer"
                                        className="text-xl hover:text-neutral-600 transition-colors">
                                        <i className="fa fa-envelope"></i>
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
                    </div>

                    {/* Right column - form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs tracking-widest mb-3">NAME</label>
                            <input name="name" value={formData.name} onChange={handleChange}
                                placeholder="Your name" required
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-xs tracking-widest mb-3">EMAIL</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange}
                                placeholder="your@email.com" required
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div>
                            <label className="block text-xs tracking-widest mb-3">MESSAGE</label>
                            <textarea name="message" value={formData.message} onChange={handleChange}
                                placeholder="Tell me about your project..." required
                                rows="4"
                                className="w-full border-b border-neutral-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none" />
                        </div>

                        {status === 'success' && (
                            <p className="text-sm tracking-widest text-green-600">MESSAGE SENT SUCCESSFULLY ✓</p>
                        )}
                        {status === 'error' && (
                            <p className="text-sm tracking-widest text-red-600">SOMETHING WENT WRONG — PLEASE TRY AGAIN</p>
                        )}

                        <button type="submit" disabled={status === 'sending'}
                            className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-neutral-800 transition-colors disabled:bg-neutral-400">
                            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact