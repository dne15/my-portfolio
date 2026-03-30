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

        <section id="contact" className="py-20 lg:py-32">
            <div className="text-left px-6 bg-gray">
            <h2 className="text-sm tracking-widest mb-5 text-neutral-600">GET IN TOUCH</h2>

            <form onSubmit={handleSubmit}>
                
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                <input name="name" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                <input name="name" value={formData.message} onChange={handleChange} placeholder="Your Message" />
                <br />
                <button type="submit" className="flex items-center justify-center">SEND MESSAGE</button>
            </form>
            </div>
        </section>
    )
}

export default Contact