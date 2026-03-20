
import React from 'react'
import { 
  FaUniversity,      
  FaExclamationCircle, 
  FaPhoneAlt,        
  FaRegFileAlt       
} from 'react-icons/fa'

const BankUtilities55 = () => {

  const bankingOptions = [
    { id: 1, title: 'Branch Locator & ATMs', path: '/#', icon: <FaUniversity /> },
    { id: 2, title: 'Lodge Of Complaint', path: '/#', icon: <FaExclamationCircle /> },
    { id: 3, title: 'Contact Us', path: '/#', icon: <FaPhoneAlt /> },
    { id: 4, title: 'Download Forms', path: '/#', icon: <FaRegFileAlt /> },
  ]

  return (
    <section className=' mt-40 container mb-40 pr-12 pl-12'>
    <div className="bank-utilities-container55">
      <div className="bank-utilities-wrapper55">
        <h2 className="bank-utilities-title55">Here’s how to reach us</h2>

        <div className="bank-utilities-card55">
          <div className="bank-utilities-grid55">
            {bankingOptions.map((option) => (
              <a 
                key={option.id} 
                href={option.path} 
                className="banking-option55 horizontal55"
              >
                <div className="banking-icon55">{option.icon}</div>
                <div className="banking-text55">
                  <h3 className="banking-title55">{option.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BankUtilities55
