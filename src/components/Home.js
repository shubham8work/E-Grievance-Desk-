import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/register');
  };


  return (
    <div>
     <div class="flex justify-between p-10">
        <div class="flex-col">
            <div class="text-3xl font-bold text-start ">GNDEC Online 
            Grievance Redressal Portal</div>
            <div class="text-start text mt-6">Easily submit and track your grievances,get timely updates,and resolutions our goal is to make sure 
            every issue is addressed,creating a better and supportive experience for students at campus.</div>
        </div>
        <div>
          <img src="homeimg.jpg" class="scale-125"></img>
        </div>
     </div>
     <button class="bg-red-500 text-white font-bold py-2 px-4 rounded-lg" onClick={goToAboutPage}>Get Started </button>
    </div>
  )
}

export default Home
