import { useState } from "react";

function FormKontak () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [pesan, setPesan] = useState("");

    return (
        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                console.log(name, email, subject, pesan)
            }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea name="" id="" value={pesan} onChange={(e) => setPesan(e.target.value)}></textarea>
                <button type="submit">Kirim</button>
            </form>
        </div>
    )
}

export default FormKontak;