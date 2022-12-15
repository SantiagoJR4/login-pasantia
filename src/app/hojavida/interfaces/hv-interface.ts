import { Divipola } from "./departamentos-interface"
import { Snies } from "./snies-interface"

export interface HV {
    academicTraining: AcademicTraining,
    furtherTraining: FurtherTraining,
    workExperience: WorkExperience,
    teachingExperience: TeachingExperience
}

export interface AcademicTraining {
    academicModality: AcademicModality,
    date: Date,
    titleName: string,
    institution: string,
    degreePdf: string,
    certifiedTitle?: boolean,
    certifiedTitlePdf?: string
}
export interface FurtherTraining{
    complementarymodality:ComplementaryModality,
    titleName: string,
    institution: string,
    hours: number,
    date: Date,
    certifiedPdf: string    
}
export interface WorkExperience {
    companyName : string,
    position : string,
    dependence : string,
    department : Divipola,
    companyAddress : string,
    bossName: string,
    phone:string,
    dateAdmission: Date,
    retirementDate: Date,
    certifiedPdf: string
}
export interface TeachingExperience {
    university: Snies,
    dateAdmission: string,
    retirementDate:string,
    contractModality:ContractModality,
    faculty:string,
    program:string,
    certifiedPdf:string
}

export enum AcademicModality {
    AU = 'Auxiliar',
    TP = 'Técnico Profesional',
    TC= 'Tecnólogo',
    TCE = 'Tecnólogo Especializado',
    UN = 'Universitario',
    ESP = 'Especialización',
    MG = 'Maestría o Magíster',
    DOC = 'Doctorado o PHD',
    PDO = 'Post Doctorado'
}

export enum ComplementaryModality{
    CL = 'Curso Presencial',
    CV = 'Curso Virtual',
    DI = 'Diplomado',
    SM = 'Seminario',
    CG = 'Congreso',
    PR = 'Premio',
    RE = 'Reconocimiento',
}

export enum ContractModality{
    TC= 'Tiempo Completo',
    MT = 'Medio Tiempo',
    HC = 'Hora Catedra'
}
