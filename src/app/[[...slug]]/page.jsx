import "../styles/global.css";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["blog"] },
    { slug: ["about"] },
    { slug: ["contact"] },
    { slug: ["profile"] },
    { slug: ["products"] },
    { slug: ["posts"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}
