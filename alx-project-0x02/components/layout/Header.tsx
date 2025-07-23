import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/home">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:underline cursor-pointer">About</span>
        </Link>
        <Link href="/posts">
          <span className="hover:underline cursor-pointer">Posts</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
