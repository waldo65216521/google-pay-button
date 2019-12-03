import React from 'react';
import Example from './Example';
import GooglePayButton from 'react-google-pay-button';

export default (props: any) => {
  return (
    <Example title="Production Direct">
      <GooglePayButton
        environment="PRODUCTION"
        allowedPaymentMethods={[
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'DIRECT',
              parameters: {
                'protocolVersion': 'ECv2',
                'publicKey': 'BMzk6xvwPgU8vjB6O/HnFFkMQL/w17yIoKy/6KuRYjOrh0eV12xM6guaYPHdgMHyUzTm9/Vi7KRu4tuRmhm6nv8=',
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
        onPaymentDataResult={(paymentRequest: any) => {
          console.log('Success', paymentRequest);
        }}
      />
    </Example>
  );
}