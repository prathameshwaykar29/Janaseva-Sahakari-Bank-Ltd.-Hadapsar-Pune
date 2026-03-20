

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUniversity,
//   FaExclamationCircle,

// } from "react-icons/fa";

// const ContactShort = () => {
//   const bankingOptions = [
//     { id: 1, title: "Branch Locator & ATMs", path: "/Branch-Locator", icon: <FaUniversity /> },
//     { id: 2, title: "Lodge Of Complaint", path: "/lodge-a-complaint", icon: <FaExclamationCircle /> },

//   ];

//   return (
//     <div className="bank-utilities-container">
//       <div className="bank-utilities-wrapper">
//         <h2 className="bank-utilities-title">Here’s how to reach us</h2>

//         <div className="bank-utilities-card">
//           <div className="bank-utilities-grid">
//             {bankingOptions.map((option) => (
//               <Link
//                 key={option.id}
//                 to={option.path}
//                 className="banking-option horizontal"
//               >
//                 <div className="banking-icon">{option.icon}</div>
//                 <div className="banking-text">
//                   <h3 className="banking-title">{option.title}</h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactShort;




import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity, FaExclamationCircle } from "react-icons/fa";
import { useLang } from "../ImpFolder/LangContext";

const ContactShort = () => {
  const { lang } = useLang();

  const content = {
    en: {
      title: "Here’s how to reach us",
      options: [
        {
          id: 1,
          title: "Branch Locator & ATMs",
          path: "/Branch-Locator",
          icon: <FaUniversity />,
        },
        {
          id: 2,
          title: "Lodge Of Complaint",
          path: "/lodge-a-complaint",
          icon: <FaExclamationCircle />,
        },
      ],
    },
    mr: {
      title: "आमच्याशी संपर्क साधण्याचे मार्ग",
      options: [
        {
          id: 1,
          title: "शाखा शोधा व एटीएम",
          path: "/Branch-Locator",
          icon: <FaUniversity />,
        },
        {
          id: 2,
          title: "तक्रार नोंदवा",
          path: "/lodge-a-complaint",
          icon: <FaExclamationCircle />,
        },
      ],
    },
  };

  const data = content[lang];

  return (
    <div className="bank-utilities-container">
      <div className="bank-utilities-wrapper">
        <h2 className="bank-utilities-title">{data.title}</h2>

        <div className="bank-utilities-card">
          <div className="bank-utilities-grid">
            {data.options.map((option) => (
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

export default ContactShort;