import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import axios from 'axios';
import { Login } from "@mui/icons-material";


const api_url= "http://localhost:8080"


class AuthService
{

signup(firstName, lastName, email, password)
{
let usersignup={
    firstName : firstName,
    lastName : lastName,
    password : password,
    email : email
};


return axios.post(`${api_url}/signup` ,usersignup);

}

updateUser(ID,firstName, lastName, email)
{
let usersignup={
    firstName : firstName,
    lastName : lastName,
    password :'',
    email : email
    
    
};


return axios.put(`${api_url}/updateuser/${ID}` ,usersignup);

}


login(email, password)
    {
let userlogin={
    email : email,
    password : password
}
return axios.post(`${api_url}/login` ,userlogin);

    }

registerSuccess(responseData)
    {
        sessionStorage.setItem("authUser", JSON.stringify(responseData));
    }
setNego(nego)
{
    sessionStorage.setItem('nego',JSON.stringify(nego))
}

getNego()
{
    return JSON.parse(sessionStorage.getItem('nego'));
}

removeNego()
{
    sessionStorage.removeItem('nego');
}

isNego() {
    let nego = sessionStorage.getItem("nego");
    if (nego === null) return false;
    return true;
}

getCurrentUser()
{
    return JSON.parse(sessionStorage.getItem("authUser"));
}

getCurrentId()
{
    let user = JSON.parse(sessionStorage.getItem("authUser"));
    return user.id;
}

logout() {
    sessionStorage.removeItem("authUser");
}


isUserLoggedIn() {
    let user = sessionStorage.getItem("authUser");
    if (user === null) return false;
    return true;
}

}
export default new AuthService();