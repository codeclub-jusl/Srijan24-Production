import Head from 'next/head';
export default function SignUp() {
    return (
        <html>
            <head>
                <script src='js/script.js' defer />
            </head>
            <body>
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#6100ff] to-[#ff0099]">

                    <div
                        className="relative h-[80vh] flex flex-col m-6 space-y-8 bg-slate-800 bg-opacity-20 shadow-2xl rounded-2xl md:flex-row md:space-y-0"
                    >
                        <div className="flex flex-col justify-center p-8 md:p-14">
                            <span className="mb-3 text-4xl font-bold">Welcome back</span>
                            <span className="font-light text-white mb-8">
                                Welcom back! Please enter your details
                            </span>
                            <div className="relative py-4">
                                <input type="text" id="username" className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' />
                                <label htmlFor="username" className="absolute left-0 top-1 text-white cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all">Email</label>
                            </div>
                            <div className="relative py-4">
                                <input type="password" id="username" className=" w-full border-b py-1 focus:outline-none focus:border-b-2 transition-colors peer bg-transparent" autoComplete='off' />
                                <label htmlFor="username" className="absolute left-0 top-1 text-white cursor-text peer-focus:text-xs peer-focus:-top-3 transition-all">Password</label>
                            </div>
                            <div className="flex justify-between w-full py-4">
                                <div className="mr-24">
                                    <input type="checkbox" name="ch" id="ch" className="mr-2" />
                                    <span className="text-md">Remember for 30 days</span>
                                </div>
                                <span className="font-bold text-md">Forgot password</span>
                            </div>
                            <button
                                className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                            >
                                Sign in
                            </button>
                            <button
                                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                            >
                                <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
                                Sign in with Google
                            </button>
                            <div className="text-center text-gray-400">
                                Dont'have an account?
                                <span className="font-bold text-black">Sign up for free</span>
                            </div>
                        </div>
                        <div className="relative">
                            <canvas id='canvas1' className='border-white w-full h-full'></canvas>
                        </div>
                    </div>
                </div>
            </body>
        </html>


    );
}
