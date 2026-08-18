
import {signOut} from "firebase/auth";
import { auth } from "../firebase";
import {useNavigate} from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
const user = useSelector((state)=>state.user);
console.log("user in header",user);

const navigate = useNavigate();

  const handleSignOut = () => {
// sign out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        navigate("/browse");
      });
  }

  return (
    <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
      <img
        className="w-40 mt-4 bg-gradient-to-b m-4 py-4 from-gray-900 to-transparent"
        alt="Netflix Logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      <div className="flex items-center py-1 px-4">
        <div className="flex items-center px-4 py-1 rounded-md">
          <span>{user?.userName}</span>
          <img className="px-4 py-1" src={user?.userPhoto || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYWkg9Nh_jRfYTDqkp_jTniVGjaCqmRZ03ooEoyIMxg&s=10"} alt="UserPhoto" className="w-30 h-10 rounded-full ml-2" />
        </div>
       
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
