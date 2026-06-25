import '../styles/forms.css';
import {useState} from "react";
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const { signup } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const newUser = {name, email, password}
        try {
            await signup(name, email, password);
            navigate("/dashboard");
        } catch (err) {
            setErrors({ general: "Signup failed, please try again" });
        }
    }

    function validate() {
        const e = {};

        if (!name.trim()) {
            e.name = "Name is Required";
        }

        if (!email.trim()) {
            e.email = "Email is Required";
        }

        if (!password.trim()) {
            e.password = "Password is Required";
        }

        if (!confirmPassword.trim()) {
           e.confirmPassword = "Password Confirmation is Required";
        }

        if (!email.trim().includes("@") || !email.trim().includes(".")) {
            e.email = "Incorrect format, please use format: example@example.example";
        }

        if (password.trim().length < 6) {
            e.password = "Password must be at least 6 characters long.";
        }

        if (password.trim() !== confirmPassword.trim()) {
            e.confirmPassword = "Passwords do not match";
        }

        return e;
    }

    return(

        <div className="formContainer">
            <form className='form' onSubmit={handleSubmit}>
                <header>
                    <h3 className='formTitle'>TenantTrails</h3>
                    <p className='formDescription'> Create your account to submit reviews and comments.</p>
                </header>
                <FormInput  
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    error={errors.name}
                
                />
                <FormInput 
                    label="Email"
                    type="email"
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    error={errors.email}
                />
                <FormInput 
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    error={errors.password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    error={errors.confirmPassword}
                />
                <button className='submitButton' type='submit'>Create Account</button>
            </form>
        </div>
    )
}

export default Signup;