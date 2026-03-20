// import React from "react";
// import {
//   FaMapMarkerAlt,
//   FaRegFileAlt,
//   FaPhoneAlt,
//   FaExclamationCircle,
// } from "react-icons/fa";

// const BankUtilities = () => {
//   return (
//     <section className="bank-utilities pt-60 pb-60">
//       <div className="container">
//         {/* Section Title */}
//         <div className="block-title text-center mb-40">
//           <p className="block-title__tagline">banking support</p>
//           <h2 className="block-title__title">Quick Banking Services</h2>
//         </div>

//         {/* Cards */}
//         <div className="row">
//           <div className="col-md-6 col-lg-3">
//             <div className="utility-card">
//               <div className="utility-icon">
//                 <FaMapMarkerAlt />
//               </div>
//               <h4>Branch & ATM Locator</h4>
//               <p>Find nearby bank branches and ATMs with ease.</p>
//               <a href="#">Locate Now</a>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-3">
//             <div className="utility-card">
//               <div className="utility-icon">
//                 <FaExclamationCircle />
//               </div>
//               <h4>Lodge a Complaint</h4>
//               <p>Register your complaint and track its status online.</p>
//               <a href="#">Raise Complaint</a>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-3">
//             <div className="utility-card">
//               <div className="utility-icon">
//                 <FaPhoneAlt />
//               </div>
//               <h4>Contact Us</h4>
//               <p>Get in touch with our customer support team.</p>
//               <a href="#">Get Support</a>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-3">
//             <div className="utility-card">
//               <div className="utility-icon">
//                 <FaRegFileAlt />
//               </div>
//               <h4>Download Forms</h4>
//               <p>Download important banking and KYC forms.</p>
//               <a href="#">View Forms</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BankUtilities;





// import React from "react";
// import {
//   FaMapMarkerAlt,
//   FaRegFileAlt,
//   FaPhoneAlt,
//   FaExclamationCircle,
// } from "react-icons/fa";

// const BankUtilities = () => {
//   // Define card data
//   const utilities = [
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Branch & ATM Locator",
//       desc: "Find nearby bank branches and ATMs with ease.",
//       link: "#locator",
//     },
//     {
//       icon: <FaExclamationCircle />,
//       title: "Lodge a Complaint",
//       desc: "Register your complaint and track its status online.",
//       link: "#complaint",
//     },
//     {
//       icon: <FaPhoneAlt />,
//       title: "Contact Us",
//       desc: "Get in touch with our customer support team.",
//       link: "#contact",
//     },
//     {
//       icon: <FaRegFileAlt />,
//       title: "Download Forms",
//       desc: "Download important banking and KYC forms.",
//       link: "#forms",
//     },
//   ];

//   // Handle card click
//   const handleClick = (link) => {
//     // Smooth scroll to section
//     const target = document.querySelector(link);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bank-utilities pt-60 pb-60">
//       <div className="container">
//         {/* Section Title */}
//         <div className="block-title text-center mb-40">
//           <p className="block-title__tagline">banking support</p>
//           <h2 className="block-title__title">Here’s how to reach us</h2>
//         </div>

//         {/* Cards */}
//         <div className="row">
//           {utilities.map((item, idx) => (
//             <div key={idx} className="col-md-6 col-lg-3">
//               <div
//                 className="utility-card"
//                 onClick={() => handleClick(item.link)}
//               >
//                 <div className="utility-icon">{item.icon}</div>
//                 <h4>{item.title}</h4>
//                 {/* <p>{item.desc}</p> */}
//                 {/* <a href={item.link}>Go</a> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BankUtilities;
import React from "react";
import { Link } from "react-router-dom";
import {
  FaUniversity,
  FaExclamationCircle,
  FaPhoneAlt,
  FaRegFileAlt,
} from "react-icons/fa";

const BankUtilities = () => {
  const bankingOptions = [
    { id: 1, title: "Branch Locator & ATMs", path: "/#", icon: <FaUniversity /> },
    { id: 2, title: "Lodge Of Complaint", path: "/lodge-a-complaint", icon: <FaExclamationCircle /> },
    { id: 3, title: "Contact Us", path: "/#", icon: <FaPhoneAlt /> },
    { id: 4, title: "Download Forms", path: "/#", icon: <FaRegFileAlt /> },
  ];

  return (
    <div className="bank-utilities-container">
      <div className="bank-utilities-wrapper">
        <h2 className="bank-utilities-title">Here’s how to reach us</h2>

        <div className="bank-utilities-card">
          <div className="bank-utilities-grid">
            {bankingOptions.map((option) => (
              <Link
                key={option.id}
                to={option.path}
                className="banking-option horizontal"
              >
                <div className="banking-icon">{option.icon}</div>
                <div className="banking-text">
                  <h3 className="banking-title">{option.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankUtilities;