import Image from 'next/image';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="left-footer-container">
          <h3>JAMES ATKINS</h3>
          <p>
            A full stack web developer making interactive websites for your
            business
          </p>
          <button className='btn' >Contact</button>
        </div>
        <div className="right-footer-container">
          <h3>Social</h3>
          <div>
            <Image
              src={'/linkedin.svg'}
              alt="linkedin"
              width={20}
              height={20}
            />
            <Image
              src={'/github.svg'}
              alt="facebook"
              width={20}
              height={20}
            />
            <Image
              src={'/twitter.svg'}
              alt="twitter"
              width={20}
              height={20}
            />
            <Image
              src={'/computer.svg'}
              alt="instagram"
              width={20}
              height={20}
            />
            <Image
              src={'/youtube.svg'}
              alt="instagram"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
