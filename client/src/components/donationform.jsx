import React from 'react';
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const DonationPage = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((stripe) => {
        stripe.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  export default Donationform;

  // const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
 const Cart = () => {
   const [state, dispatch] = useStoreContext();

   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);


   // import React, { useEffect } from 'react';//


 const DonationPage = () => {
   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

   useEffect(() => {
     if (data) {
       stripePromise.then((stripe) => {
         stripe.redirectToCheckout({ sessionId: data.checkout.session });
       });
     }
   }, [data]);
 export default Donationpage;

const Donationpage = () => { 
  return (
  <div>
      <h2>Make a Donation</h2>
      <DonationForm />
    </div>
  );
};


export default Donationpage;