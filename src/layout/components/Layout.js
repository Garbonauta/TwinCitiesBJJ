import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'typeface-source-sans-pro';

import { Helmet } from 'react-helmet';

import { NavBar } from 'app/NavBar';
import { MobileNavContainer } from 'app/MobileNav';
import {
  ImageGalleryContextProvider,
  ImageGalleryContainer,
} from 'app/ImageGallery';
import { Footer } from 'app/Footer';

import GlobalStyleContainer from '../containers/GlobalStyleContainer';
import LayoutContextProvider from '../context/LayoutContextProvider';

const Layout = ({ children, courseDropdownData }) => (
  <Fragment>
    <Helmet titleTemplate="%s | Twin Cities BJJ">
      <html lang="en" amp />
    </Helmet>
    <LayoutContextProvider courseDropdownData={courseDropdownData}>
      <GlobalStyleContainer />
      <ImageGalleryContextProvider>
        <NavBar />
        <MobileNavContainer />
        <ImageGalleryContainer />
        {children}
      </ImageGalleryContextProvider>
    </LayoutContextProvider>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  courseDropdownData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Layout;