import React from 'react';
import Example from './Example';
import GooglePayButton from 'react-google-pay-button';

export default (props: any) => {
  return (
    <Example title="Email Required">
      <GooglePayButton
        allowedPaymentMethods={[
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                'gateway': 'stripe',
                'stripe:version': '2018-10-31',
                'stripe:publishableKey': 'pk_test_MNKMwKAvgdo2yKOhIeCOE6MZ00yS3mWShu',
              },
            },
          },
        ]}
        merchantInfo={{
          merchantId: '17613812255336763067',
          merchantName: 'Demo Merchant',
        }}
        transactionInfo={{
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: props.amount,
          currencyCode: 'USD',
          countryCode: 'US',
        }}
        emailRequired={true}
        onPaymentDataResult={(paymentRequest: any) => {
          console.log('Success', paymentRequest);
        }}
      />
    </Example>
  );
}
