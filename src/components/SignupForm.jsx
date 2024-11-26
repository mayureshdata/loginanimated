import React, { useState } from "react";
import "../../loginstyle.css"; // Ensure to import the CSS
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const SignUpForm = () => {
  // State to manage the active panel
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  // Handlers for toggling the active panel
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div
      className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="social">
              <FaGoogle size={20} />
            </a>
            <a href="#" className="social">
              <FaLinkedin size={20} />
            </a>
          </div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>

          <div className="social-container">
            <a href="#" className="social">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="social">
              <FaGoogle size={20} />
            </a>
            <a href="#" className="social">
              <FaLinkedin size={20} />
            </a>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us, please login with your personal info
            </p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

// import React, { useState } from "react";
// import "../../style.css"; // Include your CSS file here
// // import "../../style-res.css"; // Include your CSS file here

// const SignupForm = () => {
//   // State to track the active panel
//   const [isSignUpActive, setIsSignUpActive] = useState(false);

//   // Toggle between Sign Up and Sign In
//   const handleSignUpClick = () => {
//     setIsSignUpActive(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpActive(false);
//   };

//   return (
//     <div
//       className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
//       id="container"
//     >
//       {/* Sign-Up Form */}
//       <div className="form-container sign-up-container">
//         <form action="#">
//           <h1>Create Account</h1>
//           <div className="social-container">
//             <a href="#" className="social">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="social">
//               <i className="fa fa-google-plus-g"></i>
//             </a>
//             <a href="#" className="social">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="button">Sign Up</button>
//         </form>
//       </div>

//       {/* Sign-In Form */}
//       <div className="form-container sign-in-container">
//         <form action="#">
//           <h1>Sign in</h1>
//           <div className="social-container">
//             <a href="#" className="social">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="social">
//               <i className="fa fa-google-plus-g"></i>
//             </a>
//             <a href="#" className="social">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//           <span>or use your account</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="button">Sign In</button>
//         </form>
//       </div>

//       {/* Overlay */}
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>
//               To keep connected with us please login with your personal info
//             </p>
//             <button className="ghost" id="signIn" onClick={handleSignInClick}>
//               Sign In
//             </button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your personal details and start your journey with us</p>
//             <button className="ghost" id="signUp" onClick={handleSignUpClick}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
