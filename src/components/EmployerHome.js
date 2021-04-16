import React, { Fragment } from 'react';
import Footer from './Footer';
import EmployerHero from './EmployerHero';
import EmployerHomeContent from './EmployerHomeContent';
import './css/addcandidate.css';

export default function Home() {
  return (
    <Fragment>
      <EmployerHero />
      <EmployerHomeContent />
    </Fragment>
  )
}
