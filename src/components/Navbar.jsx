// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { logo } from '../assets/home';
// import Container from './Container';
// import { useAuth } from '../AuthContext'; // Import useAuth hook

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logout } = useAuth(); // Access user and logout function from AuthContext

//   const handleMobileMenuToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMobileLinkClick = () => {
//     setIsOpen(false); // Close the mobile menu after a link is clicked
//   };

//   return (
//     <nav className="py-2 z-40">
//       <Container>
//         <div className="flex items-center justify-between h-16">
//           <div className="flex gap-4 items-center">
//             <img className="h-[80px] w-[80px]" src={logo} alt="Workflow" />
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <Link
//                   to="/"
//                   className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </Link>

//                 {/* Add Explore, About, and Contact links */}
//                 <Link
//                   to="/explore"
//                   className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Explore
//                 </Link>
//                 <Link
//                   to="/about"
//                   className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   About
//                 </Link>

//                 <Link
//                   to="/contact-us"
//                   className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div style={{ display: 'flex' }}>
//             {/* Show Logout button if the user is logged in */}
//             {user ? (
//               <button
//                 onClick={logout}
//                 className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link to="/signup">
//                   <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
//                     Register
//                   </div>
//                 </Link>
//                 <Link to="/login">
//                   <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
//                     Login
//                   </div>
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* RESPONSIVE / MOBILE VIEW */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={handleMobileMenuToggle}
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden transition-all" id="mobile-menu">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
//               <Link
//                 to="/"
//                 onClick={handleMobileLinkClick}
//                 className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Home
//               </Link>
//               {/* Add Explore, About, and Contact links */}
//               <Link
//                 to="/explore"
//                 onClick={handleMobileLinkClick}
//                 className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Explore
//               </Link>
//               <Link
//                 to="/about"
//                 onClick={handleMobileLinkClick}
//                 className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/contact-us"
//                 onClick={handleMobileLinkClick}
//                 className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Contact
//               </Link>
//               {user ? (
//                 <Link
//                   to="/"
//                   onClick={handleMobileLinkClick}
//                   className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Logout
//                 </Link>
//               ) : (
//                 <>
//                   <Link
//                     to="/signup"
//                     onClick={handleMobileLinkClick}
//                     className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Register
//                   </Link>
//                   <Link
//                     to="/login"
//                     onClick={handleMobileLinkClick}
//                     className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Login
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </Container>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/home';
import Container from './Container';
import { useAuth } from '../AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <img className="h-[80px] w-[80px]" src={logo} alt="Workflow" />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                {user && (
                  <>
                    <Link
                      to="/explore"
                      className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Explore
                    </Link>
                    <Link
                      to="/about"
                      className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact-us"
                      className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            {user ? (
              <div className="hidden md:block">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      // Handle navigation to user profile page
                      // Replace '/profile' with the actual path to the user profile page
                      // Example: history.push('/profile')
                      console.log('Navigate to user profile');
                    }}
                    className="hover:bg-button-primary px-4 py-1 rounded-xl"
                  >
                    {user.username}
                  </button>
                  <button
                    onClick={logout}
                    className="hover:bg-button-primary px-4 py-1 rounded-xl"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/signup">
                  <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
                    Register
                  </div>
                </Link>
                <Link to="/login">
                  <div className="hidden md:block hover:bg-button-primary px-4 py-1 rounded-xl">
                    Login
                  </div>
                </Link>
              </>
            )}
          </div>


          {/* MOBILE VIEW */}

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              <Link
                to="/"
                onClick={handleMobileLinkClick}
                className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              {user && (
                <>
                  <Link
                    to="/explore"
                    onClick={handleMobileLinkClick}
                    className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Explore
                  </Link>
                  <Link
                    to="/about"
                    onClick={handleMobileLinkClick}
                    className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={handleMobileLinkClick}
                    className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </Link>
                </>
              )}
              {user ? (
                <Link
                
                  to="/login"
                  onClick={logout}
                  className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    onClick={handleMobileLinkClick}
                    className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    onClick={handleMobileLinkClick}
                    className="hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;






