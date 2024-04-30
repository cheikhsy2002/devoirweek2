export interface eleve{
    matricule: string,
    prenom: string,
    nom: string,
    datenaissance: Date,
    sexe: string,
    classe: string
}

export function adde(mat:string,pre:string,no:string, date:Date,sex:string,cla:string): eleve{
    return{
        matricule: mat,
        prenom: pre,
        nom: no,
        datenaissance: date,
        sexe: sex,
        classe: cla,
    };

}