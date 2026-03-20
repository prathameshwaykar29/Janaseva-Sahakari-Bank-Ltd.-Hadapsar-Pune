
import { SectionTitle, CardSection} from "../../LoanUi";
import {
  FaPercentage,
  FaRupeeSign,
  FaCalendarAlt,
  FaCoins,
  FaFileInvoiceDollar,
  FaUserFriends
} from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

const loanHighlights = [
  [<FaPercentage />, "11.50%", "Rate of Interest"],
  [<FaRupeeSign />, "upto Exposure ", "Maximum Loan Limit"],
  [<CiCreditCard1  />, "Stock – 25% Debtors – 40%", "Margin"],
  [<FaCalendarAlt />, "12 months", "Loan Period"],
  [<FaCoins />, "2.50%", "Shares"],
  [<FaFileInvoiceDollar />, "0.75%", "Processing Fee"],
  [<FaUserFriends />, "1 Required", "Guarantor"],
];

export default function CashOverview() {
  return (
    <CardSection>
      <SectionTitle>Loan Glance</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loanHighlights.map(([icon, val, lbl]) => (
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