import { type HeroProps, type NavLink, type EstudiosProps, TiposConocimientos, type ConocimientosProps, type ExperienciaProps, type ProjectProps, type ContactProps } from "@types"; 

import ApacheLogo from "../assets/logos/Apache_Logo.svg";
import AstroLogo from "../assets/logos/Astro.svg";
import AWSLogo from "../assets/logos/AWS_logo.svg";
import BootstrapLogo from "../assets/logos/Bootstrap_logo.svg";
import CSSLogo from "../assets/logos/CSS_Logo.svg";
import DjangoLogo from "../assets/logos/Django_logo.svg";
import DockerLogo from "../assets/logos/docker.svg";
import HTMLLogo from "../assets/logos/HTML5.svg";
import JSLogo from "../assets/logos/JavaScript_logo.svg";
import MariaDBLogo from "../assets/logos/MariaDB_logo.svg";
import NodeJSLogo from "../assets/logos/Nodejs_logo.svg";
import PHPLogo from "../assets/logos/PHP-logo.svg";
import PythonLogo from "../assets/logos/Python-logo.svg";
import ReactLogo from "../assets/logos/React.svg";
import TailwindLogo from "../assets/logos/Tailwind_CSS_Logo.svg";
import WordPressLogo from "../assets/logos/WordPress.svg";

import ExtremaduraStatsPreview from "../assets/extremadurastats.png";
import PortfolioPreview from "../assets/portfolio.png";

export const navLinks: NavLink[] = [
    { text: "Inicio", href: "#top" },
    { text: "Sobre mí", href: "#about" },
    { text: "Experiencia", href: "#experiencia" },
    { text: "Proyectos", href: "#proyectos" },
    { text: "Contacto", href: "#form-contact" }
];

export const hero: HeroProps = {
    nombre: "Gonzalo Suárez Barrientos",
	especialidad: "Desarrollador web y administrador de sistemas",
	resumen: `Especializado en la creación de aplicaciones web y gestión de servidores.
        Manejo el frontend con HTML, CSS y JavaScript, y el backend con Python y PHP.
        Además, domino frameworks como Astro, Tailwind CSS y Bootstrap, y librerías como React.
        También he desplegado aplicaciones en servidores Ubuntu y Windows Server
        ubicados en equipos locales y AWS.`
};

export const estudios: EstudiosProps[] = [
    {
        nombre: "Curso de Especialización en Desarrollo de aplicaciones en lenguaje Python",
        centro: "IES Suárez de Figueroa (Zafra)",
        inicio: 2025,
        fin: 2026,
        descripcion: `Lenguaje Python, diseño de APIs con FastAPI,
            administración de servidores Linux con gestión de protocolos FTP y HTTPS,
            configuración de certificados SSL, Apache, despliegue en Amazon Web Services.`
    },
    {
        nombre: "Grado Superior en Desarrollo de Aplicaciones Web",
        centro: "IES Suárez de Figueroa (Zafra)",
        inicio: 2023,
        fin: 2025,
        descripcion: `HTML, CSS, JavaScript, PHP y Java, diseño web en Figma,
            frameworks (Astro, Bootstrap, Tailwind CSS), virtualización y empaquetado de apps con Docker,
            control de versiones con Git y GitHub.`
    },
    {
        nombre: "Grado Superior en Administración de Sistemas Informáticos en Red",
        centro: "IES Suárez de Figueroa (Zafra)",
        inicio: 2021,
        fin: 2023,
        descripcion: `Windows Server y Ubuntu Server, MySQL y MariaDB,
            scripting en Bash/Shell para automatización de tareas, configuración de infraestructuras de red local,
            despliegue de máquinas virtuales en Oracle VirtualBox y VMware.`
    }
];

export const conocimientos: ConocimientosProps[] = [
    { nombre: "HTML", imagen: HTMLLogo, tipo: TiposConocimientos.frontend },
    { nombre: "CSS", imagen: CSSLogo, tipo: TiposConocimientos.frontend },
    { nombre: "JavaScript", imagen: JSLogo, tipo: TiposConocimientos.frontend },
    { nombre: "Astro", imagen: AstroLogo, tipo: TiposConocimientos.frontend },
    { nombre: "React", imagen: ReactLogo, tipo: TiposConocimientos.frontend },
    { nombre: "Bootstrap", imagen: BootstrapLogo, tipo: TiposConocimientos.frontend },
    { nombre: "Tailwind CSS", imagen: TailwindLogo, tipo: TiposConocimientos.frontend },       
    { nombre: "PHP", imagen: PHPLogo, tipo: TiposConocimientos.backend },
    { nombre: "Python", imagen: PythonLogo, tipo: TiposConocimientos.backend },
    { nombre: "Django", imagen: DjangoLogo, tipo: TiposConocimientos.backend },
    { nombre: "Node.js", imagen: NodeJSLogo, tipo: TiposConocimientos.backend },
    { nombre: "Apache", imagen: ApacheLogo, tipo: TiposConocimientos.dev },
    { nombre: "Docker", imagen: DockerLogo, tipo: TiposConocimientos.dev },
    { nombre: "AWS", imagen: AWSLogo, tipo: TiposConocimientos.dev },
    { nombre: "MariaDB", imagen: MariaDBLogo, tipo: TiposConocimientos.bdycms },
    { nombre: "WordPress", imagen: WordPressLogo, tipo: TiposConocimientos.bdycms }
];

export const socialLinks: NavLink[] = [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gonzalosuarezbarrientos" },
    { text: "GitHub", href: "https://github.com/GonzaloSurba" }
];

export const experiencia: ExperienciaProps[] = [
    {
        empresa: "MundoRed",
        tipo: "Desarrollador web",
        inicio: "Marzo 2025",
        fin: "Junio 2025",
        descripcion: `Creación de páginas web para empresas públicas y privadas con WordPress,
            desarrollo de chats de voz y texto con avatares personalizados en React y Node.js,
            recorridos 3D de interiores con 3DVista.`
    },
    {
        empresa: "Deutz Spain",
        tipo: "Administrador de sistemas",
        inicio: "Marzo 2023",
        fin: "Junio 2023",
        descripcion: `Reparación y mantenimiento de equipos informáticos,
            organización de inventario, cumplimiento de protocolo de prevención de riesgos.`
    },
    {
        empresa: "Ayuntamiento de Bienvenida",
        tipo: "Administrador de sistemas",
        inicio: "Marzo 2021",
        fin: "Junio 2021",
        descripcion: `Reparación de equipos informáticos, instalación de sistemas operativos y software.`
    },
];

export const proyectos: ProjectProps[] = [
    {
        nombre: "Extremadura Stats",
        resumen: "Web de estadísticas del Club Deportivo Extremadura hecha con React y Python.",
        imagen: ExtremaduraStatsPreview,
        linkWeb: "https://extremadurastats.es/",
        linkCodigo: "https://github.com/GonzaloSurba/cdextremadura-stats-website"
    },
    {
        nombre: "Mi portfolio",
        resumen: "Portfolio realizado con Astro.",
        imagen: PortfolioPreview,
        linkWeb: "https://extremadurastats.es/",
        linkCodigo: "https://github.com/GonzaloSurba/estadisticas-cdextremadura-web"
    }
]

export const contacto: ContactProps = {
    email: "suarezbarrientosgonzalo@gmail.com"
}