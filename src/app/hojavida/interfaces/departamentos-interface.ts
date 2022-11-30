export interface Divipola {
    cod_depto:      string;
    cod_mpio:       string;
    dpto:           Dpto;
    nom_mpio:       string;
    tipo_municipio: TipoMunicipio;
}
export interface Departamentos {
    dpto?: string;
}

export enum Dpto {
    Antioquia = "ANTIOQUIA",
    Atlántico = "ATLÁNTICO",
    BogotáDC = "BOGOTÁ. D.C.",
    Bolívar = "BOLÍVAR",
    Boyacá = "BOYACÁ",
    Caldas = "CALDAS",
    Caquetá = "CAQUETÁ",
    Cauca = "CAUCA",
    Cesar = "CESAR",
    Chocó = "CHOCÓ",
    Cundinamarca = "CUNDINAMARCA",
    Córdoba = "CÓRDOBA",
    Huila = "HUILA",
    LaGuajira = "LA GUAJIRA",
    Magdalena = "MAGDALENA",
    Meta = "META",
    Nariño = "NARIÑO",
    NorteDeSantander = "NORTE DE SANTANDER",
    Quindío = "QUINDÍO",
    Risaralda = "RISARALDA",
    Santander = "SANTANDER",
    Sucre = "SUCRE",
    Tolima = "TOLIMA",
}

export enum TipoMunicipio {
    Municipio = "Municipio",
}
