import Login from "./Login"
import Home from "../Home"
import {useCookies} from "react-cookie"
export default function Auth(){
    const [cookies,setCookies] =useCookies("acces_token")
    return(
        <>
           {!cookies.acces_token ?
            <Login/>:<Home/>}
        </>
    );
}