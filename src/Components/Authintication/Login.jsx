import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const { LoginUser, load } = use(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = d => {
    d.preventDefault()
    navigate(location.state || '/')
    const email = d.target.email.value;
    const password = d.target.password.value;
    LoginUser(email, password).then(result => {
      console.log(result)
    }).catch(e => {
      console.log(e)
    }
    )
  }
  if (load) {
    return <span className='loading loading-infinity loading-xl'></span>
  }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="space-y-4">
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div className='flex  flex-col'>
              <p className="link link-hover">Forgot password?</p>
              <p className="">Don't account ? <Link to={"/sign-up"} className='link link-hover text-green-500'>sign Up</Link></p>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;