/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect,useState}  from 'react'
import { useStripe,CardElement,useElements,Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

import React from 'react'

export default function Chekcout() {
    const stripe = useStripe();
    const [clientSecret,setClientSecret] = useState<string | null>()
    const [error,seterror] =  useState<any>()
    const elements = useElements();
const total = 5000

useEffect(() => {
 if(total){
    const fetchData = async () => {
        try {
          const response = await axios.post(
            'http://localhost:3000/create-payment-intent',
            {
              total: JSON.stringify(total)
            }
          );
  setClientSecret(response.data.clientSecret)
          // Handle the response data as needed
        } catch (error) {
          console.error("Error making POST request:", error);
          // Handle errors here
        }
      };
      fetchData();
 }

   
  }, [total]); // Include total in the dependency array if you want to trigger the effect when total changes
    
    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
        
          const  {paymentIntent,error:paymentIntentError} = await stripe
          .confirmCardPayment(clientSecret!, {
            payment_method: {
              card: card,
              billing_details: {
                name: 'Jenny Rosen',
              },
            },
          })
          console.log(paymentIntent)
         

    }

  return (
  
    <>

    <form onSubmit={handleSubmit}>
      <div style={{
        width:'600px',
       
      }}>
      <CardElement
        options={{
          style: {
  
            base: {
              fontSize: '16px',
     
              color: '#424770',

              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            
            },
          },
        }}
      />
      </div>
      <button  type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>

  </>  )
}
