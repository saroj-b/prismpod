import React, { Fragment } from 'react';
import Footer from './Footer';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <HomeContent />
    </Fragment>
  )
}
