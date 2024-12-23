import type { Metadata } from "next";
import CheckoutForm from "../components/Pricing/Stripe/CheckoutForm";

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function IndexPage({
  params,
}: {
  params: { locale?: string };
}): Promise<JSX.Element> {
  const locale = (await params?.locale) || "en";

  return (
    <div className="font-sans p-6 dark:bg-gray-50 min-h-screen items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Pro Membership</h2>
        <p className="text-gray-700 text-lg mb-6">
          Upgrade to Pro and unlock exclusive features to boost your skills and productivity.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-800 text-base">Access to premium tutorials</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-800 text-base">Weekly live Q&A sessions</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-800 text-base">Priority support</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-800 text-base">Exclusive downloadable resources</span>
          </li>
        </ul>

        
      </div>
      <CheckoutForm
        uiMode="hosted"
        locale={locale}
        clientSecret="clientSecret"
      />
    </div>
  );
}



