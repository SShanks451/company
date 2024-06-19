import { GoHomeFill } from "react-icons/go";
import { MdMessage } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { MdSignpost } from "react-icons/md";

function Profile() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Dashbord />
      <Maincontent />
    </div>
  );
}

function Dashbord() {
  return (
    <header className="bg-white text-black p-4 shadow">
      <div className="container mx-auto flex items-center">
        <h1 className="text-xl font-bold ml-10">My Dashboard</h1>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8">
            <li className="flex flex-col items-center">
              <a href="#Home" className="flex flex-col items-center text-center hover:text-blue-500">
                <GoHomeFill className="text-2xl mb-1" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li className="flex flex-col items-center">
              <a href="#message" className="flex flex-col items-center text-center hover:text-blue-500">
                <MdMessage className="text-2xl mb-1" />
                <span className="text-sm">Messaging</span>
              </a>
            </li>
            <li className="flex flex-col items-center">
              <a href="#notifications" className="flex flex-col items-center text-center hover:text-blue-500">
                <MdNotificationsActive className="text-2xl mb-1" />
                <span className="text-sm">Notifications</span>
              </a>
            </li>
            <li className="flex flex-col items-center">
              <a href="#endorsements" className="flex flex-col items-center text-center hover:text-blue-500">
                <MdSignpost className="text-2xl mb-1" />
                <span className="text-sm">Endorsements</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Maincontent() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-4">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col justify-center items-center lg:items-start px-4 py-8">
        {/* Big Name */}
        <h2 className="text-3xl font-bold mb-4">John Doe</h2>
        {/* About Section */}
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada, eros sit amet mattis rutrum, dui est accumsan ex, non dignissim
          nulla nunc eget ligula.
        </p>
        {/* Followers Section */}
        <div className="flex items-center mb-4 space-x-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 018 8c0 1.966-.708 3.787-1.882 5.195l-.135.155a1 1 0 01-1.47 0l-.135-.155C10.708 13.787 10 11.966 10 10c0-2.36.634-4.557 1.747-6.405A1 1 0 0112.5 3.5L12.6 3.6A1 1 0 0114 4c0 .833-.083 1.659-.247 2.473A7.999 7.999 0 0118 10a8 8 0 01-8 8 8 8 0 110-16zm-2.377 5.648l.707.707L5.26 10l3.07 3.646-.707.707L3.845 10l3.077-3.646zm9.81.707l.707-.707L16.154 10l-3.08 3.646-.707-.707L15.846 10l-3.078-3.646.707-.707L16.153 10z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">10k Followers</span>
          </div>
          {/* Add more social media icons and follower counts as needed */}
        </div>
        {/* Scroll to Section */}
        <div className="flex items-center justify-center cursor-pointer text-blue-500 hover:opacity-75">
          <p>Scroll down</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 12a.997.997 0 01-.707-.293l-4-4a.999.999 0 111.414-1.414L10 9.586l3.293-3.293a.999.999 0 111.414 1.414l-4 4A.997.997 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Right Section */}
      <div className="lg:w-1/3 flex justify-center items-center">
        <div className="w-96 h-96 bg-gray-300 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x400" // Adjusted placeholder size for clarity
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
