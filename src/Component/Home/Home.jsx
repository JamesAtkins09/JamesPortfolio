import React from 'react';
import './Home.css';
import Image from 'next/image';
import Project from '../ProjectSection/Project';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <Image
          src={'/homebackground.svg'}
          alt="home-background"
          width={100}
          height={100}
        />
        <div className="inner-container">
          <div className="home-content-container">
            <h3>Hey, I{"'"}m JAMES ATKINS</h3>
            <p>
              A full stack web developer making interactive websites for your
              business
            </p>
            <button className='btn' >About me</button>
          </div>
        </div>
      </div>
      <Project />
      <Testimonials />
    </section>
  );
};

export default Home;
