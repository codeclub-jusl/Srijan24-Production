"use client"
import { useState, useEffect } from 'react';
import Svg_Login from '@/components/Svg_Login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/store/userSlice';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import GoogleSignIn from '@/components/GoogleSignIn';
import { notification } from 'antd';

export default function SignUp() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [college, setCollege] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('1');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [botState, setBotState] = useState('surprised');
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (user && user.emailVerified) {
            // notification['success']({
            //     message: `Logged in as ${userData.email}`,
            //     duration: 2
            // })
            router.push("/dashboard");
        }

        auth.onAuthStateChanged(async (authUser) => {
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

                    // console.log("sign up");

                    router.push("/dashboard");
                }

            }
        });

        // auth.onAuthStateChanged(handleAuthStateChanged);
    }, []);

    useEffect(() => {
        if (user && user.emailVerified) {
            router.push("/dashboard");
        }
    }, [user]);

    useEffect(() => {
        const hasErrors = emailError || passwordError || phoneError || passwordMatchError;
        if (hasErrors) {
            setBotState('sad');
        } else {
            setBotState('bot-surprised');
        }
    }, [emailError, passwordError, passwordMatchError, phoneError]);

    useEffect(() => {
        validatePasswordMatch();
    }, [confirmPassword])

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const validatePasswordMatch = () => {
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
        } else {
            setPasswordMatchError(false);
        }
    };

    const validatePhone = () => {
        const phoneRegex = /^\d{9}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    };
    const nextStep = () => {
        if (step === 1 && email && phone && !phoneError && !emailError) {
            setStep(step + 1);
        } else if (step === 2 && college && year && dept) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleClick = () => {
        // console.log("clicked");

        validateEmail();
        validatePassword();
        validatePasswordMatch();
        validatePhone();

        // console.log(passwordMatchError);

        const hasErrors = emailError || passwordError || passwordMatchError || phoneError;

        // console.log(hasErrors);

        if (hasErrors) {
            setBotState('sad');
        } else {
            setBotState('happy');

            // console.log("clicked");

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredentials) => {
                    notification['success']({
                        message: `Registered successfully`,
                        duration: 3,
                    })

                    await setDoc(doc(db, "users", userCredentials.user.email), {
                        name,
                        email,
                        phone,
                        college,
                        dept,
                        year,
                    });

                    await sendEmailVerification(auth.currentUser).then(() => {
                        router.push("/emailVerification");
                    });

                    setName("");
                    setEmail("");
                    setPhone("");
                    setCollege("");
                    setDept("");
                    setYear("");
                    setPassword("");
                    setConfirmPassword("");
                    setEmailError(false);
                    setPasswordError(false);
                    setPasswordMatchError(false);
                    setPhoneError(false);
                })
                .catch((err) => {
                    // console.log(err);
                    notification['error']({
                        message: `Email already registered`,
                        duration: 3
                    })
                });
        }

        // if (!passwordError && !passwordMatchError) {
        //     console.log('Form submitted');
        // }
        // else
        //     return;
    };

    return (
        <>
            <section className="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]">
                <div className="relative min-h-[60vh] flex flex-row m-6 space-y-8 bg-gradient-to-r from-[#ffffff2a] to-[#ffffff62] shadow-2xl rounded-2xl md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <h1 className="mb-3 login-h1 text-[28px] sm:text-[35px] md:text-[45px] lg:text-[50px]">Welcome Friend!</h1>
                        <span className="font-light text-white mb-8 text-[10px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                            Let’s get started.
                        </span>
                        {step === 1 && (
                            <div>
                                <div className="relative py-4">
                                    <input type="text" value={name} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="username" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Full Name</label>
                                </div>
                                <div className="relative py-4">
                                    <input type="text" value={email} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setEmail(e.target.value); validateEmail(); }} />
                                    <label htmlFor="username" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Email</label>
                                    {emailError && <span className="text-red-500 text-xs">*Invalid Email Address</span>}
                                </div>

                                <div className="relative py-4">
                                    <input type="number" value={phone} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setPhone(e.target.value); validatePhone(); }} />
                                    <label htmlFor="username" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Phone Number</label>
                                    {phoneError && <span className="text-red-500 text-xs">*Invalid Phone Number</span>}
                                </div>
                                <div className='flex items-center justify-center'>
                                    {/* <button className='rounded-full bg-[#d9d9d9] p-2 mx-2 mb-4' disabled onClick={prevStep}>Back</button> */}
                                    <span className='mx-2 mb-4 text-white'>Step {step}</span>
                                    <button className='rounded-full bg-[#f5c9ff] p-2 mx-2 mb-4' onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className='w-full'>
                                <div className="relative py-4">
                                    <input type="text" value={college} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => setCollege(e.target.value)} />
                                    <label htmlFor="college" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">College</label>
                                </div>
                                <div className="relative py-4">
                                    <input type="text" value={dept} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => setDept(e.target.value)} />
                                    <label htmlFor="dept" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Department</label>
                                </div>
                                <div className="relative py-4">
                                    <select value={year} className="w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" onChange={(e) => setYear(e.target.value)}>
                                        <option className='text-black' value="1">First</option>
                                        <option className='text-black' value="2">Second</option>
                                        <option className='text-black' value="3">Third</option>
                                        <option className='text-black' value="4">Fourth</option>
                                        <option className='text-black' value="5">Other</option>
                                    </select>
                                    <label htmlFor="year" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Year</label>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='rounded-full bg-[#f5c9ff] p-2 mx-2 mb-4' onClick={prevStep}>Back</button>
                                    <span className='mx-2 mb-4 text-white'>Step {step}</span>
                                    <button className='rounded-full bg-[#f5c9ff] p-2 mx-2 mb-4' onClick={nextStep}>Next</button>
                                </div>

                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <div className="relative py-4">
                                    <input type="password" value={password} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setPassword(e.target.value); validatePassword(); }} />
                                    <label htmlFor="year" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Password</label>
                                    {passwordError && <span className="text-red-500 text-xs">*Invalid Password</span>}
                                </div>
                                <div className="relative py-4">
                                    <input type="password" value={confirmPassword} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setConfirmPassword(e.target.value); }} />
                                    <label htmlFor="year" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Confirm Password</label>
                                    {passwordMatchError && <span className="text-red-500 text-xs">*Confirm password don't match</span>}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='rounded-full bg-[#f5c9ff] p-2 mx-2 mb-4' onClick={prevStep}>Back</button>
                                    <span className='mx-2 mb-4 text-white'>Step {step}</span>
                                    {/* <button className='rounded-full bg-[#d9d9d9] p-2 mx-2 mb-4' disabled onClick={nextStep}>Next</button> */}
                                </div>
                                <button className="w-full bg-[#2e0d36]  text-[#f5c9ff] p-2 rounded-lg mb-6" onClick={handleClick}>
                                    Sign Up
                                </button>
                            </div>
                        )}
                        {/* <button
                        className="w-full bg-[#2e0d36]  text-[#f5c9ff]  text-md p-2 rounded-lg mb-6" disabled={!robotActive}
                    >
                        <img src="/images/google.png" alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button> */}
                        <GoogleSignIn />
                        <div className="text-center text-white">
                            Already having an account? &nbsp;
                            <Link href="/login"><span className="font-bold text-[#dfcffc]">Log In here</span></Link>
                        </div>
                    </div>
                    <div className='svg-bot relative min-w-[31vw]'>
                        <Svg_Login className='transform md:scale-50' botState={botState} />
                    </div>
                </div>
            </div>
        </>

    );
}
