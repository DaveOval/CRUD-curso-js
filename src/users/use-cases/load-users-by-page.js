import { localHostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */


export const loadUsersByPage = async( page = 1) =>{
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const rest = await fetch(url);
    const data = await rest.json();


    const users = data.map( userLike => localHostUserToModel(userLike));

    return users;

}