import Link from 'next/link';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-[#F6F5F2] sticky top-0 text-black flex justify-between items-center p-4">
      <div className="flex items-center left">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 mr-2"
          />
        </Link>
        <div className="flex items-center bg-white rounded-md p-2 ml-2 w-80">
          <input
            type="text"
            placeholder="Search For a Movie"
            className="outline-none ml-2"
          />
          <BiSearch className="text-yellow-200 text-lg mx-auto" />
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
