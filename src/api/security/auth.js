import { loginApi } from "./loginInstance";
import jwt_decode from 'jwt-decode';

  function getLoggedUser() {
    return new Promise(resolve => {
      const token = sessionStorage.getItem("token");
      resolve(token);
    });
  }
  
  async function login (user) {
    try {
      const {data}  = loginApi.post(`/users/login`, user)
      const authUser = jwt_decode(data.token);
      const username = authUser.preferred_username;
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('token', JSON.stringify(token) );
    } catch (error) {
      throw error; 
    }
  }


  export default {
    login,
    getLoggedUser
  };
  



