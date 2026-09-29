import { navLinks } from "./data";

function Navbar(){
    return(
        <nav className="flex justify-between items-center px-24 py-12">
            <div className="flex gap-4">
                {navLinks.map((item) => {
                    return <a key={item.id} href={item.link} className="text-text-secondary font-body">{item.navname}</a>
                }) }
            </div>
            <div className="font-heading font-semibold text-text-primary">Kris Wangsa Putra</div>
            <div className="flex gap-12">
                <a href="#" className="text-text-secondary font-body">Kontak</a>
                <button className="bg-accent text-text-primary rounded-md px-4 py-1">Unduh CV</button>
            </div>
        </nav>
    )
}

export default Navbar;