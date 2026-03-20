// import React from 'react';

// const csrContent = [
//   "Bank is always involved in social activities. The bank has created Member Welfare Fund. Additional amount is transferred to this fund every year. Bank provides financial aid to its members and their relatives in the event of accident or for treatment for chronic diseases.",
//   "The Bank has taken up the responsibility of meeting educational expenses of certain students at Gopal Navjeevan Kendra, hostel for students from Purvanchal, Prakash Jyot Vidyalaya, Karna Badhir Vidyalaya. Bank has also extended financial aid to Senapati Hambirrao Mohite Goshala at Wadki.",
//   "The Bank has adopted Ekhatpur village near Saswad for its overall development. The bank solved the problem of drinking water faced by the villagers, necessary arrangements were made for seepage of water in the soil. Every year sweets are distributed to the varkaris during the pious reception of Holy Palkhis of Saint Shri. Dnyaneshwar Maharaj and Shri. Tukaram Maharaj. Bank organizes free medical check up camps for its shareholders, especially for those who are senior citizens. Bank also participates in Ganesha Festival and Ambedkar Jayanti activities.",
// ];

// const CSRTab = () => {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ">
//       {csrContent.map((text, idx) => (
//         <p
//           key={idx}
//           className={`mb-4 text-body text-black leading-relaxed ${
//             idx === 0
//               ? "first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-heading first-letter:mr-3 first-letter:float-left"
//               : ""
//           }`}
//         >
//           {text}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default CSRTab;



// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const csrContent = [
//   "Bank is always involved in social activities. The bank has created Member Welfare Fund. Additional amount is transferred to this fund every year. Bank provides financial aid to its members and their relatives in the event of accident or for treatment for chronic diseases.",

//   "The Bank has taken up the responsibility of meeting educational expenses of certain students at Gopal Navjeevan Kendra, hostel for students from Purvanchal, Prakash Jyot Vidyalaya, Karna Badhir Vidyalaya. Bank has also extended financial aid to Senapati Hambirrao Mohite Goshala at Wadki.",
// ];

// const csrPoints = [
//   "The Bank has adopted Ekhatpur village near Saswad for its overall development.",
//   "The bank solved the problem of drinking water faced by the villagers.",
//   "Necessary arrangements were made for seepage of water in the soil.",
//   "Every year sweets are distributed to the varkaris during the reception of Holy Palkhis.",
//   "Bank organizes free medical check-up camps for shareholders, especially senior citizens.",
//   "Bank also participates in Ganesha Festival and Ambedkar Jayanti activities.",
// ];

// const CSRTab = () => {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">

//       {csrContent.map((text, idx) => (
//         <p
//           key={idx}
//           className={`mb-4 text-black leading-relaxed ${idx === 0
//               ? "first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
//               : ""
//             }`}
//         >
//           {text}
//         </p>
//       ))}

//       {/* Points with Icons */}
//       <div className="mt-4 space-y-2">
//         {csrPoints.map((point, index) => (
//           <li key={index} className="flex items-start gap-2 list-none">
//             <FaCheckCircle className="text-[#f47012] mt-[5px] text-sm flex-shrink-0" />
//             <span className="text-black leading-relaxed">{point}</span>
//           </li>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default CSRTab;



import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLang } from "../ImpFolder/LangContext";

const translations = {
  en: {
    content: [
      "Bank is always involved in social activities. The bank has created Member Welfare Fund. Additional amount is transferred to this fund every year. Bank provides financial aid to its members and their relatives in the event of accident or for treatment for chronic diseases.",
      "The Bank has taken up the responsibility of meeting educational expenses of certain students at Gopal Navjeevan Kendra, hostel for students from Purvanchal, Prakash Jyot Vidyalaya, Karna Badhir Vidyalaya. Bank has also extended financial aid to Senapati Hambirrao Mohite Goshala at Wadki.",
    ],
    points: [
      "The Bank has adopted Ekhatpur village near Saswad for its overall development.",
      "The bank solved the problem of drinking water faced by the villagers.",
      "Necessary arrangements were made for seepage of water in the soil.",
      "Every year sweets are distributed to the varkaris during the reception of Holy Palkhis.",
      "Bank organizes free medical check-up camps for shareholders, especially senior citizens.",
      "Bank also participates in Ganesha Festival and Ambedkar Jayanti activities.",
    ],
  },
  mr: {
    content: [
      "बँक नेहमीच सामाजिक उपक्रमांमध्ये सहभागी असते. बँकेने सदस्य कल्याण निधीची स्थापना केली आहे. दरवर्षी या निधीमध्ये अतिरिक्त रक्कम हस्तांतरित केली जाते. अपघात किंवा जुनाट आजारावरील उपचारांसाठी बँक आपल्या सदस्यांना व त्यांच्या नातेवाईकांना आर्थिक सहाय्य करते.",
      "गोपाल नवजीवन केंद्र, पूर्वांचलमधील विद्यार्थ्यांसाठी वसतिगृह, प्रकाश ज्योत विद्यालय, कर्णबधिर विद्यालय येथील काही विद्यार्थ्यांच्या शैक्षणिक खर्चाची जबाबदारी बँकेने स्वीकारली आहे. बँकेने वाडकी येथील सेनापती हंबीरराव मोहिते गोशाळेलाही आर्थिक सहाय्य केले आहे.",
    ],
    points: [
      "बँकेने सर्वांगीण विकासासाठी सासवडजवळील एकतापूर गाव दत्तक घेतले आहे.",
      "बँकेने ग्रामस्थांच्या पिण्याच्या पाण्याच्या समस्येवर तोडगा काढला.",
      "जमिनीत पाणी मुरण्यासाठी आवश्यक व्यवस्था करण्यात आली.",
      "दरवर्षी पवित्र पालखींच्या स्वागतप्रसंगी वारकऱ्यांना गोडधोड वाटप केले जाते.",
      "बँक भागधारकांसाठी, विशेषतः ज्येष्ठ नागरिकांसाठी, मोफत वैद्यकीय तपासणी शिबिरे आयोजित करते.",
      "बँक गणेशोत्सव आणि आंबेडकर जयंती उपक्रमांमध्येही सहभागी होते.",
    ],
  },
};

const CSRTab = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">

      {t.content.map((text, idx) => (
        <p
          key={idx}
          className={`mb-4 text-black leading-relaxed ${idx === 0
            ? "first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left"
            : ""
            }`}
        >
          {text}
        </p>
      ))}

      <div className="mt-4 space-y-2">
        {t.points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 list-none">
            <FaCheckCircle className="text-[#f47012] mt-[5px] text-sm flex-shrink-0" />
            <span className="text-black leading-relaxed">{point}</span>
          </li>
        ))}
      </div>

    </div>
  );
};

export default CSRTab;