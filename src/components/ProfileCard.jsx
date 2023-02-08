import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ data }) {
  const [profileId, SetProfileId] = useState('');

  //   const fetchData = async () => {
  //        axios
  //          .post(
  //            'https://us-central1-oceanfriends-71bae.cloudfunctions.net/getAccessProfiles',
  //            {
  //              data: {
  //                userId: 'sr4Z21Tqg0VupvjEDq5Bg51gosg2',
  //              },
  //            }
  //          )
  //          .then((response) => {
  //            console.log(response.data.result.result);
  //            setProfiles(response.data.result.result);
  //          });
  //        console.log(profiles);
  //      };
  //      useEffect(() => {
  //        fetchData();
  //      }, []);

  return (
    <div className=" mt-8 w-full flex flex-wrap gap-4 justify-center">
      {data.map((profile, i) => (
        <div
          className="name h-48 w-auto p-4  font-bold  bg-cyan-200 border-2 border-black "
          key={i}
        >
          <div className="top-container  flex flex-col items-left">
            <div className="name ">
              Name: <span className="font-normal">{profile.name}</span>
            </div>
            <div className="dob ">
              DoB:
              <span className="font-normal">{profile.dob}</span>
            </div>
            <div className="user">
              User Data: <span className="font-normal">{profile.user}</span>
            </div>
            {profile.active === true ? (
              <div className="active">
                Status:<span className="font-normal">🟢Active</span>
              </div>
            ) : (
              <div className="inactive">
                : Status:
                <span className="font-normal">🔴In Active</span>
              </div>
            )}
          </div>
          <Link
            className="view  flex justify-center m-2 p-2 bg-red-300"
            // onClick={(profile) => SetProfileId(profile.profileId)}
            to={`/meals/${profile.profileId}`}
          >
            {' '}
            view
          </Link>
          {console.log(profileId)}
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
