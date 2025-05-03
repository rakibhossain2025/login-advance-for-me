import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const SignUp = () => {
  const { createUser } = use(AuthContext)

  const handleSignup = d => {
    d.preventDefault()
    // const name = d.target.name.value;
    const email = d.target.email.value;
    const password = d.target.password.value;
    createUser(email, password).then(result => {
      console.log(result)
    }).catch(e => { console.log(e) })

  }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignup} className="space-y-4">
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div className='flex flex-col'>
              <p className="link link-hover">Forgot password?</p>
              <p>already account ? <Link to={"/login"} className='link link-hover text-green-500'>login</Link></p>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;