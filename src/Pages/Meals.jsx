import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Meals() {
  const { id } = useParams();
  console.log(id);
  const fetchData = async () => {
    axios
      .post(
        'https://us-central1-oceanfriends-71bae.cloudfunctions.net/get2daysmeal',
        {
          data: {
            profileId: id,
          },
        }
      )
      .then((response) => {
        console.log(response);
        //   setProfiles(response.data.result.result);
      });
    //   console.log(profiles);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div className="container flex justify-center ">404</div>;
}

export default Meals;
