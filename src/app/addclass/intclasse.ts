export interface classe {
    libelle : string,
    niveau: string,
    filiere: string,
}
export function addc(lib:string,niv:string,fil:string): classe{
    return{
        libelle: lib,
        niveau:niv,
        filiere:fil,
    };

}
