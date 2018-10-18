import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_uRCchsBotS4gxt2pHTfFCKGE">
        <div className="example">
          <h1>Complete your payment</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
