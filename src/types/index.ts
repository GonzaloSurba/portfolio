import type { ImageMetadata } from "astro";

export interface NavLink {
    text: string;
    href: string;
}

export interface HeaderProps {
    imagen: ImageMetadata;
    navLinks: NavLink[];
}

export interface HeroProps {
    nombre: string;
    especialidad: string;
    resumen: string;
}

export interface EstudiosProps {
    nombre: string;
    centro: string;
    inicio: number;
    fin: number;
    descripcion: string;
}

export enum TiposConocimientos {
    frontend = "Frontend",
    backend = "Backend",
    bdycms = "Bases de datos y CMS",
    dev = "DevOps y herramientas"
}

export interface ConocimientosProps {
    nombre: string;
    imagen: ImageMetadata;
    tipo: TiposConocimientos;
}

export interface ExperienciaProps {
    empresa: string;
    tipo: string;
    inicio: string;
    fin: string;
    descripcion: string;
}

export interface ProjectProps {
    nombre: string;
    resumen: string;
    imagen: ImageMetadata;
    linkWeb?: string;
    linkCodigo?: string;
}

export interface ContactProps {
    email: string;
}

export interface FooterProps {
    autor: string;
    socialLinks: NavLink[];
}