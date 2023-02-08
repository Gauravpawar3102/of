import React, { useContext, useEffect, useState } from 'react';
import { GreetContext } from '../contexts/GreetContext';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';

function Greet() {
  const { name } = useContext(GreetContext);
  const [profiles, setProfiles] = useState([]);
  const fetchData = async () => {
    axios
      .post(
        'https://us-central1-oceanfriends-71bae.cloudfunctions.net/getAccessProfiles',
        {
          data: {
            userId: 'sr4Z21Tqg0VupvjEDq5Bg51gosg2',
          },
        }
      )
      .then((response) => {
        console.log(response.data.result.result);
        setProfiles(response.data.result.result);
      });
    console.log(profiles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Greet-container bg-blue-300 w-full h-full flex flex-col items-center">
      <div className="top-container text-3xl">Hi! {name} 🐟</div>
      <div className="bottom-container">
        <ProfileCard data={profiles} />
      </div>
    </div>
  );
}

export default Greet;
