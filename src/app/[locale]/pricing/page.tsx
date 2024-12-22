import type { Metadata } from "next";
import { Link } from "../../../i18n/routing";



export const metadata: Metadata = {
  title: "Home | Next.js + TypeScript Example",
};

export default function pricing(): JSX.Element {
  return (
    <ul className="card-list">
      <li>
        <Link
          href="/donate-with-embedded-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Donate with embedded Checkout</h2>
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Donate with hosted Checkout</h2>
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-elements"
          className="card elements-style-background"
        >
          <h2 className="bottom">Donate with Elements</h2>
        </Link>
      </li>
    </ul>
  );
}
