// import React from 'react';

// const historyContent = [
//   "The period of 1970-71 was favourable for opening Urban Co-operative Banks. This was a very conducive ground for these veterans to bring their dream of establishing the bank to reality.",
//   "After various discussions among social activists from Hadapsar (such as Hon. (Late) Shri. D.A. alias Mama Hajare, Hon. (Late) Shri. Devramji Abnave, Hon. Shri. Madhukarraoji Temgire etc.) and the then Prant Pracharak Hon.(Late) Shri. Babarao Bhide, it was decided to establish the Bank in co-operative sector.",
//   "After rigorous compliance, Reserve Bank of India granted permission to open the Bank. The name 'Janaseva' was arrived at after considering various names such as Hadapsar Janata Bank, Janalaxmi Bank, Bhagyalaxmi Bank, etc. The Bank was formally established with the name 'Janaseva Sahakari Bank Ltd. Pune' on the auspicious day of Dussera on 24th October 1972 (with initial paid up capital of Rs. 56,000/-) and later inaugurated on 7th November 1972 by the hands of the then Mayor of Pune City Shri. Nilubhau Limaye. The bank started working from Gandhi Chowk, Hadapsar in a very small premises owned by Shri. Laxminarayan Mundada with office area of only 160 feet.",
// ];

// const HistoryTab = () => {
//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ">
//       {historyContent.map((text, idx) => (
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

// export default HistoryTab;


import React from 'react';
import { useLang } from '../ImpFolder/LangContext';

const translations = {
  en: {
    content: [
      "The period of 1970-71 was favourable for opening Urban Co-operative Banks. This was a very conducive ground for these veterans to bring their dream of establishing the bank to reality.",
      "After various discussions among social activists from Hadapsar (such as Hon. (Late) Shri. D.A. alias Mama Hajare, Hon. (Late) Shri. Devramji Abnave, Hon. Shri. Madhukarraoji Temgire etc.) and the then Prant Pracharak Hon.(Late) Shri. Babarao Bhide, it was decided to establish the Bank in co-operative sector.",
      "After rigorous compliance, Reserve Bank of India granted permission to open the Bank. The name 'Janaseva' was arrived at after considering various names such as Hadapsar Janata Bank, Janalaxmi Bank, Bhagyalaxmi Bank, etc. The Bank was formally established with the name 'Janaseva Sahakari Bank Ltd. Pune' on the auspicious day of Dussera on 24th October 1972 (with initial paid up capital of Rs. 56,000/-) and later inaugurated on 7th November 1972 by the hands of the then Mayor of Pune City Shri. Nilubhau Limaye. The bank started working from Gandhi Chowk, Hadapsar in a very small premises owned by Shri. Laxminarayan Mundada with office area of only 160 feet.",
    ],
  },
  mr: {
    content: [
      "१९७०-७१ चा काळ नागरी सहकारी बँका स्थापन करण्यासाठी अनुकूल होता. या अनुभवी कार्यकर्त्यांसाठी बँक स्थापनेचे स्वप्न प्रत्यक्षात आणण्याची ही सुवर्णसंधी होती.",
      "हडपसरमधील सामाजिक कार्यकर्ते (मा. (कै.) श्री. डी.ए. उर्फ मामा हजारे, मा. (कै.) श्री. देवरामजी अबनावे, मा. श्री. मधुकरराव टेमगिरे इ.) आणि तत्कालीन प्रांत प्रचारक मा. (कै.) श्री. बाबाराव भिडे यांच्यात विविध चर्चांनंतर सहकारी क्षेत्रात बँक स्थापन करण्याचा निर्णय घेण्यात आला.",
      "कठोर अनुपालनानंतर भारतीय रिझर्व्ह बँकेने बँक उघडण्याची परवानगी दिली. हडपसर जनता बँक, जनलक्ष्मी बँक, भाग्यलक्ष्मी बँक अशा विविध नावांचा विचार केल्यानंतर 'जनसेवा' हे नाव निश्चित झाले. बँकेची औपचारिक स्थापना 'जनसेवा सहकारी बँक लि. पुणे' या नावाने २४ ऑक्टोबर १९७२ रोजी दसऱ्याच्या शुभमुहूर्तावर झाली (प्रारंभिक भरणा भांडवल रु. ५६,०००/-) आणि ७ नोव्हेंबर १९७२ रोजी तत्कालीन पुणे महापौर श्री. निलुभाऊ लिमये यांच्या हस्ते उद्घाटन झाले. बँकेने हडपसरच्या गांधी चौकात श्री. लक्ष्मीनारायण मुंडडा यांच्या केवळ १६० चौ.फू. कार्यालयात कामकाज सुरू केले.",
    ],
  },
};

const HistoryTab = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      {t.content.map((text, idx) => (
        <p
          key={idx}
          className={`mb-4 text-body text-black leading-relaxed ${idx === 0
            ? "first-line:uppercase first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-heading first-letter:mr-3 first-letter:float-left"
            : ""
            }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default HistoryTab;