"use client"
import { useState, useEffect } from 'react';
import Svg_Login from '@/components/Svg_Login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { loginUser } from '@/store/userSlice';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import GoogleSignIn from '@/components/GoogleSignIn';
import ResetPassword from '@/components/ResetPassword';
import { notification } from 'antd';
import BeatLoader from "react-spinners/BeatLoader";
import Image from 'next/image';
export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [botState, setBotState] = useState('surprised');
    const [showResetModal, setShowResetModal] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (user && user.emailVerified) {
            // notification['success']({
            //     message: `Logged in as ${userData.email}`,
            //     duration: 2
            // })
            router.push("/dashboard");
        }

        // auth.onAuthStateChanged(handleAuthStateChanged);
        auth.onAuthStateChanged(async (authUser) => {
            setLoading(true);

            if (authUser && authUser.emailVerified) {
                const userRef = doc(db, "users", authUser.email);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const userData = userSnap.data();

                    // notification['success']({
                    //     message: `Logged in as ${userData.email}`,
                    //     duration: 2
                    // })

                    dispatch(loginUser({
                        ...userData,
                        emailVerified: authUser.emailVerified,
                    }));

                    // console.log("log in");

                    router.push("/dashboard");
                }
            }

            setLoading(false);
        })
    }, []);


    // const validateEmail = () => {
    //     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!re.test(email)) {
    //         setEmailError(true);
    //         setBotState('sad');
    //     } else {
    //         setEmailError(false);
    //         setBotState('happy');
    //     }
    // };

    // const validatePassword = () => {
    //     if (password.length < 8) {
    //         setPasswordError(true);
    //         setBotState('sad');
    //     } else {
    //         setPasswordError(false);
    //         setBotState('happy');
    //     }
    // };

    const handleClick = async (e) => {
        e.preventDefault();

        setLoading(true);

        // validateEmail();
        // validatePassword();
        if (email.trim().length === 0) {
            notification['error']({
                message: `Invalid credentials`,
                duration: 3
            })
        } else {
            const userRef = doc(db, "users", email);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredentials) => {
                        if (!userCredentials.user.emailVerified) {
                            // alert("Please verify your email before logging in.")
                            setBotState('sad');
                            notification['error']({
                                message: `Please verify your email before logging in.`,
                                duration: 3
                            })

                            return signOut(auth).then(() => { }).catch((err) => { console.log(err); })
                        } else {
                            setBotState('happy');
                            notification['success']({
                                message: `Logged in successfully`,
                                duration: 3
                            })
                        }
                    })
                    .catch((err) => {
                        setBotState('sad');
                        notification['error']({
                            message: `Invalid credentials`,
                            duration: 3
                        })
                        // console.log(err);
                    })
            } else {
                // alert("Email is not registered.")
                setBotState('sad');
                notification['error']({
                    message: `Email is not registered.`,
                    duration: 3
                })
            }
        }

        setLoading(false);

    };
    return (
        <>
          
            <div className='absolute inset-0 -z-80'>
                <Image src="/images/about/about.png" className='' alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]">

                <div className="relative min-h-[60vh] flex flex-row m-6 space-y-8 bg-gradient-to-r from-[#ffffff2a] to-[#ffffff62] shadow-2xl rounded-2xl md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <h1 className="mb-3 login-h1 text-[28px] sm:text-[35px] md:text-[45px] lg:text-[50px]">Welcome back</h1>
                        <span className="font-light text-white mb-8 text-[10px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                            Welcome back! Please enter your details
                        </span>
                        <div className="relative py-4">
                            <input type="text" id="email" className=" w-full border-b py-1 text-white focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' placeholder='' onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Email</label>
                            {emailError && <span className="text-red-500 text-sm">*Invalid email</span>}
                        </div>
                        <div className="relative py-4">
                            <input type="password" id="password" className=" w-full border-b text-white py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' placeholder='' onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all" >Password</label>
                            {passwordError && <span className="text-red-500 text-sm">*Password error</span>}
                        </div>
                        <div className="flex justify-center mb-2 w-full py-4 items-center text-center">

                            <span className="text-md text-[#dfcffc] cursor-pointer" onClick={() => setShowResetModal(true)}>Forgot password</span>
                        </div>
                        <button className="w-full bg-[#2e0d36]  text-[#f5c9ff] p-2 rounded-lg mb-6" onClick={handleClick}>
                            {loading ? <BeatLoader color='#ffffff' /> : "Log in"}
                        </button>
                        {/* <button
                        className="w-full bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg mb-6" disabled={!robotActive}
                    >
                        <img src="/images/google.png" alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button> */}
                        <GoogleSignIn />
                        <div className="text-center text-white">
                            Don't have an account? &nbsp;
                            <Link href="/signup"><span className="font-bold text-[#dfcffc]">Sign Up here</span></Link>
                        </div>
                    </div>

                    <div className='svg-bot relative min-w-[30vw]'>
                        <Svg_Login className='transform md:scale-50' botState={botState} />
                    </div>

                    <ResetPassword isVisible={showResetModal} onClose={() => setShowResetModal(false)} />
                </div>
            </div>
        </>

    );
}
