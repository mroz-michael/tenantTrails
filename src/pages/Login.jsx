import '../styles/forms.css';
import {useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormInput from '../components/FormInput';
import { users } from '../data/mockData';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    const { login } = useAuth();
    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
    
        const user = users.find( user => user.email == email && user.password == password);

        if (user) {
            login({email: user.email, fullName: user.fullName});
            navigate("/dashboard");
        } else {
            setErrors({invalid: "Invalid Credentials"});
        }

    
    }

    function validate() {
        const e = {};

        if (!email.trim()) {
            e.email = "Email is Required";
        }

        if (!password.trim()) {
            e.password = "Password is Required";
        }


        return e;
    }


    return(

        <div className="formContainer">
            <form className='form' onSubmit={handleSubmit}>
                <header>
                    <h3 className='formTitle'>TenantTrails</h3>
                    <p className='formDescription'>See what past tenants had to say before you sign.</p>
                </header>
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
                    placeholder="Your password"
                    error={errors.password}
                />
                <button className='submitButton' type='submit'>Sign In</button>
                {errors.invalid && <p className='errorMessage'>{errors.invalid}</p>}
                <p style={{fontSize: "smaller"}}>Don't have an account? <Link id='signUpRedirect' to='/signUp'>Create one</Link></p>

                <p style={{background: "lightblue", marginTop: '15px'}}>
                    Demo data: mroz@example.com 
                    password: pw1234
                </p>
            </form>
        </div>
    )
}

export default Login;