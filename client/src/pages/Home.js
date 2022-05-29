import React from 'react';


const Home = () => {

    return (
        <main className='min-h-screen min-w-screen flex flex-col text-[#BE95FA] bg-[#212121]'>
            <section className="flex flex-wrap flex-grow items-center justify-center bg-[#212121]">
                <div className="flex flex-col gap-9 m-4">

                    <h1 className="mt-12 mb-4 text-[#16AC97] text-center text-5xl">Late Night Eats</h1>

                    <div className="icons flex flex-col items-center">
                        <a className="flex mb-8" href="">
                            <i className="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
                            <i className="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
                        </a>
                    </div>

                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="text-center form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-[#16AC97] bg-white bg-clip-padding border border-solid border-[#16AC97] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#16AC97] focus:outline-none" placeholder="Find Eats Now!" aria-label="Search" aria-describedby="button-addon2" />
                    </div>


                    <button type="button" className="inline-block px-6 py-2.5 bg-[#BE95FA] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#16AC97] hover:shadow-lg focus:bg-[#16AC97] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#16AC97] active:shadow-lg transition duration-150 ease-in-out">

                        <i className="fa-solid fa-magnifying-glass"></i>
                        <h3>Search</h3>
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;
