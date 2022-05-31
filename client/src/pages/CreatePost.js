import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RESTAURANT, UPLOAD_FILE } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [userFormData, setUserFormData] = useState({ name: '', address: '', description: '', foodType: '' });
    const navigate = useNavigate();
    const [addRestaurant] = useMutation(ADD_RESTAURANT);
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    });

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        uploadFile ({variables: {file}})
    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserFormData({
            ...userFormData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const restaurantData = {
            name: userFormData.name,
            address: userFormData.address,
            description: userFormData.description,
            foodType: userFormData.foodType
        }

        try {
            await addRestaurant({
                variables:
                    { content: restaurantData }
            });
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({ name: '', address: '', description: '', foodType: '' });
        navigate("/");
    };





    return (
        <main className="min-h-screen min-w-screen flex flex-col text-[#BE95FA]">


            <section className="flex flex-wrap flex-grow justify-center bg-[#212121]">
                <div className="flex flex-col items-center gap-2">

                    <h1 className="mt-6 text-[#16AC97] text-center text-3xl">Late Night Eats</h1>
                    <div className="icons flex flex-col items-center">
                        <span className="flex mb-8" href="">
                            <i className="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
                            <i className="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
                        </span>

                        <form method="post" action="/create" encType="multipart/form-data" onSubmit={handleFormSubmit}>
                            <input type="file" id="post-images" name="image" onChange={handleUpload} className="mb-8 mt-32" />

                            <h3 className="text-center">Name</h3>
                            <input name="name" id="Name" type="text"  onChange={handleChange} value={userFormData.name} placeholder="Enter the name of the place" className="rounded-full text-center w-full mb-8 text-black" />

                            <h3 className="text-center">Address</h3>
                            <input name="address" id="address" type="text"  onChange={handleChange} value={userFormData.address} placeholder="Enter the address" className="rounded-full text-center w-full mb-8 text-black" />

                            <h3 className="text-center">Description</h3>
                            <input name="description" id="description" type="text" onChange={handleChange} value={userFormData.description}  placeholder="Describe the place" className="rounded-full text-center w-full mb-8 text-black" />

                            <h3 className="text-center">Food Type</h3>
                            <select name="foodType" id="foodType" type="text" onChange={handleChange} value={userFormData.foodType}  placeholder="Enter type of food" className="rounded-full text-center w-full mb-4 text-black" >
                            <option value="">Enter Food Type</option>
                            <option value="American">American</option>
                            <option value="Barbeque">Barbeque</option>
                            <option value="Chinese">Chinese</option>
                            <option value="French">French</option>
                            <option value="Burgers">Burgers</option>
                            <option value="Indian">Indian</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Steak">Steak</option>
                            <option value="Sushi">Sushi</option>
                            <option value="Thai">Thai</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Vegetarian">Vegetarian</option>


                            </select>
                            <button type="submit" className="inline-block px-6 py-2.5 bg-[#BE95FA] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#16AC97] hover:shadow-lg focus:bg-[#16AC97] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#16AC97] active:shadow-lg transition duration-150 ease-in-out">

                                <i className="fa-brands fa-creative-commons-share fa-lg"></i>
                                <h3>Click to Share</h3>
                            </button>
                        </form>

                        {/* <button type="button" className="inline-block px-6 py-2.5 bg-[#BE95FA] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#16AC97] hover:shadow-lg focus:bg-[#16AC97] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#16AC97] active:shadow-lg transition duration-150 ease-in-out">

                            <i className="fa-brands fa-creative-commons-share fa-lg"></i>
                            <h3>Click to Share</h3>
                        </button> */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CreatePost;
