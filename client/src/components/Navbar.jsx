import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-1 flex-initial justify-center items-center">
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>
      <ul className={`text-white md:flex hidden list-none flex-row justify-between items-center flex-initial`}>
        {["Marker", "Exchange", "Tutorials", "Wallets"].map((item, index) =>
          <NavbarItem key={item + index} title={item} />
        )}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className='flex relative md:hidden'>
        {
          toggleMenu
            ? <AiOutlineClose fontSize={28} className='text-white cursor-pointer' onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4 fontSize={28} className='text-white cursor-pointer' onClick={() => setToggleMenu(true)} />
        }
      </div>
      {toggleMenu && (
        <ul className="absolute top-16 right-0 bg-gray-800 text-white w-48 list-none flex flex-col items-center rounded-lg shadow-lg md:hidden">
          {["Marker", "Exchange", "Tutorials", "Wallets"].map((item, index) =>
            <NavbarItem key={item + index} title={item} classProps="py-2 px-4" />
          )}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
