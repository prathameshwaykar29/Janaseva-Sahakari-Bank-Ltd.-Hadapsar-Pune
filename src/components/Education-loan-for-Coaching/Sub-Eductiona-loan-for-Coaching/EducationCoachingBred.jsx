
import React from "react";
import bikeImg from "../../../assets/images/Loan/education.png";

const EducationCoachingBred = () => {

    const scrollToCalculator = () => {
        const section = document.getElementById("calculator");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full bg-gradient-to-r from-[#fff7f0] via-[#ffe7d4] to-[#fef3e8] pt-10">
            <div className="max-w-[1200px] mx-auto px-4 lg:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

                    {/* LEFT SIDE */}
                    <div>
                       <h1 className="text-3xl lg:text-6xl font-bold text-[#1e3163] leading-tight mb-4">
    Education Loan 
    <span className="block text-[#c9a84c] text-4xl mt-1">
        Coaching & Skill Development
    </span>
</h1>

<p className="text-gray-600 text-lg leading-relaxed mb-4">
    Loan facility to support coaching classes and professional training for students.
</p>
                        {/* <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex flex-col sm:flex-row items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500">Interest Rate</p>
                <h3 className="text-3xl font-bold text-[#1e3163]">10% – 10.50%</h3>
              </div>

              <div className="text-right mt-2 sm:mt-0">
                <p className="text-sm text-gray-500">Loan Tenure</p>
                <h3 className="text-xl font-semibold text-[#1e3163]">Up to 48 Months</h3>
              </div>
            </div> */}

                        <div className="flex flex-wrap gap-4 mb-4">

                            <button className="bg-[#1e3163] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                                Apply Now
                            </button>

                            <button
                                onClick={scrollToCalculator}
                                className="border bg-white border-[#1e3163] text-[#1e3163] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 transition duration-300"
                            >
                                Calculate EMI
                            </button>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center -mb-0 lg:-mb-0">
                        <img
                            src={bikeImg}
                            alt="Education-loan-for-Coaching"
                            className="w-[280px] sm:w-[350px] lg:w-[400px] object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EducationCoachingBred;