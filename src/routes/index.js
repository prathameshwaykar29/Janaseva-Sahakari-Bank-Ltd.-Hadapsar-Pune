import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import Home2 from '../components/Home2/Main'
import Home3 from '../components/Home3/Main'
import About from '../components/About/Main'
import Service from '../components/Services/Service/Main'
import ServiceDetails from '../components/Services/ServiceDetails/Main'
import Team from '../components/Teams/Team/Main'
import TeamDetails from '../components/Teams/TeamDetails/Main'
import CreditAudit from '../components/Credit/CreditAudit/Main'
import CreditRepair from '../components/Credit/CreditRepair/Main'
import Careers from '../components/Careers/Main'
import Faqs from '../components/Faqs/Main'

import CompareEMI from '../components/Features/CompareEMI/Main'
import HomeLoan from '../components/Features/HomeLoan/Main'
import HomeLoanEligibility from '../components/Features/HomeLoanEligibility/Main'
import LoanEligibility from '../components/Features/LoanEligibility/Main'
import MonthlyLoan from '../components/Features/MonthlyLoan/Main'
import PersonalLoan from '../components/Features/PersonalLoan/Main'
import NewsMain from '../components/News/NewsMain/Main'
import NewsDetails from '../components/News/NewsDetails/Main'
// import Contact from '../components/Contact/Main'
import TwoWheelerLoan from '../components/Two-Wheeler/TwoWheelerLoan'
import Home04 from '../components/Home4/Main'
import BOM from '../components/Board-of-management/BOM'
import BOD from '../components/Board-of-directors/BOD'
import Ourhistory from '../components/Our-history/Ourhistory'
import FixedDeposit from '../components/Fixed-Deposits/FixedDeposit'
import Test from '../components/Testimonials/Test'
import AnnualReports from '../components/Annual-Reports/AnnualReports'
import Eventspage from '../components/Events/Eventspage'
import Lodge from '../components/lodge-a-complaint/Lodge'
// import GeneralComplaint from '../components/lodge-a-complaint/ConsumerComplaint/GeneralComplaint'
import ComplaintConsumer from '../components/lodge-a-complaint/ConsumerComplaint/ComplaintConsumer'
import Threevehicleloan from '../components/3-wheeler-loan/Threevehicleloan'
import NewCommercial from '../components/New-Commercial-Vehicle/NewCommercial'
import CashCredit from '../components/Cash-Credit-Secured-General/CashCredit'
import Udyogloan from '../components/udyog-vastu-loan/Udyogloan'
import Hypothecation from '../components/Hypothecation-Loan/Hypothecation'
import Tradepack from '../components/Trade-pack-loan/Tradepack'
import JansevaSchem from '../components/Janaseva-Gharkul-Loan-Scheme/JansevaSchem'
import HousingLoan from '../components/Housing-Loan-under-CRE/HousingLoan'
import JanasevaHomeDecore from '../components/Janaseva-Home-Decore/JanasevaHomeDecore'
import JansaveTopUp from '../components/Janaseva-Gharkul-Top-Up/JansaveTopUp'
import NewVehicleloan from '../components/New-four-Wheeler-Loan/NewVehicleloan'
import EducationalLoan from '../components/Janaseva-Educational-Secured-Loan/EducationalLoan'
import EducationLoanForCoaching from '../components/Education-loan-for-Coaching/EducationLoanForCoaching'
import Unsecured_Education_Loan from '../components/Unsecured-Education-Loan/Unsecured-Education-Loan'
import Resale4Wheeler from '../components/Resale-4-Wheeler/Resale4Wheeler'
import ConsumerDurable from '../components/Consumer-Durable/ConsumerDurable'
import ConsumerLoan from '../components/Consumer-Loan/ConsumerLoan'
import Personalloan from '../components/Personal-Loan-Scheme/Personalloan'
import Grouploan from '../components/Group-Loan/Grouploan'
import JanvikasLoanScheme from '../components/Janvikas-Loan-Scheme/JanvikasLoanScheme'
import GoldLoan from '../components/gold-loan/GoldLoan'
import LoanAgainst from '../components/Loan-Against-Life-Insurance-Policies/LoanAgainst'
import GovernmentSecuredLoan from '../components/Government-Secured-Loan/GovernmentSecuredLoan'
import FDCC from '../components/Cash-Credit-Against-FD-FDCC/FDCC'
import FDTL from '../components/Loan-Against-FD-FDTL/FDTL'
import MachineryLoan from '../components/Machinery-Loan/MachineryLoan'
import ProSelfLoan from '../components/ProSelf-Loan/ProSelfLoan'
import Heil from '../components/Hospital-Educational-Institute-Loan/Heil'
import Startup from '../components/Janaseva-Start-Up-(MSME)Finance/Startup'
import JanasevaSolarScheme from '../components/Janaseva-Solar-Scheme/JanasevaSolarScheme'
import JanasevaSaralKarjYojana from '../components/Janaseva-Saral-Karj-Yojana/JanasevaSaralKarjYojana'
import Propertyloan from '../components/Property-Loan-Builder-Finance/Propertyloan'
import RentDiscounting from '../components/Rent-Discounting/RentDiscounting'
import Overdraft from '../components/Janaseva-Saral-Overdraft-Loan-Scheme/Overdraft'
import GeneralIns from '../components/General-Insurance/GeneralIns'
import Healthins from '../components/Health-Insurance/Healthins'
import LifeIns from '../components/Life-Insurance/LifeIns'
import Down from '../components/Downloads/Down'
import Contactjan from '../components/Contact-Us/Contactjan'
import IMPS from '../components/IMPS-NEFT-RTGS/IMPS'
import Internet from '../components/Internet-banking/Internet'
import Mobile from '../components/Mobile-Banking/Mobile'
import ATM from '../components/ATM-Service/ATM'
import Sms from '../components/SMS-Banking/Sms'
import DigiComplaint from '../components/lodge-a-complaint/SubLodgeComplaint/DigiComplaint'
import Policy from '../components/Privacy-Policy/Policy'
import BranchLocator from '../components/Branch-Locator/BranchLocator'
import ApplyMain from '../components/Apply-Now/ApplyMain'




// import Home05 from '../components/Home5/main'


const Routing = () => {
  const [homepage, sethomepage] = useState(false)
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home-02" || location.pathname === "/home-03" || location.pathname === "/home-04" || location.pathname === "/home-05") {
      sethomepage(false)
    } else {
      sethomepage(true)
    }
  }, [location])

  return (
    <>
      {homepage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-02" element={<Home2 />} />
        <Route path="/home-03" element={<Home3 />} />
        <Route path="/home-04" element={<Home04 />} />
        <Route path="/Fixed-Deposits" element={<FixedDeposit />} />
        <Route path="/about" element={<About />} />
        <Route path='/lodge-a-complaint' element={<Lodge />} />
        <Route path="/ConsumerComplaint" element={<ComplaintConsumer />} />
        <Route path="/DigiComplaint" element={<DigiComplaint />} />
        <Route path="/service" element={<Service />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Branch-Locator" element={<BranchLocator />} />
        <Route path="/Privacy-Policy" element={<Policy />} />
        <Route path="/Group-Loan" element={<Grouploan />} />
        <Route path="/Board-of-management" element={<BOM />} />
        <Route path="/Janvikas-Loan-Scheme" element={<JanvikasLoanScheme />} />
        <Route path="/Board-of-directors" element={<BOD />} />
        <Route path="/Our-history" element={<Ourhistory />} />
        <Route path="/teamdetails" element={<TeamDetails />} />
        <Route path="/creditaudit" element={<CreditAudit />} />
        <Route path="/creditrepair" element={<CreditRepair />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/New-commercial-vehicle" element={<NewCommercial />} />
        <Route path='/trade-pack-loan' element={<Tradepack />} />
        <Route path='/Annual-Reports' element={<AnnualReports />} />
        <Route path='/Events' element={<Eventspage />} />
        <Route path='/General-Insurance' element={<GeneralIns />} />
        <Route path='/Janaseva-Gharkul-Loan-Scheme' element={<JansevaSchem />} />
        <Route path='/Testimonials' element={<Test />} />
        <Route path='/gold-loan' element={<GoldLoan />} />
        <Route path='/Loan-Against-Life-Insurance-Policies' element={<LoanAgainst />} />
        <Route path='/Health-Insurance' element={<Healthins />} />
        <Route path='/Life-Insurance' element={<LifeIns />} />
        <Route path='/Downloads' element={<Down />} />
        <Route path='/Housing-Loan-under-CRE' element={<HousingLoan />} />
        <Route path='/Janaseva-Home-Decore' element={<JanasevaHomeDecore />} />
        <Route path='/Janaseva-Gharkul-Top-Up' element={<JansaveTopUp />} />
        <Route path='/Education-loan-for-Coaching' element={<EducationLoanForCoaching />} />
        <Route path='/New-four-Wheeler-Loan' element={<NewVehicleloan />} />
        <Route path='/Two-Wheeler-Loan' element={<TwoWheelerLoan />} />
        <Route path='/Resale-4-Wheeler' element={<Resale4Wheeler />} />
        <Route path='/Janaseva-Educational-Secured-Loan' element={<EducationalLoan />} />
        <Route path="/Personal-Loan-Scheme" element={<Personalloan />} />
        <Route path="/Consumer-Loan" element={<ConsumerLoan />} />
        <Route path="/Consumer-Durable" element={<ConsumerDurable />} />
        <Route path='/Unsecured-Education-Loan' element={<Unsecured_Education_Loan />} />

        <Route path='/Machinery-Loan' element={<MachineryLoan />} />
        <Route path='/ProSelf-Loan' element={<ProSelfLoan />} />
        <Route path='/Hospital-Educational-Institute-Loan' element={<Heil />} />
        <Route path='/Janaseva-Start-Up-(MSME)Finance' element={<Startup />} />
        <Route path='/Janaseva-Solar-Scheme' element={<JanasevaSolarScheme />} />
        <Route path='/Property-Loan-Builder-Finance' element={<Propertyloan />} />
        <Route path='/Janaseva-Saral-Karj-Yojana' element={<JanasevaSaralKarjYojana />} />
        <Route path='/Rent-Discounting' element={<RentDiscounting />} />
        <Route path='/Janaseva-Saral-Overdraft-Loan-Scheme' element={<Overdraft />} />

        <Route path="/Cash-Credit-Against-FD-FDCC" element={<FDCC />} />
        <Route path="/Loan-Against-FD-FDTL" element={<FDTL />} />
        <Route path='/Government-Secured-Loan' element={<GovernmentSecuredLoan />} />
        <Route path='/hypothecation-loan' element={<Hypothecation />} />
        <Route path='/udyog-vastu-loan' element={<Udyogloan />} />
        <Route path='/Cash-Credit-Secured-General' element={<CashCredit />} />

        <Route path='/3-wheeler-loan' element={<Threevehicleloan />} />
        <Route path="/compareEMI" element={< CompareEMI />} />
        <Route path="/homeloan" element={< HomeLoan />} />
        <Route path="/homeloaneligibility" element={<HomeLoanEligibility />} />
        <Route path="/loaneligibility" element={<LoanEligibility />} />
        <Route path="/monthlyloan" element={<MonthlyLoan />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/newsmain" element={<NewsMain />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/Contact-Us" element={<Contactjan />} />
        
        <Route path="/SMS-Banking" element={<Sms />} />
        <Route path="/ATM-Service" element={<ATM />} />
        <Route path="/Mobile-Banking" element={<Mobile />} />
        <Route path="/Internet-banking" element={<Internet />} />
        <Route path="/IMPS-NEFT-RTGS" element={<IMPS />} />
        <Route path="/Apply-Now" element={<ApplyMain />} />

      </Routes>
      <Footer />
    </>
  )
}

export default Routing