import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../firebase.config'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility

    // State to save user form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    // Destructure form data
    const { name, email, password } = formData

    // Update form data state when user fills form
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }


    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            // Initialize Firebase Auth, create user with email and password
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: name
            })

            // Copy form data, modify it and add timestamp to populate user collection
            const formDataCopy = { ...formData }
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            // Add user to users collection
            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Sign Up!</p>
                </header>

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className='nameInput'
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                    />

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
                            type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password'
                            id='password' value={password}
                            onChange={onChange}
                        />

                        <img
                            src={visibilityIcon}
                            alt='show password'
                            className='showPassword'
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>

                    <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password?</Link>

                    <div className="signUpBar">
                        <p className="signUpText">Sign Up</p>
                        <button className="signUpButton">
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
                    Sign In Instead</Link>
            </div>
        </>
    )
}

export default SignUp