import {useState} from "react";

export default function RegisterForm() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [retypedpassword, setretypedpassword] = useState<string>('')

    function sendForm() {
        alert(name)
    }

    return (
        <form onSubmit={() => sendForm()}>
            <label for="name">name </label>
            <input onChange={(e) => setName(e.target.value)} value={name} id="name"/>
            <br/>
            <label htmlFor="password">password </label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} id="password"/>
            <br/>
            <label htmlFor="retype-password">retyped password </label>
            <input onChange={(e) => setretypedpassword(e.target.value)} value={retypedpassword} id="retype-password"/>
            <br/>
            <button type="submit">Rejestruj</button>
        </form>
    )
}