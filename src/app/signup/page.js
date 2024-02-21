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
import BeatLoader from "react-spinners/BeatLoader";
import EmailVerification from '@/components/EmailVerification';

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
    const [loading, setLoading] = useState(false);
    const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false);

    useEffect(() => {
        if (user && user.emailVerified) {
            // notification['success']({
            //     message: `Logged in as ${userData.email}`,
            //     duration: 2
            // })
            router.push("/dashboard");
        }

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

                    // console.log("sign up");

                    router.push("/dashboard");
                }

            }

            setLoading(false);
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
        const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (re.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    const validatePassword = (password) => {
        const isPassValid = password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 6;

        return isPassValid;
    };

    const validatePasswordMatch = (password, confirmPassword) => {
        if (password !== confirmPassword) {
            return false;
        } else {
            return true;
        }
    };

    const validatePhone = () => {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (phoneRegex.test(phone)) {
            return true;
        } else {
            return false;
        }
    };
    const nextStep = () => {
        if(step === 1)
        {
            if (name && email && phone && validatePhone(phone) && validateEmail(email)) {
                setStep(step + 1);
            } else {
                notification['error']({
                    message: `All fields are required. Please make sure phone and email are valid`,
                    duration: 3,
                })
            }
        }
        else if(step === 2) {
            if(college && year && dept) {
                setStep(step + 1);
            } else {
                notification['error']({
                    message: `All fields are required.`,
                    duration: 3,
                })
            }
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleClick = () => {
        // console.log("clicked");
        if(!validatePassword(password)) {
            notification['error']({
                message: `Password must contain atleast 1 each lowercase, uppercase, special character, digit and must be 6 characters long`,
                duration: 5,
            })
            return;
        }

        if(!validatePasswordMatch(password, confirmPassword)) {
            notification['error']({
                message: `Confirm password did not match`,
                duration: 3,
            })
            return;
        }

        setLoading(true);

        // validateEmail();
        // validatePassword();
        // validatePasswordMatch();
        // validatePhone();

        // console.log(passwordMatchError);

        const hasErrors = emailError || passwordError || passwordMatchError || phoneError;

        // console.log(hasErrors);

        if (hasErrors) {
            setBotState('sad');
            setLoading(false);
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
                        profilePicUrl: "",
                        events: {
                            watchlist: [],
                            registered: [],
                        },
                        invitations: [],
                        notifications: [],
                        referralCode: "",
                    });

                    await sendEmailVerification(auth.currentUser).then(() => {
                        setShowEmailVerificationModal(true);
                        // router.push("/emailVerification");
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

                    // setShowEmailVerificationModal(true);
                    setLoading(false);
                })
                .catch((err) => {
                    // console.log(err);
                    notification['error']({
                        message: `Email already registered`,
                        duration: 3
                    })

                    setLoading(false);
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
            <div className="bg-gradient-to-r from-[#34524e] to-[#000000]">
                <div className='bg-[url(/images/about/about.png)] flex items-center justify-center  min-h-screen '>
                    <div className="relative min-h-[60vh] flex flex-row m-6 space-y-8 bg-gradient-to-r from-[#ffffff2a] to-[#ffffff62] shadow-2xl rounded-2xl md:space-y-0 z-80">
                        <div className="flex flex-col justify-center p-8 md:p-14">
                            <h1 className="mb-3 login-h1 text-[40px] sm:text-[42px] md:text-[45px] lg:text-[50px]">Welcome Friend!</h1>
                            <span className="font-light text-white mb-8 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                                Let’s get started.
                            </span>
                            {step === 1 && (
                                <div>
                                    <div className="relative py-4">
                                        <input type="text" value={name} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => setName(e.target.value)} />
                                        <label htmlFor="username" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Full Name</label>
                                    </div>
                                    <div className="relative py-4">
                                        <input type="text" value={email} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setEmail(e.target.value);}} />
                                        <label htmlFor="username" className="absolute left-0 top-1 text-[#f5c9ff] cursor-text text-xs peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:-top-3 transition-all">Email</label>
                                        {emailError && <span className="text-red-500 text-xs">*Invalid Email Address</span>}
                                    </div>

                                    <div className="relative py-4">
                                        <input type="number" value={phone} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setPhone(e.target.value);}} />
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
                                        <input type="password" value={password} className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent text-white" autoComplete='off' placeholder='' onChange={(e) => { setPassword(e.target.value);}} />
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
                                        {loading ? <BeatLoader color='#ffffff' /> : "Sign Up"}
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

                        <EmailVerification isVisible={showEmailVerificationModal} />
                    </div >
                </div>

            </div >
        </>

    );
}
