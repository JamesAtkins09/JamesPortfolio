import Image from 'next/image';
import React from 'react';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <Image
          src={'/homebackground.svg'}
          alt="home-background"
          width={100}
          height={100}
        />
        <div className="about-inner-container">
          <div className="about-content-container">
            <h3 className='page-title' >About ME</h3>
          <div className="about-details-split">

            <div className="about-user-details">

            <p>Greetings! I'm James, a seasoned Full Stack Web Developer collaborating with global agencies to craft high-performance, interactive websites compatible across all platforms.</p>

<p>With a penchant for backend development, I seamlessly blend technologies to create comprehensive websites. My toolkit primarily comprises HTML, CSS, C#, React, and JavaScript. While backend work resonates with me, I'm adept at handling entire web projects independently.</p>

<p>My coding journey commenced at the young age of 13, with a focal point on cybersecurity. This early passion has evolved into a diverse skill set, honed through continual learning and hands-on experience. I'm currently expanding my expertise in software engineering to ensure my skills remain at the forefront of technological advancements.</p>

<p>Beyond professional engagements, I allocate time to coding side projects, ensuring my skills remain sharp and adaptive. The world of software engineering continually fascinates me, motivating me to delve deeper into its intricacies.</p>

<p>Let's collaborate to bring your digital visions to life, creating engaging web experiences that resonate across platforms. Reach out, and let's embark on this exciting coding journey together!</p>
<p>
Best regards,
James
</p>
</div>

<div className="about-skill-details">
  <div className="skill">HTML </div>
  <div className="skill">CSS </div>
  <div className="skill">Javascript </div>
  <div className="skill">React </div>
  <div className="skill">SASS </div>
  <div className="skill">GIT </div>
  <div className="skill">Github </div>
  <div className="skill">Responsive Design </div>
  <div className="skill">SEO </div>
  <div className="skill">Terminal</div>
  <div className="skill">Express Basics</div>
  <div className="skill">SQL Basics</div>
</div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
