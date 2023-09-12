import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LoaderIcon, toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctorportal-ten.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        // console.log(data.image[0])
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImgData => {
                if (ImgData.success) {
                    console.log(ImgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: ImgData.data.url,
                        education: data.education,

                    }

                    //save Doctor information
                    fetch('https://doctorportal-ten.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name}is added succesfuly`)
                            Navigate('/dashboard/managedoctors')
                        })
                }
            })

    }


    if (isLoading) {
        return <LoaderIcon></LoaderIcon>
    }


    return (
        <div className='h-[800px] '>
            <div>
                <h2 className='text-3xl font-bold'>Add A Doctor</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xl" />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Education</span></label>
                        <input type="text" {...register("education")} className="input input-bordered w-full max-w-xl" />
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

                    <div className="form-control w-full max-w-xl">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("img", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xl" />
                        {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Specality</span>
                        </label>
                        <select
                            {...register("specialty")}
                            className="select input-bordered">
                            <option disabled selected>Please select</option>
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                    </div>

                    <input className='btn btn-accent w-full max-w-xl' value='ADD A DOCTOR' type="submit" />
                </form>

            </div>
        </div >
    );
};

export default AddDoctor;