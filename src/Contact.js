import './Contact.css';
import { useState } from "react";

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("Work");
    const [msg, setMsg] = useState("");

    const clearForm = () => {
        setName("");
        setEmail("");
        setType("Work");
        setMsg("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
        clearForm();
    }

    const isFormValid = () => {
        return name.length > 2 && email && type && msg;
    }

    return (
        <div className='contactComponent' ref={props.refContact}>
            <h3>Contact Me</h3>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>
                <label>
                    Type of enquiry
                    <select 
                        name="type-of-enquiry" 
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                    >
                        <option value="Work">Work</option>
                        <option value="Fan">Fan</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    <textarea 
                        name="message" 
                        rows={10} 
                        cols={40} 
                        placeholder="Your message" 
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                    />
                </label>
                <input type="submit" disabled={!isFormValid()}/>
            </form>
        </div>
    )
}

export default Contact;