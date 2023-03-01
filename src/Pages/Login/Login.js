import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { singIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();

    console.log(token, 'tttttttttttttttt')


    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        singIn(data.email, data.password)
            .then(result => {
                const user = result;
                console.log(user)
                setLoginUserEmail(data.email);
            })
            .catch(e => {
                console.log(e.message)
                setLoginError(e.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"  {...register("email", {
                            required: "Email Address is required"
                        })}
                            className="input input-bordered w-full max-w-xl" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"  {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 character' }
                        })}
                            className="input input-bordered w-full max-w-xl" />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </div>
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to="/singup">Create new account</Link></p>
                <div className='divider'>OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>


            </div>
        </div>
    );
};

export default Login;