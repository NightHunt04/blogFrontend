import { useEffect, useState } from 'react'
import { useHeroContext } from '../../context/HeroContext'

function SignUp() {
    const { isSignUp, toggleIsSignUp } = useHeroContext()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errInPassword, setErrInPassword] = useState(false)
    const [errInEmail, setErrInEmail] = useState(false)
    const [errInUsername, setErrInUsername] = useState(false)
    const [errAllFields, setErrAllFiels] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev)
    }

    const removeErrs = () => {
        setErrAllFiels(false)
        setErrInUsername(false)
        setErrInEmail(false)
        setErrInPassword(false)
    }

    const handleClear = () => {
        removeErrs()
        setEmail('')
        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }

    // submit api should be called below 
    const handleSubmit = () => {
        removeErrs()

        if(email !== '' && username !== '' && password !== '' && confirmPassword !== '') {
            if(password !== confirmPassword)
                return setErrInPassword(true)
        } else   
            setErrAllFiels(true)
    }

    return (
        <div className={`${isSignUp ? 'absolute' : 'hidden'} text-sm 2xl:text-lg px-5 py-6 signUpPopUp w-9/12 2xl:w-[690px] flex flex-col items-start justify-center shadow-xl rounded-lg border-[1px] border-[#f2f2f2] top-[140px] 2xl:top-[170px] z-30 bg-inherit`}>
            <div className="absolute right-3 top-2">
                <button className="cancelSidePanel hover:opacity-65" onClick={toggleIsSignUp
                }>
                    <i className="fa-solid fa-xmark opacity-85"></i>
                </button>
            </div>

            <div className="flex items-start justify-center gap-2 2xl:gap-3">
                <i className="mt-2 2xl:mt-3 fa-solid fa-user-plus"></i>
                <div className="flex flex-col items-start justify-center">
                    <p className="2xl:text-xl font-semibold">Signup</p>
                    <p className="text-xs 2xl:mt-[3px] 2xl:text-[16px] opacity-65">Fill the below instructions carefully</p>
                </div>
            </div>

            <div className="mt-5 2xl:mt-8 ml-5 2xl:ml-8 flex flex-col items-start w-full justify-center gap-[3px]">
                <p className="font-semibold text-xs 2xl:text-[16px]">Email</p>

                {errInEmail && <p className='text-[10px] 2xl:text-[13px] text-[#ff0a0a]'>Email already in use!</p>}

                <input 
                    type="email"
                    id='email'
                    className={`border-[1px] text-[13px] 2xl:text-[15px] 2xl:placeholder-shown:text-[15px] ${errInEmail ? 'border-[#ff0707]' : 'border-[#e4e4e4]'} focus:border-green_border_ternary outline-none rounded-lg px-3 py-2 w-[85%] 2xl:w-9/12`} 
                    placeholder="eg., admin@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && document.getElementById('username').focus()}/>
            </div>

            <div className="mt-5 2xl:mt-8 ml-5 2xl:ml-8 flex flex-col items-start w-full justify-center gap-[3px]">
                <p className="font-semibold text-xs 2xl:text-[16px]">Username</p>

                {errInUsername && <p className='text-[10px] 2xl:text-[13px] text-[#ff0a0a]'>Username already in use!</p>}

                <input 
                    type="text"
                    id='username'
                    className={`border-[1px] text-[13px] 2xl:text-[15px] 2xl:placeholder-shown:text-[15px] ${errInUsername ? 'border-[#ff0707]' : 'border-[#e4e4e4]'} focus:border-green_border_ternary outline-none rounded-lg px-3 py-2 w-[85%] 2xl:w-9/12`} 
                    placeholder="eg., MannCarlsen037"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && document.getElementById('password').focus()}/>
            </div>

            <div className="mt-5 2xl:mt-8 ml-5 2xl:ml-8 flex flex-col items-start w-full justify-center gap-[3px]">
                <p className="font-semibold text-xs 2xl:text-[16px]">Set password</p>

                {errInPassword && <p className='text-[10px] 2xl:text-[13px] text-[#ff0a0a]'>Passwords does not match, confirm and verify.</p>}

                <div className="flex items-center justify-start gap-2 2xl:gap-3 w-full">
                <input 
                    type={`${showPassword ? 'text' : 'password'}`}
                    id='password'
                    className={`border-[1px] text-[13px] 2xl:text-[15px] 2xl:placeholder-shown:text-[15px] ${errInPassword ? 'border-[#ff0707]' : 'border-[#e4e4e4]'} focus:border-green_border_ternary outline-none rounded-lg px-3 py-2 w-[85%] 2xl:w-9/12`} 
                    placeholder="Any strong password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && document.getElementById('confirmPassword').focus()}/>
                <i onClick={handleShowPassword} className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} transition-all duration-300 opacity-70 hover:cursor-pointer`}></i>
                </div>
            </div>

            <div className="mt-5 2xl:mt-8 ml-5 2xl:ml-8 flex flex-col items-start w-full justify-center gap-[3px]">
                <p className="font-semibold text-xs 2xl:text-[16px]">Confirm password</p>
                
                {errInPassword && <p className='text-[10px] 2xl:text-[13px] text-[#ff0a0a]'>Passwords does not match, confirm and verify.</p>}
                
                <div className="flex items-center justify-start gap-2 2xl:gap-3 w-full">
                <input 
                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                    id='confirmPassword'
                    className={`border-[1px] text-[13px] 2xl:text-[15px] 2xl:placeholder-shown:text-[15px] ${errInPassword ? 'border-[#ff0707]' : 'border-[#e4e4e4]'} focus:border-green_border_ternary outline-none rounded-lg px-3 py-2 w-[85%] 2xl:w-9/12`} 
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}/>
                <i onClick={handleShowConfirmPassword} className={`fa-regular ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} opacity-70 hover:cursor-pointer`}></i>
                </div>
            </div>

            {errAllFields && <p className='text-[13px] text-[#ff0a0a] ml-[10px] mt-[30px] 2xl:ml-[30px] '>Input fields are empty, fill them out!</p>}

            <div className="flex items-center justify-start ml-[20px] 2xl:ml-[30px] gap-3 w-full mt-[46px] 2xl:mt-[60px]">
                <button onClick={handleSubmit} id='submit' className="shadow-md text-[12px] 2xl:text-[16px] border-[1px] border-[#22bb22] bg-[#22bb22] text-white outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300 font-medium">Submit</button>
                <button onClick={handleClear} className="shadow-md text-[12px] 2xl:text-[16px] border-[1px] border-[#e7e7e7] outline-none px-4 py-2 rounded-[30px] hover:border-[#22bb22] hover:-translate-y-[1px] transition-all duration-300">Clear</button>
            </div>
        </div>
    )
}

export default SignUp
