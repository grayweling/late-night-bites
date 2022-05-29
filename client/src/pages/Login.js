import React from 'react';

const Login = () => {

    return (
        <main class="min-h-screen min-w-screen flex flex-col gap-y-8">


            <section class="profile-picture flex flex-wrap flex-grow justify-center bg-[#212121]">
                <div class="flex flex-col gap-9 m-4">
                    {/* <!-- Home Page Image --> */}
                    <h1 class="text-[#16AC97] text-center text-5xl">Late Night Eats</h1>
                    <div class="icons flex flex-col items-center">
                        <a class="flex mb-8" href="">
                            <i class="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
                            <i class="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
                        </a>
                        {/* <!-- Login page --> */}
                        <div class="self-center mx-auto">
                            <div
                                class="bg-white border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form class="space-y-12" action="#">
                                    <div>
                                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@mail.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                    </div>

                                    <div class="">
                                        <div class="mb-8">
                                            <button type="submit" class="w-full text-white bg-[#BE95FA]  focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                        </div>

                                        <div>
                                            <button type="submit" class="w-full text-white bg-white bg-[#16AC97] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Not Registered? Create account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h1 class="text-xl text-center">(In order to post, like or comment. Please sign in or register a new account.)</h1>
                </div>
            </section>
        </main>
    );
};

export default Login;
