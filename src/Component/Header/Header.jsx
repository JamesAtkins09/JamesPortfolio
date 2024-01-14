import Image from 'next/image';
import './Header.css';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="header-container">
      <div className="inner-header-container">
        <Link href={'/'} className="logo-container">
          <Image src="/avatar.svg" alt="" width={50} height={50} />
          <h3>James</h3>
        </Link >
        <div className="nav-container">
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About </Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
