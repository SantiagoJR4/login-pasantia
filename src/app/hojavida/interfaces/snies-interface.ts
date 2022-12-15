export interface Snies {
    c_digo_instituci_n:          string;
    nombre_instituci_n:          string;
    n_mero_identificaci_n:       string;
    principal_seccional:         PrincipalSeccional;
    naturaleza_jur_dica:         NaturalezaJurDica;
    sector:                      Sector;
    car_cter_acad_mico:          CarCterAcadMico;
    cod_departamento:            string;
    departamento_domicilio:      string;
    municipio_domicilio:         string;
    direcci_n_domicilio:         string;
    tel_fono_domicilio:          string;
    norma_de_creaci_n:           string;
    fecha_norma_de_creaci_n:     Date;
    acreditada_alta_calidad:     AcreditadaAltaCalidad;
    fecha_acreditaci_n:          Date | FechaAcreditaciNEnum;
    resoluci_n_de_la_acreditaci: string;
    vigencia_de_la_acreditaci:   string;
    estado:                      Estado;
    fecha_actualizacion:         Date;
    p_gina_web:                  string;
}

export enum AcreditadaAltaCalidad {
    No = "NO",
    Si = "SI",
}

export enum CarCterAcadMico {
    InstituciónTecnológica = "Institución Tecnológica",
    InstituciónTécnicaProfesional = "Institución Técnica Profesional",
    InstituciónUniversitariaEscuelaTecnológica = "Institución Universitaria/Escuela Tecnológica",
    Universidad = "Universidad",
}

export enum Estado {
    ActivaEnLaFechaDeActualizacion = "Activa en la Fecha de Actualizacion",
}

export enum FechaAcreditaciNEnum {
    Na = "NA",
}

export enum NaturalezaJurDica {
    Corporación = "Corporación",
    Departamental = "Departamental",
    Fundación = "Fundación",
    Municipal = "Municipal",
    Nacional = "Nacional",
}

export enum PrincipalSeccional {
    Principal = "Principal",
    Seccional = "Seccional",
}

export enum Sector {
    Oficial = "Oficial",
    Privado = "Privado",
}