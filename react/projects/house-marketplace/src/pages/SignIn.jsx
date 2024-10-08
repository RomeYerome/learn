import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const auth = getAuth()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user)
                navigate('/')

        } catch (error) {
            toast.error('Bad User Credentials')
        }

    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcome Back!</p>
                </header>

                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className='emailInput'
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                    />

                    <div className="passwordInputDiv">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='passwordInput' placeholder='Password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                        />

                        <img
                            src={visibilityIcon}
                            alt='show password'
                            className='showPassword'
                            onClick={() => setShowPassword(!showPassword)} />
                    </div>

                    <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password?</Link>

                    <div className="signInBar">
                        <p className="signInText">Sign In</p>
                        <button className="signInButton">
                            <ArrowRightIcon
                                fill='#fff'
                                width='34px'
                                height='34px'
                            />
                        </button>
                    </div>
                </form>

                {/* Google OAuth */}
                <OAuth />

                <Link to='/sign-up' className='registerLink'>
                    Sign Up Instead</Link>
            </div>
        </>
    )
}

export default SignIn