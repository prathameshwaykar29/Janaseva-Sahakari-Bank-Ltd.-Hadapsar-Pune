// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import BGCase11 from '../../assets/images/case/case-1-144.png';
// import BGCase12 from '../../assets/images/case/case-1-244.png';
// import BGCase13 from '../../assets/images/case/case-1-444.png';
// import BGCase14 from '../../assets/images/case/case-1-244.png';
// import BGCase15 from '../../assets/images/case/case-1-244.png';
// import BGCase16 from '../../assets/images/case/case-1-244.png';

// const Study = () => {
//     const caseStudies = [
//   {
//     image: BGCase11,
//     title: 'Home Loan',
//     category: 'Loans',
//   },
//   {
//     image: BGCase12,
//     title: 'Gold Loan',
//     category: 'Loans',
//   },
//   {
//     image: BGCase16,
//     title: 'Business Loan',
//     category: 'Loans',
//   },
//   {
//     image: BGCase13,
//     title: 'Personal Loan',
//     category: 'Loans',
//   },
//   {
//     image: BGCase14,
//     title: 'Car Loan',
//     category: 'Loans',
//   },
//   {
//     image: BGCase15,
//     title: 'Education Loan',
//     category: 'Loans',
//   }
// ];


//     const sliderFeatureOptions = {
//         loop: true,
//         items: 1,
//         navText: [
//             "<span className='slider-one__carousel__btn__left'></span>",
//             "<span className='slider-one__carousel__btn__left'></span>",
//         ],
//         margin: 30,
//         dots: true,
//         nav: true,
//         animateOut: 'slideOutDown',
//         animateIn: 'fadeIn',
//         smartSpeed: 1000,
//         autoplay: true,
//         responsive: {
//             0: {
//                 margin: 0,
//                 items: 1,
//             },
//             576: {
//                 margin: 30,
//                 items: 1,
//             },
//             768: {
//                 margin: 30,
//                 items: 2,
//             },
//             992: {
//                 margin: 30,
//                 items: 3,
//             },
//             1200: {
//                 margin: 30,
//                 items: 4,
//             },
//         },
//     };

//     return (
//         <>
//             <section className="case-one pb-80 pt-80">
//                 <div className="container-fluid">
//                     <div className="block-title text-center">
//                         <p className="block-title__tagline">case study</p>
//                         <h2 className="block-title__title blue-color-demo">Discover our featured <br /> work studies</h2>
//                     </div>
//                     <div className="case-one__carousel">
//                         <Swiper  {...sliderFeatureOptions} slidesPerView={4} spaceBetween={30}>
//                             {caseStudies.map((caseStudy, index) => (
//                                 <SwiperSlide className="item" key={index}>
//                                     <div className="case-card-one">
//                                         <Link to="/servicedetails" className="case-card-one__link">
//                                             <i className="fa fa-plus"></i>
//                                         </Link>
//                                         <div className="case-card-one__image" style={{ backgroundImage: `url(${caseStudy.image})` }}></div>
//                                         <div className="case-card-one__content">
//                                             <h3 className="case-card-one__title">
//                                                 <Link to="#">{caseStudy.title}</Link>
//                                             </h3>
//                                             <p className="case-card-one__text">{caseStudy.category}</p>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Study;






import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import BGCase11 from '../../assets/images/home/home.png';
import BGCase12 from '../../assets/images/home/gold.png';
import BGCase13 from '../../assets/images/case/case-1-144.png';
import BGCase14 from '../../assets/images/home/car.png';
import BGCase15 from '../../assets/images/home/education.png';
import BGCase16 from '../../assets/images/home/bussiness.png';

const Study = () => {
    const caseStudies = [
        {
            image: BGCase11,
            title: 'Home Loan',
            category: '7.85% p.a.',
            link: '/#',
        },
        {
            image: BGCase12,
            title: 'Gold Loan',
            category: '9.85% p.a.',
            link: '/#',
        },
        {
            image: BGCase16,
            title: 'Business Loan',
            category: '10.85% p.a.',
            link: '/#',
        },
        {
            image: BGCase13,
            title: 'Personal Loan',
            category: '9.85% p.a.',
            link: '/#',
        },
        {
            image: BGCase14,
            title: 'Car Loan',
            category: '8.85% p.a.',
            link: '/#',
        },
        {
            image: BGCase15,
            title: 'Education Loan',
            category: '6.85% p.a.',
            link: '/#',
        }
    ];


    const sliderFeatureOptions = {
        loop: true,
        items: 1,
        navText: [
            "<span className='slider-one__carousel__btn__left'></span>",
            "<span className='slider-one__carousel__btn__left'></span>",
        ],
        margin: 30,
        dots: true,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoplay: true,
        responsive: {
            0: {
                margin: 0,
                items: 1,
            },
            576: {
                margin: 30,
                items: 1,
            },
            768: {
                margin: 30,
                items: 2,
            },
            992: {
                margin: 30,
                items: 3,
            },
            1200: {
                margin: 30,
                items: 4,
            },
        },
    };

    return (
        <>
            <section className="case-one pb-80 pt-80">
                <div className="container-fluid">
                    <div className="block-title text-center">
                        <p className="block-title__tagline">Our Loan Products</p>
<h2 className="block-title__title blue-color-demo">
  Explore Our Popular Loan Options
</h2>

                    </div>
                    <div className="case-one__carousel">
                        <Swiper  {...sliderFeatureOptions} slidesPerView={4} spaceBetween={30}>
                            {caseStudies.map((caseStudy, index) => (
                                <SwiperSlide className="item" key={index}>
                                    <div className="case-card-one">
                                        <Link to={caseStudy.link} className="case-card-one__link">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                        <div className="case-card-one__image" style={{ backgroundImage: `url(${caseStudy.image})` }}></div>
                                        <div className="case-card-one__content">
                                            <h3 className="case-card-one__title">
                                                <Link to="#">{caseStudy.title}</Link>
                                            </h3>
                                            <p className="case-card-one__text">{caseStudy.category}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Study;
