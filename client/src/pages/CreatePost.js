import React from 'react';

const CreatePost = () => {

    return (
        <main class="min-h-screen min-w-screen flex flex-col text-[#BE95FA]">


            <section class="flex flex-wrap flex-grow justify-center bg-[#212121]">
                <div class="flex flex-col items-center gap-2">

                    <h1 class="mt-6 text-[#16AC97] text-center text-3xl">Late Night Eats</h1>
                    <div class="icons flex flex-col items-center">
                        <a class="flex mb-8" href="">
                            <i class="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
                            <i class="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
                        </a>

                        <form method="post" action="/create" enctype="multipart/form-data">
                            <input type="file" id="post-images" name="image" class="mb-8 mt-32" />

                            <h3 class="text-center">Location</h3>
                            <input name="" id="" type="text" autofocus="true" placeholder="Please Enter Location" class="rounded-full text-center w-full mb-8 text-black" />

                            <h3 class="text-center">Address</h3>
                            <input name="" id="" type="text" autofocus="true" placeholder="Enter Food Category" class="rounded-full text-center w-full mb-8 text-black" />

                            <h3 class="text-center">Description</h3>
                            <input name="" id="" type="text" autofocus="true" placeholder="Enter Food Category" class="rounded-full text-center w-full mb-4 text-black" />

                            <input type="submit" value="" />
                        </form>

                        <button type="button" class="inline-block px-6 py-2.5 bg-[#BE95FA] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#16AC97] hover:shadow-lg focus:bg-[#16AC97] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#16AC97] active:shadow-lg transition duration-150 ease-in-out">

                            <i class="fa-brands fa-creative-commons-share fa-lg"></i>
                            <h3>Click to Share</h3>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreatePost;
