export interface Prefill {
  name?: string;
  email?: string;
  contact?: string;
}

export interface Theme {
  color?: string;
}

export interface PmtRequest {
  /**
   * The Key ID generated from the Dashboard.
   */
  key: string;

  amount: number;

  currency: string;

  order_id: string;

  handler: (response: PmtSuccessResponse) => void;

  /**
   * Description of the transaction.
   */
  description?: string;

  name?: string;

  image?: string;

  notes?: { [key: string]: string };

  theme?: Theme;

  prefill?: Prefill;
}

export interface PmtError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
}

export interface PmtSuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface PmtFailedResponse {
  error: PmtError;
  metadata: any;
}

export declare class Razorpay {
  constructor(request: PmtRequest);

  open: () => void;

  on: (
    eventName: string,
    callback: (response: PmtFailedResponse) => void
  ) => void;
}
