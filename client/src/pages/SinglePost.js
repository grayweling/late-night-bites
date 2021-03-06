import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { GET_RESTAURANT, GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import DeleteRestaurant from '../components/DeleteRestaurantBtn';

const SinglePost = (props) => {
  const { id: restaurantId } = useParams();
  console.log(restaurantId);

  const { loading, data } = useQuery(GET_RESTAURANT, {
    variables: { id: restaurantId },
  });

  const restaurant = data?.restaurant || {};

  const {data: dataMe } = useQuery(GET_ME);

  const me = dataMe?.me._id || '';

  console.log("Me:", me);
  

  console.log("restaurant:", restaurant.userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen min-w-screen flex flex-col gap-y-8">
      <section className="profile-picture flex flex-wrap flex-grow justify-evenly bg-[#212121]">
        <div className="">
          {/* Top title and image */}
          <h1 className="mt-12 mb-4 text-[#16AC97] text-center text-5xl">
            Late Night Eats
          </h1>

          <div className="icons flex flex-col items-center">
            <a className="flex mb-8" href="">
              <i className="fa-solid fa-moon fa-6x text-[#BE95FA]"></i>
              <i className="mt-4 items-center fa-solid fa-utensils fa-2xl text-[#BE95FA]"></i>
            </a>
          </div>

          {/* card section */}
          <article className="flex flex-wrap basis-1/2 gap-4 justify-center">
            <div className="card-div">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <span>
                  <img
                    className="card-image rounded-t-lg"
                    src="./assets/images/noodles.jpg"
                    alt=""
                  />
                </span>
                <div className="text-center p-6">
                  {/* Food place name and like button */}
                  <h5 className="location-name card-title text-[#16AC97] text-xl font-medium mb-2">
                    {restaurant.name}
                    <button className="save" id="saveBtn">
                      <i className="hover:text-[#BE95FA] fa-brands fa-gratipay"></i>
                    </button>
                  </h5>

                  {/* Food category, address, and description goes here */}
                  <h2 className="food-category text-black">
                    {restaurant.foodType}
                  </h2>
                  <h2 className="address text-black text-sm mb-2">
                    {restaurant.address}
                  </h2>
                  <h2 className="description text-[#BE95FA] mb-4">
                    {restaurant.description}
                  </h2>
                </div>
                {/* COMMENT FORM HERE */}
                {Auth.loggedIn() && (
                  <CommentForm restaurantId={restaurant._id} />
                )}
                {/* IF YOUR RESTAURANT, DELETE BTN HERE */}
                {Auth.loggedIn() && (me == restaurant.userId) &&
                  <DeleteRestaurant restaurantId={restaurant._id} />
                }
              </div>
              <CommentList comments={restaurant.comments} />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SinglePost;