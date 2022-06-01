import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { GET_RESTAURANT, GET_ME } from '../utils/queries';
import { DELETE_RESTAURANT} from '../utils/mutations';
import Auth from '../utils/auth';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { useNavigate } from 'react-router-dom';
// import DeleteRestaurant from '../components/DeleteRestaurantBtn';

const SinglePost = (props) => {
  const { id: rId } = useParams();
  const [deleteRestaurant] = useMutation(DELETE_RESTAURANT);
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_RESTAURANT, {
    variables: { id: rId },
  });

  const {data: dataMe } = useQuery(GET_ME);

  const me = dataMe?.me._id || '';

  
  const restaurant = data?.restaurant || {};
  
  console.log("Rest:", restaurant._id);

  const delRest = async (event) => {
      const foodId= restaurant._id;

      console.log("RestId:", foodId);
    event.preventDefault();
    try {
        await deleteRestaurant({
            variables: {restId: foodId}
    });
    } catch (e) {
    console.error(e);
        }

navigate("/");
};

  

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
                  {/* IF YOUR RESTAURANT, DELETE BTN HERE */}
                  {Auth.loggedIn() && (me == restaurant.userId) &&
                    <button className='ftblk' onClick={delRest}>
                        DELETE
                    </button>
                  }

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

                {/* {restaurant.commentCount > 0 && <CommentList comments={restaurant.comments} />} */}
                <CommentList comments={restaurant.comments} />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SinglePost;