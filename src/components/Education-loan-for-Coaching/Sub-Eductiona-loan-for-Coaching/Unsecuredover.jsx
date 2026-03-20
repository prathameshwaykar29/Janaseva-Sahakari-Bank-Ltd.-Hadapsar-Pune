import { SectionTitle, CardSection} from "../../LoanUi";
import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaCoins, FaUserShield } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

const coaching_loanHighlights = [
  [<FaPercentage />, "11.00%", "Rate of Interest"],
  [<FaRupeeSign />, "Rs. 5 Lakh", "Maximum Loan Limit"],
  [<FaPercentage />, "10%", "Margin"],
  [<FaCalendarAlt />, "48 Months", "Loan Period"],
  [<FaCoins />, "5%", "Shares"],
  [<AiOutlineFileDone />, "Nil", "Processing Fee"],
  [<FaUserShield />, "1 Required", "Guarantor"],
];



export default function Unsecuredover() {
  return (
    <CardSection>
      <SectionTitle>Loan Glance</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaching_loanHighlights.map(([icon, val, lbl]) => (
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