import React, { useState } from 'react';

export default function SendMail() {

    const [formState, setFormState] = useState({
        name: "",
        email: "private@konradullrich.com",
        subject: "",
        message: "",
    })

    const submitForm = async () => {


        try {
            const response = await fetch("/.netlify/functions/sendMail", {
                method: "POST",
                body: JSON.stringify(formState),
            })

            if (!response.ok) {
                //not 200 response
                return
            }

            //all OK
            console.log(response)

        } catch (e) {
            //error
            console.log(e)
        }
    }

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        submitForm()
    }

    return (

        <div>
            <input name='name' onChange={(e) => { onChange(e) }} />
            {/* <input name='email' onChange={(e) => { onChange(e) }} /> */}
            <input name='subject' onChange={(e) => { onChange(e) }} />
            <input name='message' onChange={(e) => { onChange(e) }} />
            <button onClick={handleSubmit}>TEST</button>
        </div>

    )

}