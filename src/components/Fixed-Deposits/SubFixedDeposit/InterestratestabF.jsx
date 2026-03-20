import { SectionTitle, CardSection} from "../../LoanUi";

const loanDetails = [
  { label: "Period of Deposit", value: "Minimum 1 year and maximum 10 years" },
  { label: "Interest Payment", value: "Quarterly Interest By Pay Order / Cash / Credit to Account" },
  { label: "Maximum Amount of Deposit", value: "No Limit" },
  { label: "Minimum Amount of Deposit", value: "Rs. 1,000/-", isRate: true },
  { label: "Pledging of Deposit", value: "Allowed", isGreen: true },
  { label: "Premature Withdrawal", value: "Allowed with penalty of 1% in applicable interest rate for the tenure of deposit as on the date of placement of deposit." },
  { label: "Additional Interest Rate for Senior Citizen", value: "Applicable" },
  { label:"Eligible Depositors", value:"All depositors"}
];

export default function InterestRatesTabF() {
  return (
    <CardSection>
      <SectionTitle>Loan Details</SectionTitle>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base min-w-[600px]">
          <tbody>
            {loanDetails.map((d, i) => (
              <tr key={d.label} className={i % 2 !== 0 ? "bg-blue-50/40" : ""}>
                <td className="px-4 py-3 border border-[#dce3f0] font-semibold text-[#002d72] w-[38%] whitespace-nowrap align-top leading-relaxed">
                  {d.label}
                </td>
                <td className={`
                  px-4 py-3 border border-[#dce3f0] align-top leading-relaxed whitespace-pre-line
                  ${d.isRate ? "text-red-600 font-bold text-sm" : ""}
                  ${d.isGreen ? "text-[#0a7c59] font-semibold" : ""}
                `}>
                  {d.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardSection>
  );
}