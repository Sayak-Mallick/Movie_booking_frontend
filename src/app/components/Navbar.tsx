import Link from 'next/link';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-yellow-200 text-black flex justify-between items-center p-4">
      <div className="flex items-center left">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-8 mr-2"
        />
        <div className="flex items-center bg-white rounded-md p-2 ml-2 w-80">
          <BiSearch className="text-yellow-200 text-lg" />
          <input type="text" placeholder="Search For a Movie" className="outline-none ml-2" />
        </div>
      </div>
      <div className="flex items-center right">
        <p className="flex items-center mr-4 cursor-pointer">
          <RiArrowDropDownFill className="text-lg" />
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">
          Logout
        </button>
        <Link href="/profile" passHref>
          <BiUserCircle className="text-lg w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};
