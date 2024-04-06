export interface eleve{
    matricule: string,
    prenom: string,
    nom: string,
    datenaissance: string,
    sexe: string,
    classe: string
}

export function affiche(eleve: eleve) {
    console.log(eleve);
}