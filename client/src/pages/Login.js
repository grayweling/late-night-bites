import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Navigate } from 'react-router-dom';


import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log({ formState });
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
            <Navigate to="/" />;
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };
    return (
        <main className="min-h-screen min-w-screen flex flex-col gap-y-8">


            <section className="profile-picture flex flex-wrap flex-grow justify-center bg-[#212121]">
                <div className="flex flex-col gap-9 m-4">
                    {/* <!-- Home Page Image --> */}
                    <h1 className="text-[#16AC97] text-center text-5xl">Late Night Eats</h1>
                    <div className="icons flex flex-col items-center">
                        <span className="flex mb-8" href="">
                            <i className="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
                            <i className="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
                        </span>
                        {/* <!-- Login page --> */}
                        <div className="self-center mx-auto">
                            <div
                                className="bg-white border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form className="space-y-12" action="#" onSubmit={handleFormSubmit}>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@mail.com"
                                            required=""
                                            value={formState.email}
                                            onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required=""
                                            value={formState.password}
                                            onChange={handleChange} />
                                    </div>

                                    <div className="">
                                        <div className="mb-8">
                                            <button type="submit" className="w-full text-white bg-[#BE95FA]  focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                        </div>

                                        {/* <div>
                                            <button type="submit" className="w-full text-white bg-white bg-[#16AC97] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Not Registered? Create account</button>
                                        </div> */}
                                    </div>
                                </form>

                                <div>
                                    <button type="submit" className="w-full text-white bg-white bg-[#16AC97] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Not Registered? Create account</button>
                                </div>
                                {error && <div className='ftblk'>Login failed</div>}

                            </div>
                        </div>
                    </div>
                    {/* <h1 className="text-xl text-center">(In order to post, like or comment. Please sign in or register a new account.)</h1> */}
                </div>
            </section>
        </main>
    );
};

export default Login;
