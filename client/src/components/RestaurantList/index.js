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
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <span href="#!">
                <img className="card-image rounded-t-lg" src="" alt=""/>
              </span>
              <div className="text-center p-6">
                <h5 className="card-title text-[#16AC97] text-xl font-medium mb-2">
                  {restaurant.name}
                </h5>
 
                <div className="text-center">

                  <p className="text-xs text-black mb-2">{restaurant.address}
                  </p>
                  <p className="text-xs text-black">(Click below to see all comments or add your own)
                  </p>

                  <button className="editComment">
                    <i className="mt-2 text-[#BE95FA] hover:text-[#16AC97] fa-solid fa-pen-to-square fa-2x"></i>
                  </button>

                  <div className="totalVotes flex justify-around">

                    <div>
                      <h1 className="text-black upvote-number">500</h1>
                        <button>
                            <a href="#">
                              <i className="upvotes text-[#16AC97] fa-2x fa-regular fa-thumbs-up fa-hover-hidden"></i>
                              <i className="upvotes-solid text-[#16AC97] fa-2x fa-solid fa-thumbs-up fa-hover-show"></i>
                            </a>
                        </button>
                    </div>
                      
                      <div>
                        <h1 className="text-black downvote-number">40</h1>
                          <button> 
                              <a href="#">
                                <i className="downvotes text-[#FF0000] fa-2x fa-regular fa-thumbs-down fa-hover-hidden"></i>
                                <i className="downvotes-solid text-[#FF0000] fa-2x fa-solid fa-thumbs-down fa-hover-show"></i>
                              </a>
                          </button>
                      </div>
                  </div>

                </div>   
                           
              </div>
            </div>
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