import Link from "next/link";

export default function NotFound() {
  return (
  <div className="text-white">
    <main style={{ padding: "2rem" }}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">RETURN</Link>
    </main>
  </div>
  );
}


