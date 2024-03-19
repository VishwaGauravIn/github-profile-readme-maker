{
  /* Disabled due to spam */
}

// import React, { Component } from "react";
// import dynamic from "next/dynamic";

// import { Crisp } from "crisp-sdk-web";

// const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
//   ssr: false,
// });

// class CrispChat extends Component {
//   componentDidMount() {
//     Crisp.configure("a5e53b55-a08e-4ebe-bd54-14aff455962b");
//   }

//   render() {
//     return null;
//   }
// }
// export default CrispChat;

// // open crisp chat
// export const openCrispChat = () => {
//   Crisp.chat.open();
// };

// export function CrispBanner() {
//   const bannerAnimation = {
//     backgroundImage:
//       "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
//     backgroundSize: "600%",
//     WebkitAnimation: "anime 16s linear infinite",
//     animation: "anime 16s linear infinite",
//   };

//   const bannerWrapperAnimation = {
//     animation: "appear 5s ease-in-out",
//     overflow: "hidden",
//     width: "100%",
//   };

//   const buttonStyles = {
//     color: "white",
//     fontSize: "1rem", // Use a single fontSize property
//     transition: "all 0.2s ease-in-out",
//     letterSpacing: "0.05em",
//     fontWeight: 500,
//     outline: "none",
//     overflow: "hidden",
//     display: "flex",
//     height: "40px",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//   };

//   return (
//     <>
//       <div style={bannerWrapperAnimation}>
//         <div style={bannerAnimation}>
//           <button style={buttonStyles} onClick={openCrispChat}>
//             Want a crazy good website? Let&apos;s Chat!
//           </button>
//         </div>
//       </div>
//       <CrispWithNoSSR />

//       <style>{`
//             @keyframes anime {
//               0% {
//                 background-position: 0% 50%;
//               }
//               50% {
//                 background-position: 100% 50%;
//               }
//               100% {
//                 background-position: 0% 50%;
//               }
//             }

//             @keyframes appear {
//               0% {
//                 height: 0px;
//               }
//               80% {
//                 height: 0px;
//               }
//               100% {
//                 height: 40px;
//               }
//             }
//           `}</style>
//     </>
//   );
// }

import React from "react";
// import dynamic from "next/dynamic";

// import { Crisp } from "crisp-sdk-web";

// const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
//   ssr: false,
// });

// class CrispChat extends Component {
//   componentDidMount() {
//     Crisp.configure("a5e53b55-a08e-4ebe-bd54-14aff455962b");
//   }

//   render() {
//     return null;
//   }
// }
// export default CrispChat;

// // open crisp chat
// export const openCrispChat = () => {
//   Crisp.chat.open();
// };

export function CrispBanner() {
  const bannerAnimation = {
    backgroundImage:
      "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
    backgroundSize: "600%",
    WebkitAnimation: "anime 16s linear infinite",
    animation: "anime 16s linear infinite",
  };

  const bannerWrapperAnimation = {
    animation: "appear 5s ease-in-out",
    overflow: "hidden",
    width: "100%",
  };

  const buttonStyles = {
    color: "white",
    fontSize: "1rem", // Use a single fontSize property
    transition: "all 0.2s ease-in-out",
    letterSpacing: "0.05em",
    fontWeight: 500,
    outline: "none",
    overflow: "hidden",
    display: "flex",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <>
      <div style={bannerWrapperAnimation}>
        <div style={bannerAnimation}>
          <a style={buttonStyles} href="mailto:itsvgin@gmail.com">
            Want a crazy good website? Let&apos;s Discuss!
          </a>
        </div>
      </div>
      {/* <CrispWithNoSSR /> */}

      <style>{`
            @keyframes anime {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
    
            @keyframes appear {
              0% {
                height: 0px;
              }
              80% {
                height: 0px;
              }
              100% {
                height: 40px;
              }
            }
          `}</style>
    </>
  );
}
