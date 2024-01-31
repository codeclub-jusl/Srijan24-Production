export default function LoginForm() {
  return (
    <div className="container p-4">
      <div className="flex-row main mt-5">

        {/* Sign Up Form */}
        <div className="col-md-6 p-5 hidden md:block" id="signUp">
          <h1 className="text-4xl text-center">Sign up</h1>
          <form className="flex justify-center mt-4">
            <div className="w-3/4">
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="input" id="email" />
              </div>
              <div className="form-group my-4">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" className="input" id="password" />
              </div>
              <button type="submit" className="btn-primary">Register</button>
              <div className="flex justify-between mt-5">
                <a className="text-blue-500" href="#" id="loginLink">Already have an Account ?</a>
              </div>
            </div>
          </form>
        </div>

        {/* Login Form */}
        <div className="col-md-6 p-5" id="login">
          <h1 className="text-4xl text-center">Login</h1>
          <form className="flex justify-center mt-4">
            <div className="w-3/4">
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="input" id="email" />
              </div>
              <div className="form-group my-4">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" className="input" id="password" />
              </div>
              <button type="submit" className="btn-primary">Login</button>
              <div className="flex justify-between mt-5">
                <a className="text-blue-500" href="#" id="registerLink">Create an Account ?</a>
                <a className="text-blue-500" href="#">Forget Password ?</a>
              </div>
            </div>
          </form>
        </div>
        
        {/* Overlay */}
        <div className="hidden md:block" id="overlay"></div>

      </div>
    </div>
  );
};

