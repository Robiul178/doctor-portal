import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Singup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signupError, setSingupError] = useState('')
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }


    const handleSingip = data => {
        console.log(data);
        setSingupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result;
                console.log(user);
                toast('User created successfully.')
                const userInfo = {
                    displayNmae: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })

            })
            .catch(e => {
                setSingupError(e.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        //BackEnd a pathacchi

        fetch('https://doctorportal-ten.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);

            })
    }




    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-xl text-center'>Sing UP</h2>
                <form onSubmit={handleSubmit(handleSingip)}>

                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xl" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' value='Sing UP' type="submit" />
                </form>
                <p><Link className='text-secondary' to="/login">Alredy have an account?</Link></p>
                <div className='divider'>OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
                {signupError && <p className='text-red-600'>{signupError}</p>}

            </div>
        </div >
    );
};

export default Singup;