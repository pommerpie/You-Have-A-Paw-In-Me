// src/pages/DonationPage.js
import React from 'react';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';


const DonationPage = () => {
  // Implement donation payment logic here
  return (
    <div>
      <h2>Make a Donation</h2>
      {/* Add donation payment form */}
    </div>
  );
};

const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
export default DonationPage;

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const Cart = () => {
  const [state, dispatch] = useStoreContext();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);



  // import React, { useEffect } from 'react';//
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
export default DonationPage;


  // Make sure to replace QUERY_CHECKOUT with the actual query if it's defined elsewhere.



