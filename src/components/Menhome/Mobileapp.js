
// import React from "react";
// import mobileBanking from "../../assets/images/case/mobile-banking.png";

// function Mobileapp() {
//   return (
//     <section className="bank-app-section pt-80 pb-80">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* LEFT CONTENT */}
//           <div className="col-lg-6">
//             <span className="block-title__tagline">Mobile Banking</span>
//             <h2 className="bank-title">
//               Download Our Mobile Banking App
//             </h2>
//             <p className="bank-text">
//               Manage your finances securely anytime, anywhere with our
//               powerful mobile banking app.
//             </p>

//             <ul className="bank-app-features">
//               <li> Instant UPI & fund transfers</li>
//               <li> View balances & statements</li>
//               <li> Bill payments & recharges</li>
//               <li> Secure & RBI compliant</li>
//             </ul>

//             <div className="bank-app-buttons">
//               <a href="#" className="app-btn play-store">
//                 Google Play
//               </a>
//               <a href="#" className="app-btn app-store">
//                 App Store
//               </a>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="col-lg-6 text-center">
//             <img
//               src={mobileBanking}
//               alt="Mobile Banking App"
//               className="bank-app-image"
//             />

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Mobileapp;




// import React from "react";
// import { FaGooglePlay, FaApple } from "react-icons/fa";
// import mobileBanking from "../../assets/images/case/mobile-banking.png";

// function Mobileapp() {
//   return (
//     <section
//       className="bank-app-section pt-80 pb-80"
//       aria-labelledby="mobile-app-title"
//     >
//       <div className="container">
//         <div className="row align-items-center">

//           {/* LEFT CONTENT */}
//           <div className="col-lg-6">
//             <span className="block-title__tagline">
//               Secure Mobile Banking
//             </span>

//             <h2 id="mobile-app-title" className="bank-title">
//               Download Our Mobile Banking App
//             </h2>

//             <p className="bank-text">
//               Manage your finances securely anytime, anywhere with our
//               powerful mobile banking app.
//             </p>

//             <ul className="bank-app-features">
//               <li>Instant UPI & fund transfers</li>
//               <li>View balances & statements</li>
//               <li>Bill payments & recharges</li>
//               <li>Secure & RBI compliant</li>
//             </ul>

//             <div className="bank-app-buttons">
//               <a href="#" className="app-btn play-store">
//                 <FaGooglePlay />
//                 Google Play
//               </a>

//               <a href="#" className="app-btn app-store">
//                 <FaApple />
//                 App Store
//               </a>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="col-lg-6 text-center">
//             <img
//               src={mobileBanking}
//               alt="Mobile Banking App"
//               className="bank-app-image"
//               loading="lazy"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Mobileapp;



import React from "react";
import mobileBanking from "../../assets/images/case/mobile-store.svg";
import { FaCheckCircle, FaGooglePlay, FaApple } from "react-icons/fa";

const features1 = [
  "Instant UPI & fund transfers",
  "View balances & statements",
  "Bill payments & recharges",
  "Secure & RBI compliant",
];

function Mobileapp() {
  return (
    <section className="mobile-app-section  ">
      <div className="mobile-app-container container">
        {/* LEFT CONTENT */}
        <div className="mobile-app-right">
          <img src={mobileBanking} alt="Mobile Banking App" className="mobile-app-image" />
        </div>
        <div className="mobile-app-left">
          <span className="block-title__tagline  block-title__tagline_color">Mobile Banking</span>
          <h2 className=" text-colors">Bank Smarter, Live Smarter</h2>
          <p className="dbank-text">
            Manage your finances seamlessly from your phone with our intuitive and secure mobile banking app.
          </p>

          <div className="mobile-app-features">
            {features1.map((feature, i) => (
              <div key={i} className="mobile-app-feature-card">
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mobile-app-buttons">
            <a href="#" className="mobile-app-btn google-play">
              <FaGooglePlay /> Google Play
            </a>
            <a href="#" className="mobile-app-btn app-store">
              <FaApple /> App Store
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        
      </div>
    </section>
  );
}

export default Mobileapp;
