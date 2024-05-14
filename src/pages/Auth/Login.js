import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie"
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cookies,setCookies] =useCookies("acces_token")
    // const [admin,setAdmin] = useState();
    // useEffect(()=>{
    //     Axios.get("http://localhost:3001/users")
    //     .then(
    //         setAdmin(res.data)
    //     )
    // },[])

    const handleSignIn = async () => {
        // Validation des données
        if (!email || !password) {
            setError("Please provide both email and password.");
            return;
        }

        try {
            // Code pour traiter la connexion avec email et mot de passe
            // Remplacez cela par votre logique de connexion

            // Exemple de traitement asynchrone fictif
            await new Promise((resolve, reject) => {
                // Simuler une requête HTTP asynchrone
                setTimeout(() => {
                    Axios.post("http://localhost:3001/login", { email, password })
                    .then((res)=>{
                        if (res.data.message){
                            alert(res.data.message); 
                            setCookies("acces_token",res.data.token)
                            window.localStorage.setItem("userId",res.data.userId)
                            window.location.reload(false)
                            console.log(res)
                        } else if(res.data.error){
                            alert(res.data.error); 
                        }
                        resolve();
                    })
                    .catch((err)=>{
                        console.log("user undfinded",err)
                    })

                }, 2000);
            });

            // Réinitialiser les champs et effacer les erreurs après une connexion réussie
            
            setPassword("");
            setError("");
        } catch (err) {
            // Gérer les erreurs de connexion
            setError("Failed to sign in. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img
                            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            className="w-32 mx-auto"
                            alt="Logo"
                        />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign in
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                                >
                                    <div className="bg-white p-2 rounded-full">
                                        <svg
                                            className="w-4"
                                            viewBox="0 0 533.5 544.3"
                                        >
                                            {/* Ajoutez le contenu SVG */}
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign in with Google
                                    </span>
                                </button>

                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                                >
                                    <div className="bg-white p-1 rounded-full">
                                        <svg
                                            className="w-6"
                                            viewBox="0 0 32 32"
                                        >
                                            {/* Ajoutez le contenu SVG */}
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign in with GitHub
                                    </span>
                                </button>
                            </div>

                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or Sign in with e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {error && (
                                    <p className="text-red-500 mt-2">{error}</p>
                                )}
                                <button
                                    onClick={handleSignIn}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {/* Ajoutez le contenu SVG */}
                                    </svg>
                                    <span className="ml-3">Sign in</span>
                                </button>
                                <Link to="/logout">Logout</Link>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's{" "}
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and its{" "}
                                    <a
                                        href="#"
                                        className="border-b border-gray-500 border-dotted"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}>
                    </div>
                </div>
            </div>
        </div>
    );
}