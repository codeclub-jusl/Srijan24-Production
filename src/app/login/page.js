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

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [botState, setBotState] = useState('surprised');
    const [robotActive, setRobotActive] = useState(true);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);
    const [showResetModal,setShowResetModal]=useState(false);

    useEffect(() => {
        if(user && user.emailVerified) {
            // notification['success']({
            //     message: `Logged in as ${userData.email}`,
            //     duration: 2
            // })
            router.push("/dashboard");
        }

        // auth.onAuthStateChanged(handleAuthStateChanged);
        auth.onAuthStateChanged(async (authUser) => {
            if(authUser && authUser.emailVerified) {
                const userRef = doc(db, "users", authUser.email);
                const userSnap = await getDoc(userRef);

                if(userSnap.exists()) {
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
        })

        const handleResize = () => {
            const mobile = window.innerWidth <= 600;
            setIsMobile(mobile);
            if (mobile) {
                setRobotActive(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
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

        // validateEmail();
        // validatePassword();

        const userRef = doc(db, "users", email);
        const userSnap = await getDoc(userRef);

        if(userSnap.exists()) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    if(!userCredentials.user.emailVerified) {
                        // alert("Please verify your email before logging in.")
                        setBotState('sad');
                        notification['error']({
                            message: `Please verify your email before logging in.`,
                            duration: 3
                        })

                        return signOut(auth).then(() => {}).catch((err) => {console.log(err);})
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
        
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#916bcf] to-[#ff3ab0]">

            <div className="relative h-[80vh] flex flex-col m-6 space-y-8 bg-[#2e0d36] bg-opacity-60 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-8 md:p-14">
                    <h1 className="mb-3 login-h1">Welcome back</h1>
                    <span className="font-light text-white mb-8">
                        {robotActive ? "Welcome back! Please enter your details" : "Activate the Mascot to Login!"}
                    </span>
                    <div className="relative py-4">
                        <input type="text" id="email" className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' placeholder='' disabled={!robotActive} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Email</label>
                        {emailError && <span className="text-red-500 text-sm">*Invalid email</span>}
                    </div>
                    <div className="relative py-4">
                        <input type="password" id="password" className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' disabled={!robotActive} placeholder='' onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all" >Password</label>
                        {passwordError && <span className="text-red-500 text-sm">*Password error</span>}
                    </div>
                    <div className="flex justify-center mb-2 w-full py-4 items-center text-center">

                        <span className="font-bold text-md text-[#3c0b3a] cursor-pointer" onClick={()=>setShowResetModal(true)}>Forgot password</span>
                    </div>
                    <button className="w-full bg-[#2e0d36]  text-[#f5c9ff] p-2 rounded-lg mb-6" onClick={handleClick} disabled={!robotActive}>
                        Log in
                    </button>
                    {/* <button
                        className="w-full bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg mb-6" disabled={!robotActive}
                    >
                        <img src="/images/google.png" alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button> */}
                    <GoogleSignIn robotActive={robotActive} />
                    <div className="text-center text-white">
                        Dont' have an account? &nbsp;
                        <Link href="/signup"><span className="font-bold text-[#3c0b3a]">Sign Up here</span></Link>
                    </div>
                </div>
                {!isMobile && (
                    <div className='relative w-[33vw]'>
                        <Svg_Login botState={botState} robotActive={robotActive} setRobotActive={setRobotActive} />
                    </div>
                )}
                <ResetPassword isVisible={showResetModal} onClose={()=>setShowResetModal(false)} />
            </div>
        </div>
    );
}
