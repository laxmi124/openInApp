import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Login = ({ onLogin }) => {
  const { loginWithRedirect } = useAuth0();
  const [formValues, setFormValues] = useState({
    email: 'test@gmail.com',
    password: 'test@123',
  })
  const [formError, setFormError] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSignIn = () => {
    // eslint-disable-next-line
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      setFormError('Invalid Email Adress')
      return
    }
    if (formValues.password.length < 8) {
      setFormError('Password should have atleast 8 characters')
      return
    }
    setFormError(null)
    onLogin(true)
    // navigate('/home')
  }
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row bg-bgbody">
      <div className="lg:basis-1/2 bg-primary clip">
        <div className="ml-[5.5vw] my-[7.5vw] lg:ml-[4.2vw] lg:mt-[3.8vw]">
          <div className="flex gap-[11px] items-center">
            <img src='/companyLogo.svg' width={"80.1763rem"} height={"22.04rem"}/>
            <h1 className="lg:fixed left-[13.6vw] top-[45vh] text-[white] font-nunito text-[20px] font-semibold lg:font-montserrat lg:text-[72px] lg:font-bold lg:uppercase">
              Base
            </h1>
          </div>
        </div>
        <div className="fixed bottom-[13vw] lg:bottom-[4.7vw] flex left-[50%] translate-x-[-50%] lg:left-[10vw] lg:translate-x-0 items-center gap-4 lg:gap-8">
          <div className="hidden md:flex flex-row gap-4">
            <img src='/gitHub.svg' />
            <img src='/twitter.svg' />
            <img src='/linkedin.svg' />
            <img src='/discord.svg' />
          </div>

          <div className="md:hidden flex flex-row gap-4">
            <img src='mobileIcons/gitHub.svg' />
            <img src='mobileIcons/twitter.svg' />
            <img src='mobileIcons/linkedin.svg' />
            <img src='mobileIcons/discord.svg' />
            </div>
        </div>
      </div>
      <div className="lg:basis-1/2 flex items-center justify-center lg:justify-normal">
        <div className="flex flex-col lg:gap-[2vw] lg:w-[30vw] lg:ml-[6.5vw]">
          <div className="ml-6 lg:ml-0 m-7 lg:m-0">
            <h2 className="font-bold font-montserrat text-[24px] lg:text-[36px]">
              Sign In
            </h2>
            <p className="font-lato text-[12px] lg:text-[16px]">
              Sign in to your account
            </p>
          </div>
          <div className="flex gap-7 mb-7 lg:mb-0">
            <div className="bg-[white] flex items-center gap-[11px] px-[21px] rounded-[10px] cursor-pointer" onClick={loginWithRedirect}>
               <img src="/google.svg"/>
              <p className="font-montserrat text-[10px] lg:text-[12px] mt-[9px] mb-[8px]">
                Sign in with Google
              </p>
            </div>
            <div className="bg-[white] flex items-center gap-[11px] px-[21px] rounded-[10px] cursor-pointer">
              <img src="/apple.svg"/>
              <p className="font-montserrat text-[10px] lg:text-[12px] mt-[9px] mb-[8px]">
                Sign in with Apple
              </p>
            </div>
          </div>
          <div className="bg-[white] flex flex-col p-[33px] gap-[22px]">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-lato mb-[11px]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formValues.email}
                className="bg-bginput h-11 rounded-[10px] font-lato px-4 focus:bg-bgfocus focus-visible:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-lato mb-[11px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formValues.password}
                className="bg-bginput h-11 rounded-[10px] font-lato px-4 focus:bg-bgfocus focus-visible:outline-none"
              />
            </div>
            {formError && (
              <p className="text-textwarn font-lato">{formError}</p>
            )}
            <p className="font-lato text-link cursor-pointer">
              Forgot password?
            </p>
            <button
              className="bg-primary h-11 rounded-[10px] font-bold font-montserrat text-[white]"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 lg:mt-0">
            <p className="font-lato text-center">
              Don’t have an account?{' '}
              <span className="text-link block lg:inline mt-4 cursor-pointer">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login