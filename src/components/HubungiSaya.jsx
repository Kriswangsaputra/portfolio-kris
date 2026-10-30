import { MdEmail, MdWhatsapp } from "react-icons/md"
import { useState } from "react";

function HubungiSaya() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Diam");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Mengirim");

        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
                method: "POST",
                headers:{"Content-Type": "application/json", "Accept":"application/json"},
                body: JSON.stringify({name, email, subject, message}),
            });

            if (response.ok) {
                setStatus("Berhasil");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                setStatus("Gagal");
            }
        } catch (error) {
            setStatus("Gagal");
        }
    }

    return(
        <section className="grid grid-cols-2 px-24 py-12 gap-8 items-center">
            <div className="flex flex-col gap-6 py-10">
                <p className="font-body font-semibold">Saya Standby Setiap Hari,</p>
                <h3 className="font-heading font-bold text-accent text-2xl">Hubungi Saya Kapan Saja.</h3>
                <p className="font-body font-light">Jangan sungkan untuk menghubungi saya kapanpun jika diperlukan</p>
                <div className="flex gap-4 items-center">
                    <MdEmail className="text-6xl text-accent"/>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-accent font-heading text-2xl">Email</p>
                        <p className="font-body font-light">kriswangsaputra04@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <MdWhatsapp className="text-6xl text-accent"/>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-accent font-heading text-2xl">WhatsApp</p>
                        <p className="font-body font-light">0812 9362 8517</p>
                    </div>
                </div>
            </div>
            <div className="bg-card border border-accent rounded-2xl p-6">
                <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name">Nama</label>
                        <input type="text" name="" id="name" className="border border-accent rounded-lg px-4 py-2 outline-none focus:border-accent focus:ring-accent/30 focus:ring-2" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" className="border border-accent rounded-lg px-4 py-2 outline-none focus:border-accent focus:ring-accent/30 focus:ring-2" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="" id="subject" className="border border-accent rounded-lg px-4 py-2 outline-none focus:border-accent focus:ring-accent/30 focus:ring-2" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message">Pesan</label>
                        <textarea name="" id="message" className="border border-accent rounded-lg px-4 py-2 outline-none focus:border-accent focus:ring-accent/30 focus:ring-2" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-accent py-2 rounded-md w-full cursor-pointer" disabled={status === "Mengirim"}>
                            {status === "Mengirim"?"Mengirim...":"Kirim"}
                        </button>
                    </div>
                    <div className="text-center">
                        {status === "Berhasil" && <p className="text-green-500">Pesan berhasil dikirim!</p>}
                        {status === "Gagal" && <p className="text-red-500">Terjadi kesalahan. Silakan coba lagi.</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default HubungiSaya;