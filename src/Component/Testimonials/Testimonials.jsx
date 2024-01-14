'use client';
import React from 'react';
import './Testimonials.css';
import ReactSimplyCarousel from 'react-simply-carousel';

const Testimonials = () => {

    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  return (
    <div className="testimonial-container" id="#testimonails" >
      <div className="inner-testimonial-container">
     <div className='testimonial-heading-container' >
       <h3 className="testimonial-heading page-title">Testimonials</h3>
        <p className="testimonial-subheading">
            People I've worked with have said some nice things...
        </p>
     </div>
      <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}


                    forwardBtnProps={{
                        style: {
                            alignSelf: 'center',
                            background: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            border: '1px solid #c1c1c1',
                            color: 'black',
                            cursor: 'pointer',
                            fontSize: '20px',
                            margin: '0 10px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`>`}</span>,

                    }}
                    backwardBtnProps={{

                        style: {
                            alignSelf: 'center',
                            background: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            border: '1px solid #c1c1c1',
                            color: 'black',
                            cursor: 'pointer',
                            fontSize: '20px',
                            margin: '0 10px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`<`}</span>,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: 1,
                            itemsToScroll: 1,
                            maxWidth: 1000,
                            mouseSwipeTreshold: 20,
                            touchSwipeTreshold: 50,
                        },

                    ]}
                    preventScrollOnSwipe={true}
                    
                    speed={400}
                    easing="linear"

                >
                    <div className="testimonial-card-container">
                        <div className="testimonial-card">
                            <div className="user-picture">
                                <img src="/avatar.svg" alt="" />
                            </div>
                            <div className="user-details">
                                <h4>John Doe</h4>
                                <p>CEO of Company</p>
                                </div>
                            <div className="user-quote">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                                </p>
                            </div>
                        </div>
                    </div>

                </ReactSimplyCarousel>
      </div>

    </div>
  );
};

export default Testimonials;
