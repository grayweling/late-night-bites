import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({restaurants}) => {
    // const { data } = useQuery(RESTAURANTS);
    console.log(restaurants);
    // const restaurants = {...searchedRestaurants};
    // console.log(restaurants[1]);
   return (
    <div className="flex flex-wrap basis-1/2 gap-4 justify-center">
        {restaurants && restaurants.map(restaurant => (
            <div className="card-div" key={restaurant._id}>
              <Link to={`/post/${restaurant._id}`}>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <span >
                <img className="card-image rounded-t-lg" src="" alt=""/>
              </span>
              
              <div className="text-center p-6">
                <h5 className="card-title text-[#16AC97] text-xl font-medium mb-2">
                  {restaurant.name}
                </h5>
 
                <div className="text-center">

                  <p className="text-xs text-black mb-2">address: {restaurant.address}
                  </p>
                  <p className="text-xs text-black mb-2">food type: {restaurant.foodType}
                  </p>
                  <p className="text-xs text-black">comments: {restaurant.comments.length} 
                  </p>

                  {/* <button className="editComment">
                    <i className="mt-2 text-[#BE95FA] hover:text-[#16AC97] fa-solid fa-pen-to-square fa-2x"></i>
                  </button>

                  <div className="totalVotes flex justify-around">

                    <div>
                      <h1 className="text-black upvote-number">500</h1>
                        
                      </div>
                  </div> */}

                </div>   
                           
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