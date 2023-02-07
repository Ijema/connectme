// import React from 'react';
// import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';

// import shareVideo from '../assets/share.mp4';
// import logo from '../assets/logowhite.png';

// const Login = () => {

//     const responseGoogle=(response) => {
//       console.log(response);
//     }

//   return (
//     <div className="h-screen flex justify-start items-center flex-col">
//       <div className="relative w-full h-full">
//         <video 
//           src={shareVideo}
//           type="video/mp4"
//           loop
//           controls={false}
//           muted
//           autoPlay
//           className="h-full w-full object-cover"
//         />
//       </div> 
//       <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
//         <div className="p-5">
//           <img src={logo} alt="Logo" width="130px"/>
//         </div>
//         <div className="shadow-2xl">
//           <GoogleLogin 
//             clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
//             render={(renderProps) => (
//               <button
//                 type="button"
//                 className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                 <FcGoogle className="mr-4" />Sign in with Google
//               </button>
//             )}
//             onSuccess={responseGoogle}
//             onFailure={responseGoogle}
//             cookiePolicy="single_host_origin"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React from 'react';
import { GoogleSignIn } from '@react-google-signin/google-sign-in';
import { FcGoogle } from 'react-icons/fc';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <GoogleSignIn
      clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      className="h-screen flex justify-start items-center flex-col"
    >
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="Logo" width="130px"/>
        </div>
        <div className="shadow-2xl">
        <button
          type="button"
          className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
          onClick={() => GoogleSignIn.signIn()}
        >
          <FcGoogle className="mr-4" />Sign in with Google
        </button>

        </div>
      </div>
    </GoogleSignIn>
  )
}

export default Login
