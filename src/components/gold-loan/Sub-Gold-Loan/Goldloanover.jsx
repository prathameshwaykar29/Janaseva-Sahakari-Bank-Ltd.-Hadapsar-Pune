import { SectionTitle, CardSection } from "../../LoanUi";

const goldLoanData = [
  {
    scheme: "Gold Loan up to 2.50 Lakh (Bullet Repayment)",
    roi: "9.00%",
    maxLoan: "2.50 Lakh",
    margin: "25%",
    period: "12 Months",
    shares: "Rs. 2000/-",
    processing: "NA",
    guarantor: "NA",
    purpose: "Any reason other than financial speculation",
    eligibility: "Any Person having regular source of income",
  },
  {
    scheme: "Gold Loan From 2.50 Lakh to 5.00 Lakh (EMI)",
    roi: "9.00%",
    maxLoan: "5.00 Lakh",
    margin: "30%",
    period: "36 Months",
    shares: "Rs. 5000/-",
    processing: "NA",
    guarantor: "NA",
    purpose: "",
    eligibility: "",
  },
  {
    scheme: "Gold Loan From 5.00 Lakh to 25.00 Lakh (EMI)",
    roi: "9.50%",
    maxLoan: "25 Lakh",
    margin: "35%",
    period: "48 Months",
    shares: "Rs. 10000/-",
    processing: "NA",
    guarantor: "NA",
    purpose: "",
    eligibility: "",
  },
];

export default function Goldloanover() {
  return (
    <CardSection>
      <SectionTitle>Gold Loan Overview</SectionTitle>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          
          {/* Table Header */}
          <thead className="bg-[#e8d9b5] text-[#002d72] font-semibold">
            <tr>
              <th className="border p-2">Loan Scheme</th>
              <th className="border p-2">ROI</th>
              <th className="border p-2">Maximum Loan Limit</th>
              <th className="border p-2">Margin</th>
              <th className="border p-2">Period</th>
              <th className="border p-2">Shares</th>
              <th className="border p-2">Processing Fee</th>
              <th className="border p-2">Guarantor</th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {goldLoanData.map((loan, index) => (
              <tr key={index} className="text-center bg-gray-100">
                <td className="border p-2 text-left text-[#002d72] font-semibold">
                  {loan.scheme}
                </td>
                <td className="border p-2">{loan.roi}</td>
                <td className="border p-2">{loan.maxLoan}</td>
                <td className="border p-2">{loan.margin}</td>
                <td className="border p-2">{loan.period}</td>
                <td className="border p-2">{loan.shares}</td>
                <td className="border p-2">{loan.processing}</td>
                <td className="border p-2">{loan.guarantor}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </CardSection>
  );
}