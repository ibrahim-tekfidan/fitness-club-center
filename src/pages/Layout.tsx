import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
