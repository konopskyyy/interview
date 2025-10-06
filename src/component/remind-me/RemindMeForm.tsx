import { useState } from "react";

export default function RemindMeForm() {
    const [name, setName] = useState('');

    async function sendForm(e) {
        e.preventDefault();
        const response = await fetch('https://questions.tojest.dev/api/user/remind-me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: name,
            })
        });
        const data = await response.json();
        alert(JSON.stringify(data));
    }

    return (
        <form onSubmit={sendForm}>
            <label htmlFor="name">name </label>
            <input onChange={e => setName(e.target.value)} value={name} id="name"/>
            <br/>
            <button type="submit">Przypomij hasło</button>
        </form>
    );
}
