import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLoginLogout() {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      // navigate("/login");
      router.push("/login");
    }

    if (!isLoggedIn) {
      // navigate("/login");
      router.push("/login");
    }
  }

  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    // Checking if the token exists in localStorage
    const token = localStorage.getItem("token"); // Replace 'token' with the key you use
    if (token) {
      setTokenExists(true);
    }
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white shadow-sm w-full">
        <div className="grid grid-cols-3 w-full justify-between items-center px-3">

          {/* Left Section: Logo and Searchbar */}
          <div className="items-center h-14 grid grid-cols-6 col-span-2">
            <a href="/" className="w-full">
              <img
                className="site-logo__img"
                style={{ height: "40px", width: "50px" }}
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="DEV Community"
              />
            </a>
            <div className="hidden md:flex border rounded-md w-full col-span-5">
              <form className="flex items-center relative w-full" role="search">
                <button className="p-2">
                  <img src="/search_icon.svg" alt="search_icon" />
                </button>
                <input
                  className="form-control w-full"
                  style={{ width: "20rem", maxWidth: "29rem" }}
                  type="search"
                  aria-label="Search"
                  placeholder="Search..."
                />
                <span className="absolute w-full justify-end right-2 text-gray-500 text-sm flex items-center gap-1">
                  Powered by
                  <img className="ml-1" style={{ height: ".75rem" }} src="/anglolia.svg" alt="Algolia_icon" />
                  Algolia
                </span>
              </form>
            </div>
          </div>

          {/* Right Section: Create Post, Bell Icon, Profile */}
          {tokenExists ? (
            <div className="flex items-center space-x-4 justify-end">
              <button
                type="button"
                className="bg-white text-blue-600 border border-blue-600 p-2 rounded-md font-bold hidden md:block text-sm"
              >
                <a href="#">Create Post</a>
              </button>
              <a href="#" className="hidden md:block">
                <img className="w-6 h-6" src="/bell_icon.svg" alt="bell_icon" />
              </a>
              <a href="#" className="flex items-center">
                <img
                  className="rounded-full"
                  style={{ width: "2.3rem" }}
                  alt="Profile"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ay3RvrXi--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/975225/4f71a4bb-4099-4ccf-9a89-f755a94da6b9.png"
                />
              </a>
            </div>

          ) : (
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-2 rounded-md hidden md:block text-sm"
              >
                <a href="/login">Log in</a>
              </button>
              <button
                type="button"
                className="bg-white text-blue-600 border border-blue-600 p-2 rounded-md font-bold  text-sm"
              >
                <a href="#">Create account</a>
              </button>
            </div>
          )}

        </div>
      </nav>
    </>



    // <nav className="w-full flex flex-row gap-4 border-b border-neutral-500 bg-slate-600/40">

    //   <div className="text-center w-full p-2" onClick={handleLoginLogout}>
    //     {isLoggedIn ? "Logout" : "Login"}
    //   </div>
    // </nav>
  );
}
