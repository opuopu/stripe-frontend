import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {Elements } from '@stripe/react-stripe-js';
import Chekcout from './checkOut';
export default function index() {

    const stripePromise = loadStripe('pk_test_51JxCs8L9MVzlfyPW6MiDYImUQSwzD002SDhIh1dTDxivUVST8KdjirTamkm2XH1LaWnMIabkFmR1hQGaEOr1kKNQ00AinLagdn');
  return (
 <Elements stripe={stripePromise}>
<Chekcout></Chekcout>
 </Elements>
  )
}
