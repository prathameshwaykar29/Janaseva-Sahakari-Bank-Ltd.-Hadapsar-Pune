
import { SectionTitle, CardSection} from "../../LoanUi";
import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaCoins, FaUserShield } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const cre_loanHighlights = [
  [<FaPercentage />, "10.50%", "Rate of Interest"],
  [<FaRupeeSign />, "Rs. 140.00 Lakh", "Maximum Loan Limit"],
  [<FaPercentage />, "10%", "Margin"],
  [<FaCalendarAlt />, "240 Months", "Loan Period"],
  [<FaCoins />, "1% – 2.50%", "Shares"],
  [<HiDocumentText />, "0.75%", "Processing Fee"],
  [<FaUserShield />, "NA", "Guarantor"],
];



export default function CreOver() {
  return (
    <CardSection>
      <SectionTitle>Loan Glance</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cre_loanHighlights.map(([icon, val, lbl]) => (
          <div
            key={lbl}
            className="
              bg-blue-50 border border-blue-200 rounded-md p-3 text-center
              transition-all duration-200 cursor-default
              hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg
            "
          >
            <div className="text-3xl text-[#f47012] mb-2 flex justify-center">
              {icon}
            </div>

            <div className="font-poppins text-[17px] font-bold text-[#002d72] leading-tight">
              {val}
            </div>

            <div className="text-sm text-gray-500 mt-1">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </CardSection>
  );
}