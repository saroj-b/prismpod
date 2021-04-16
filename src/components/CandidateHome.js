import React, { Fragment } from 'react';
import Footer from './Footer';
import CandidateHero from './CandidateHero';
import CandidateHomeContent from './CandidateHomeContent';
import './css/addcandidate.css';

export default function Home() {
  return (
    <Fragment>
      <CandidateHero />
      <CandidateHomeContent />
    </Fragment>
  )
}