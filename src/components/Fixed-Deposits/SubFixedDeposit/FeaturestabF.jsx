import { SectionTitle, CardSection} from "../../LoanUi";
import { FaRupeeSign, FaPercentage, FaCalendarAlt, FaClock, FaShieldAlt, FaPiggyBank } from "react-icons/fa";

const fdHighlights = [
  [<FaRupeeSign />, "₹10,00,000", "Maximum Deposit Amount"],
  [<FaPercentage />, "8.25% p.a.", "Interest Rate"],
  [<FaCalendarAlt />, "7 Days – 10 Years", "Tenure"],
  [<FaClock />, "Quarterly / Cumulative", "Interest Payout"],
  [<FaShieldAlt />, "Safe & Secure", "Principal Protection"],
  [<FaPiggyBank />, "Flexible", "Premature Withdrawal"],
];

export default function FeaturesTabF() {
  return (
    <CardSection>
      <SectionTitle>Features</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fdHighlights.map(([icon, val, lbl]) => (
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