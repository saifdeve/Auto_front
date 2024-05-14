import { useEffect, useState } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
export default function Logout() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user,setUser] = useState([]);
    // useEffect(()=>{
    //     Axios.get("http://localhost:3001/users")
    //         .then(res=>{
    //             setUser(res.data)
    //             }
    //         )
    // },[])

    const handleSignUp = async () => {
        // Validation des données
        if (!email || !password) {
            setError("Please provide both email and password.");
            return;
        }

        try {
            // Code pour traiter l'inscription avec email et mot de passe
            // Remplacez cela par votre logique d'inscription

            // Exemple de traitement asynchrone fictif
            await new Promise((resolve, reject) => {
                // Simuler une requête HTTP asynchrone
                setTimeout(() => {
                    // Envoyer les données d'inscription au serveur
                    Axios.post("http://localhost:3001/register", { email, password })
                        .then(res => {
                            // Gérer la réponse de la requête HTTP
                            if(res.data.message){
                                alert(res.data.message)
                                return
                            }else if(res.data.error){
                                alert(res.data.error)
                                return
                            }
                            resolve(); // Résoudre la promesse une fois que la requête est terminée
                        })
                        .catch(error => {
                            // Gérer les erreurs de la requête HTTP
                            setError("Failed to sign up. Please try again later.");
                            reject(error); // Rejeter la promesse en cas d'erreur
                        });
                }, 2000);
            });
            

            // Réinitialiser les champs et effacer les erreurs après une inscription réussie
            setEmail("");
            setPassword("");
            setError("");
        } catch (err) {
            // Gérer les erreurs d'inscription
            setError("Failed to sign up. Please try again later.");
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
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                <button
                                    onClick={handleSignUp}
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span>Sign Up</span>
                                </button>
                                <Link to="/login">Logout</Link>
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
