// src/components/DonationForm.js
import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    // Implement donation logic using the state value (amount)
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <form>
        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <button type="button" onClick={handleDonate}>
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
