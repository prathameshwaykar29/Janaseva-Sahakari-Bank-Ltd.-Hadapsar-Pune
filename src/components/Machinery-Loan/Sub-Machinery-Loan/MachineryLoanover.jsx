import { SectionTitle, CardSection} from "../../LoanUi";
import { FaPercentage, FaRupeeSign, FaCalendarAlt, FaCoins, FaUserShield } from "react-icons/fa";


const machinery_loanHighlights = [
  [<FaPercentage />, "10.00%", "Rate of Interest"],
  [<FaRupeeSign />, "Upto Exposure Limit", "Maximum Loan Limit"],
  [<FaPercentage />, "New 25% | Old 40%", "Margin"],
  [<FaCalendarAlt />, "60 to 120 Months", "Loan Period"],
  [<FaCoins />, "2.50%", "Shares"],
  [<FaPercentage />, "1.00%", "Processing Fee"],
  [<FaUserShield />, "1 Required", "Guarantor"],
];



export default function MachineryLoanover() {
  return (
    <CardSection>
      <SectionTitle>Loan Glance</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {machinery_loanHighlights.map(([icon, val, lbl]) => (
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
