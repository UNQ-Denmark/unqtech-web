import { navigate } from 'gatsby'
import React from 'react'
import { useState } from 'react'


const ContactForm: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [msg, setMsg] = useState("")

    function encode(data: any) {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        debugger
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            'name': name,
            'email': email,
            'mobile': mobile,
            'message': msg
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }
    return (
        <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
            <p>
                <label>Your Name: <input type="text" name="name" onChange={(e) => setName(e.target.value)} /></label>   
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/></label>
            </p>
            <p>
                <label>Your Mobile number: <input type="mobile" name="mobile" onChange={(e) => setMobile(e.target.value)}/></label>
            </p>
            <p>
                <label>Message: <textarea name="message" onChange={(e) => setMsg(e.target.value)}></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}


export default ContactForm