import { useState } from "react";

export default function RemindMeForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    async function sendForm(e) {
        e.preventDefault();
        alert(name)
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
