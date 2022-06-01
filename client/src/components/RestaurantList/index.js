import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({restaurants}) => {
    // const { data } = useQuery(RESTAURANTS);
    console.log(restaurants);
    // const restaurants = {...searchedRestaurants};
    // console.log(restaurants[1]);
   return (
    <div className="flex justify-center items-center flex-wrap">
        {restaurants && restaurants.map(restaurant => (
            <div className="card-div m-4" key={restaurant._id}>
              <Link to={`/post/${restaurant._id}`}>
            <div className="flex flex-col justify-center w-80 h-64 rounded-lg shadow-lg bg-white max-w-sm">
            {/* <span className="flex justify-center">
              <img className="mt-4 text-center self-center w-14 h-14" src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html-3-768x510.jpg" alt=""/>
            </span> */}
              
              <div className="text-center px-2 pt-2 card-title text-[#16AC97] text-xl font-medium mb-2">
                    {restaurant.name}
              </div>
 
              <div className="text-center text-xs text-black mb-2">
                    <p className="">address: {restaurant.address}
                    </p>
                    <p className="">food type: {restaurant.foodType}
                    </p>
              </div>

              <div className="text-center">
                <p className="text-black self-center flex-shrink text-sm">comment:<br></br>{restaurant.comments.length}
                </p>
              </div>
                           
              </div>
            </Link>
          </div>))}
        </div>
        
        
   )

    
    // var restaurants = data.restaurants;
    // if (restaurants.length) {
    //         restaurants = restaurants.filter (restaurant => restaurant.foodType === category);
    // console.log(restaurants); 
    // }

    // const toggleModal = (image, i) => {
    //     setCurrentPhoto({ ...image, index: i });
    //     setIsModalOpen(!isModalOpen);
    // };

    // return (
    //     <div>
    //         {isModalOpen && (
    //             <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
    //         )}
    //         <div className="flex-row">
    //             {currentPhotos.map((image, i) => (
    //                 <img
    //                     src={require(`../../assets/small/${category}/${i}.jpg`)}
    //                     alt={image.name}
    //                     className="img-thumbnail mx-1"
    //                     onClick={() => toggleModal(image, i)}
    //                     key={image.name}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default RestaurantList;