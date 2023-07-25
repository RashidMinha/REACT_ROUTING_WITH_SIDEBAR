import React from "react";
import useSearchParams from "../../Helpers/Hooks/useSearchParams";
import { Link } from "react-router-dom";

const Profile = () => {
  const useParams = useSearchParams();

  return (
    <>
      <div>
        Profile
        <Link >
            test
        </Link>
      </div>
    </>
  );
};

export default Profile;
