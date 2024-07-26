# razorpay-checkout
This is a wrapper for Razorpay's `checkout.js` library. This library provides functionality of single click checkout.

## Usage
This package provides Typescript types which can be used if you are integrating Razorpay in project that uses Typescript (such as Angular).

Below is a demo in TypeScript adapted from JavaScript.

```ts
class RazorpayDemo {

    makePayment(key: string, razorpayOrderId: string, amount: number) {
        const options: PmtRequest = {
            key: key,
            amount: amount,
            currency: 'INR',
            order_id: razorpayOrderId,
            handler: (response) => this.onPaymentSuccess(response)
        };
        const rzr = new Razorpay(options);
        rzr.on('payment.failed', (errResponse) => this.onPaymentFailure(errResponse));
        rzr.open();
    }

    onPaymentSuccess(response: PmtSuccessResponse) {
        /* code to handle payment success */
    }

    onPaymentFailure(response: PmtFailedResponse) {
        /* code to handle payment failure */
    }

}
```
The original JavaScript demo can be found [here](https://razorpay.com/docs/payment-gateway/web-integration/standard/).


## Disclaimer
I am not the original author of this project. The original code which is in the `src/index.js` (original file name `checkout.js`) file is property of Razorpay. [Original source can be found here](https://razorpay.com/docs/payment-gateway/web-integration/standard/). Also, I am not associated to Razorpay in any way.