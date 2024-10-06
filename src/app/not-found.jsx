import Link from "next/link";
import "./styles/global.css";

export default function NotFoundPage() {
  return (
    <div
      className="not-found-section"
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back home
      </Link>
    </div>
  );
}
