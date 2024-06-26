export interface user{
    nom: string;
    prenom: string;
    email: string;
    username: string;
    password: string;
    role: string;
}

export function addU(no:string,pre:string,em:string, use:string,pass:string,rol:string): user{
    return{
        nom: no,
        prenom: pre,
        email: em,
        username: use,
        password: pass,
        role: rol,
    };
}
export function editU(no:string,pre:string,em:string, use:string,pass:string,rol:string): user {
    return{
        nom: no,
        prenom: pre,
        email: em,
        username: use,
        password: pass,
        role: rol,
    };
    
}