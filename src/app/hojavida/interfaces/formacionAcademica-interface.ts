export interface FormacionAcademica{
    modalidadAcademica:ModalidadAcademica,
    fechaGrado:Date,
    nombreTitulo:string,
    institucion:string,
    tituloConvalidado:boolean,
    pdfTituloConvalidado:string,
    pdfDiploma:string
}
export interface modalidad{
    nombre:string,
    codigo:string
}

export enum ModalidadAcademica{
    AU = 'Auxiliar',
    TP = 'Técnico Profesional',
    TC= 'Tecnólogo',
    TCE = 'Tecnóloo Especializado',
    UN = 'Universitario',
    ESP = 'Especialización',
    MG = 'Maestría o Magíster',
    DOC = 'Doctorado o PHD',
    PDO = 'Post Doctorado'

}
//------------------------------------------------------------------------------------
export interface FormacionComplementaria{
    nombreTitulo:string,
    institucion:string,
    totalHoras:number,
    fecha?:Date,
    certificado_url?:string
}
export interface departamentos{
    nombre:string
}
//------------------------------------------------------------------------
export interface ExperienciaLaboral{
    nombreEmpresa:string,
    cargo:string,
    dependencia?:string,
    departamento?:string,
    direccionEntidad?:string,
    nombreJefe?:string,
    telefono?:string,
    fechaIngreso:Date,
    fechaRetiro:Date,
}