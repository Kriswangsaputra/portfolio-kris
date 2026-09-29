import { FaElementor, FaWordpress, FaHtml5, FaCss3, FaReact, FaBootstrap, FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { DiPhotoshop, DiIllustrator, DiJavascript } from "react-icons/di";
import { BiLogoTailwindCss, BiSolidVector } from "react-icons/bi";
import { IoColorPalette } from "react-icons/io5";
import { TbBrandAdobeAfterEffect } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { SiShopee } from "react-icons/si";
import { RiLiveFill } from "react-icons/ri";
import logomhi from "./assets/logo-mhi.png";
import projectmhi from "./assets/mhi-indonesia.png"
import projectdisplaysolution from "./assets/displaysolution-mhi.png"


// data nmenu navigasi
export const navLinks = [
    {
        id: 1,
        navname: "Tentang Saya",
        link: "#"
    },
    {
        id: 2,
        navname: "Pengalaman Kerja",
        link: "#"
    },
    {
        id: 3,
        navname: "Project",
        link: "#"
    },
    {
        id: 4,
        navname: "Sertifikat & Pelatihan",
        link: "#"
    }
];

// Keahlian

export const keahlian = [
    {
        id:1,
        icon: FaWordpress,
        keahlian:"Wordpress"
    },
    {
        id:2,
        icon: FaElementor,
        keahlian:"Elementor"
    },
    {
        id:3,
        icon: DiPhotoshop,
        keahlian:"Photoshop"
    },
    {
        id:4,
        icon: DiIllustrator,
        keahlian:"illustrator"
    },
    {
        id:5,
        icon:IoColorPalette,
        keahlian:"Canva"
    },
    {
        id:6,
        icon:TbBrandAdobeAfterEffect,
        keahlian:"After Effect"
    },
    {
        id:7,
        icon:FaHtml5,
        keahlian:"HTML"
    },
    {
        id:8,
        icon:FaCss3,
        keahlian:"CSS"
    },
    {
        id:9,
        icon:BiLogoTailwindCss,
        keahlian:"Tailwind CSS"
    },
    {
        id:10,
        icon:DiJavascript,
        keahlian:"JavaScript"
    },
    {
        id:11,
        icon:FaBootstrap,
        keahlian:"Bootstrap"
    },
    {
        id:12,
        icon:FaReact,
        keahlian:"React Js"
    }
];

// kontak
export const Kontak = [
    {
        id: 1,
        icon: FaWhatsapp,
        label: "0812-9362-8517"
    },
    {
        id: 2,
        icon: MdEmail,
        label: "kriswangsaputra04@gmail.com"
    },
    {
        id: 3,
        icon: FaLinkedinIn,
        label: "Kris Wangsa Putra"
    },
    {
        id: 4,
        icon: FaInstagram,
        label: "kriswangsaputra"
    },
    {
        id: 5,
        icon: FaTiktok,
        label: "kriswangsaputra"
    },
    {
        id: 6,
        icon: FaFacebook,
        label: "kriswangsaputra"
    }
]

export const mainJob ={
        id: 1,
        title: "E-Commerce Staff",
        year: "2023 - Sekarang",
        description: "Official Distributor Samsung Indonesia",
        Company: "PT Mitra Hub Indonesia",
        image: logomhi
    };


export const supportJob = [
    {
        id: 1,
        title: "Marketplace Support",
        year: "2023 - Sekarang",
        description: "Membuat design display produk, banner dan dekorasi toko di shopee, tokopedia, tiktok dan blibli",
        company: "PT Mitra Hub Indonesia",
        image: SiShopee
    },
    {
        id: 2,
        title: "Live Sale Support",
        year: "2023 - Sekarang",
        description: "Support tim live baik untuk develop live menggunakan OBS Studio, ataupun membuat dekorasi live",
        company: "PT Mitra Hub Indonesia",
        image: RiLiveFill
    },
    {
        id: 3,
        title: "Desain Grafis",
        year: "2025 - Sekarang",
        description: "membantu membuat berbagai macam desain grafis menggunakan tools editing.",
        company: "PT Mitra Hub Indonesia",
        image: BiSolidVector
    }
]

// Project
export const project = [
    {
        id: 11,
        projectTitle: "mhi-indonesia.com",
        projectDescription: "website perusahaan yang digunakan sebagai media pemasaran dan pengenalan perusahaan.Tugas : Maintenance, membuat fitur input promo menggunakan elementor, membuat landing page sesuai kebutuhan",
        projectImage: projectmhi,
        projectLink: "https://www.mhi-indonesia.com"
    },
    {
        id: 12,
        projectTitle: "displaysolution-mhi.com",
        projectDescription: "Website company profile yang dibangun khusus untuk divisi display display solution. untuk mengenalkan produk display solution yang dipasarkan oleh PT Mitra Hub Indonesia.",
        projectImage: projectdisplaysolution,
        projectLink: "https://www.displaysolution-mhi.com"
    }
]

//dummy project
const imageProjectDummy = import.meta.glob("./assets/dummyProject/*.{png,jpg,jpeg}", {eager: true});

export const dummyproject = [
    {
        id: 1,
        projectTitle: "FinTrack",
        projectDescription: "Platform edukasi literasi keuangan interaktif — mencakup materi fintech dari sejarah hingga QRIS TAP, kalkulator keuangan pribadi, dan artikel berita fintech terkini.",
        projectImage: "fintech.png",
        projectLink: "https://kriswangsaputra.github.io/fintech/"
    },
    {
        id: 2,
        projectTitle: "Krisis Betta Farm",
        projectDescription: "Project website yang dibuat untuk tugas akhir sebagai salah satu syarat kelulusan S1-Sistem Informasi di STMIK Jakarta STI&K",
        projectImage: "krisisbettafarm.png",
        projectLink: "https://github.com/Kriswangsaputra/krisisbettafarm.github.io.git"
    },
    {
        id: 3,
        projectTitle: "Club Finder Dicoding",
        projectDescription: "Project dari materi kelas front-end developer dicoding indonesia. project ini sebagai salah satu tes untuk mengenalkan React.Js",
        projectImage: "clubfinder.png",
        projectLink: "https://github.com/Kriswangsaputra/club-finder-dicoding.git"
    },
    {
        id: 4,
        projectTitle: "Booshelf App",
        projectDescription: "Aplikasi pencatat koleksi buku dengan fitur tambah, cari, edit, dan pengelompokan status baca (belum selesai / selesai dibaca).",
        projectImage: "bookshelf.png",
        projectLink: "https://kriswangsaputra.github.io/booshelf-App/"
    },
    {
        id: 5,
        projectTitle: "Profile Kebumen",
        projectDescription: "Website profil daerah Kabupaten Kebumen, menyajikan sejarah, data geografis, dan destinasi wisata.",
        projectImage: "halaman-profile-kebumen.png",
        projectLink: "https://kriswangsaputra.github.io/halaman-profil-kelas-dicoding/"
    },
    {
        id: 6,
        projectTitle: "Landing Page Krisis Betta Farm",
        projectDescription: "Landing page peternakan ikan cupang, menampilkan jenis-jenis cupang, galeri koleksi, katalog jual-beli, dan artikel berita.",
        projectImage: "landing-page-krisisbettafarm.png",
        projectLink: "https://kriswangsaputra.github.io/Tugas-Akhir-Belajar-Dasar-Pemrograman-Web/"
    },
    {
        id: 7,
        projectTitle: "Personal Note",
        projectDescription: "aplikasi catatan pribadi (notes app) dengan fitur CRUD (tambah, baca, arsip, hapus catatan).",
        projectImage: "personal-notes.png",
        projectLink: "https://github.com/Kriswangsaputra/personal-note.git"
    },
    {
        id: 8,
        projectTitle: "Contact App",
        projectDescription: "aplikasi manajemen kontak (CRUD kontak — tambah, lihat, edit, hapus daftar kontak/nama-nomor telepon).",
        projectImage: "contact-app.png",
        projectLink: "https://github.com/Kriswangsaputra/Contact-app.git"
    },
    {
        id: 9,
        projectTitle: "Belajar Alfabet",
        projectDescription: "Website edukasi interaktif untuk belajar alfabet beserta ilustrasi benda terkait tiap huruf.",
        projectImage: "belajar-alfabet.png",
        projectLink: "https://kriswangsaputra.github.io/Belajar-Alfabet-Dicoding/"
    },
    {
        id: 10,
        projectTitle: "Landing Page Dicoding",
        projectDescription: "Replikasi landing page platform edukasi teknologi Dicoding Indonesia sebagai latihan struktur landing page.",
        projectImage: "landing-page-dicoding.png",
        projectLink: "https://kriswangsaputra.github.io/landing-page-dicoding/"
    },
    {
        id: 11,
        projectTitle: "Portfolio Kris",
        projectDescription: "Website portofolio pribadi versi awal, menampilkan profil, pendidikan, pengalaman kerja, dan sertifikasi.",
        projectImage: "portfolio.png",
        projectLink: "https://kriswangsaputra.github.io/portofolio/"
    },
    {
        id: 12,
        projectTitle: "Portfolio Coding Studio",
        projectDescription: "Template portofolio personal one-page dengan galeri karya dan form kontak.",
        projectImage: "portfolio-kodingstudio.png",
        projectLink: "https://kriswangsaputra.github.io/codingstudioportofolio/"
    },
    {
        id: 13,
        projectTitle: "Revamp MHI",
        projectDescription: "Landing page company profile divisi Online Marketing PT Mitra Hub Indonesia, menampilkan produk Samsung, lokasi toko, dan mitra pembayaran.",
        projectImage: "revamp.png",
        projectLink: "https://kriswangsaputra.github.io/revamp.github.io/"
    }
];

export const dummyProjectFinal = dummyproject.map((item) => {
    return {
        ...item,
        projectImage: imageProjectDummy[`./assets/dummyProject/${item.projectImage}`]?.default
    };
})

// design grafis

const dataImage = import.meta.glob("./assets/designgrafis/*.{png,jpg,jpeg}", {eager:true});

export const designgrafis = [
    {
        id: 1,
        designGrafisImage:"banner-01.png"
    },
    {
        id: 2,
        designGrafisImage:"banner-02.png"
    },
    {
        id: 3,
        designGrafisImage:"banner-03.png"
    },
    {
        id: 4,
        designGrafisImage:"banner-04.png"
    },
    {
        id: 5,
        designGrafisImage:"banner-05.png"
    },
    {
        id: 6,
        designGrafisImage:"banner-06.png"
    },
    {
        id: 7,
        designGrafisImage:"banner-07.jpg"
    },
    {
        id: 8,
        designGrafisImage:"banner-08.png"
    },
    {
        id: 9,
        designGrafisImage:"banner-09.png"
    }
];

export const finalDesignGrafis = designgrafis.map((item) => {
    return {
        ...item,
        designGrafisImage: dataImage[`./assets/designgrafis/${item.designGrafisImage}`]?.default
    };
});


// Sertifikat dan pelatihan

const SertifikatImage = import.meta.glob("./assets/sertifikat/*.{png,jpg,jpeg}", {eager:true});
export const sertifikatpelatihan = [
    {
        id: 1,
        name:"Belajar Membuat Aplikasi Web dengan React",
        sertifikat:"Belajar Membuat Aplikasi Web dengan React.pdf",
        image:"Belajar Membuat Aplikasi Web dengan React_page-0001.jpg"
    },
    {
        id: 2,
        name:"Belajar Membuat Front-End Web untuk Pemula",
        sertifikat:"Belajar Membuat Front-End Web untuk Pemula.pdf",
        image:"Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg"
    },
    {
        id: 3,
        name:"Belajar Dasar Pemrograman JavaScript",
        sertifikat:"Belajar Dasar Pemrograman JavaScript.pdf",
        image:"Belajar Dasar Pemrograman JavaScript_page-0001.jpg"
    },
    {
        id: 4,
        name:"Belajar Dasar Pemrograman Web",
        sertifikat:"Belajar Dasar Pemrograman Web.pdf",
        image:"Belajar Dasar Pemrograman Web_page-0001.jpg"
    },
    {
        id: 5,
        name:"Belajar Strategi Pengembangan Diri",
        sertifikat:"Belajar Strategi Pengembangan Diri.pdf",
        image:"Belajar Strategi Pengembangan Diri_page-0001.jpg"
    },
    {
        id: 6,
        name:"Introduction to Financial Literacy",
        sertifikat:"Introduction to Financial Literacy.pdf",
        image:"Introduction to Financial Literacy_page-0001.jpg"
    }
]

export const finalSertifikatPelatihan = sertifikatpelatihan.map((item) => {
    return {
        ...item,
        image: SertifikatImage[`./assets/sertifikat/${item.image}`]?.default
    }
})


// aurora config
export const auroraConfig = [
    {
        id:1,
        warna:"bg-accent",
        animate:{
            x:[0,800,-100,0],
            y:[0,-680,160,0]
        }
    },
    {
        id:2,
        warna:"bg-cyan-500",
        animate:{
           x:[800,1200,100,800],
           y:[500,680,-160,500] 
        }
    },
    {
        id:3,
        warna:"bg-accent",
        animate:{
            x:[1300,1500,300,1300],
            y:[1500,780,560,1500]
        }
    },
    {
        id:4,
        warna:"bg-cyan-500",
        animate:{
            x:[0,200,500,0],
            y:[2100,980,-800,2100]
        }
    }
]