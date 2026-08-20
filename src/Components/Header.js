import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearch } from "../Utils/gptSearchSlice";
import { SUPPORTED_LANGUAGE } from "../Constants";
import {changeLanguage} from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLang= useSelector((store)=> store.configLang.lang)
   const showOnlyWhenGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  const handleSignOut = () => {
    // sign out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: user.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unscuscribe when comeponets unMounts
    return () => unsubscribe();
  }, []);

  const toggleGptSearchbtn = () => {
    dispatch(toggleGptSearch());
  };

  const handleLagaugeChange = (e) =>{
    dispatch(dispatch(changeLanguage(e.target.value)))
  }


  return (
    <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
      <img
        className="w-40 mt-4 bg-gradient-to-b m-4 py-4 from-gray-900 to-transparent"
        alt="Netflix Logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user && (
        <div className="flex items-center py-1 px-4">
          <div className="flex items-center px-4 py-1 rounded-md">
           { showOnlyWhenGptSearch && <select className="p-2 m-2 rounded-lg"
            value={selectedLang}
             onChange={(e) =>handleLagaugeChange(e)}
            >
              {SUPPORTED_LANGUAGE.map((lang) => {
                return <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                  </option>;
              })}
            </select>}

            <button
              onClick={toggleGptSearchbtn}
              className="w-28 p-2 m-4 border rounded-lg text-white bg-purple-600"
            >
             {showOnlyWhenGptSearch ? "Homepage"  : "GPT Search"}
            </button>
            <span className="text-white">{user?.userName}</span>
            <img
              src={
                user?.userPhoto ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYWkg9Nh_jRfYTDqkp_jTniVGjaCqmRZ03ooEoyIMxg&s=10"
              }
              alt="UserPhoto"
              className="w-30 h-10 rounded-full ml-2 px-4 py-1"
            />
          </div>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
