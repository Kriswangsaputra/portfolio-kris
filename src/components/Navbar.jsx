import { navLinks } from "../data";
import {Link} from "react-router";

function Navbar(){
    return(
        <nav className="flex justify-between items-center px-24 py-12">
            <div className="flex gap-4">
                {navLinks.map((item) => {
                    return <Link key={item.id} to={item.link} className="text-text-secondary font-body">{item.navname}</Link>
                }) }
            </div>
            <div className="font-heading font-semibold text-text-primary">Kris Wangsa Putra</div>
            <div className="flex gap-12">
                <Link to="/#hubungi-saya" className="text-text-secondary font-body">Kontak</Link>
                <a href="/Kris_Wangsa_Putra_CV.pdf" download="Kris_Wangsa_Putra_CV.pdf" className="bg-accent text-text-primary rounded-md px-4 py-1">Unduh CV</a>
            </div>
        </nav>
    )
}

export default Navbar;