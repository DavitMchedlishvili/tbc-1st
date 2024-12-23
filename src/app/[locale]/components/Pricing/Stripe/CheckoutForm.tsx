"use client";

import React, { useState } from "react";
import { createCheckoutSession } from "../../../../../app/Actions/stripe";

interface CheckoutFormProps {
  uiMode: "hosted";
  locale: string;
  clientSecret: string;
}

export default function CheckoutForm({
  uiMode,
  locale,
}: CheckoutFormProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = async (): Promise<void> => {
    setLoading(true);

    const formData = new FormData();
    formData.append("uiMode", uiMode);
    formData.append("priceId", "price_1QYv2MGEMluTYUId3mOLTf89");
    formData.append("locale", locale);

    const { url } = await createCheckoutSession(formData);

    if (url) {
      window.location.assign(url);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        className="block bg-pink-300 hover:bg-pink-800 transition-all  text-white rounded-md px-10 py-4 mt-6 text-center"
        onClick={formAction}
        disabled={loading}
      >
        Join Now
      </button>
    </>
  );
}