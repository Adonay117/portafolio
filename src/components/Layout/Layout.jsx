import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="bg-background px-5 scroll-smooth">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
