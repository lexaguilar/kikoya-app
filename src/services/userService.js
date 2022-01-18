import role_group from "../data/role_grants";
import users from "../data/users";

const tokenName = 'token';

/**
 * Logea un usuario y guarda el token
 * @return {Promise<boolean>} token
 */
const login = user => {

    return new Promise((resolve, reject) => {
        
        const userResult = users.find(u => u.username === user.username && u.password === user.password);
        
        const existUser = userResult != null;
        
        if(existUser)
            setToken(userResult); //En un caso real, se deberia ser el token de autenticacion
    
         //simular una espera
         setTimeout(() => {

            resolve({ isOk : existUser,  ...userResult });
            
        }, 1000);  
        
       
    })

}



/**
 * Eliminar el token guardado en memoria
 */
const logout = () =>  localStorage.removeItem(tokenName);



/**
 * Guarda el token en memoria
 * @param {string} token -  token que se va guardar
 */
const setToken = token => localStorage.setItem(tokenName, token);



/**
 * Retorna el token guardado en memoria
 * @return {string} token
 */
const getToken = () => localStorage.getItem(tokenName);



/**
 * Verificar si el usuario esta logeado
 * @return {boolean}
 */
const isLogged = () => getToken() != null;

const permissions = role => role_group.find(r => r.role === role);

export const userService = {
    login,   
    logout,
    getToken,
    isLogged,
    permissions
}