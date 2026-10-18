import "@/app/styles/project.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="project">
      <section className="cz-card cz-card--parchment" aria-labelledby="lost-title">
        <h1 id="lost-title" className="cz-card__title">Oops, you wandered off the map!</h1>
        <p className="cz-card__body">That item isn&rsquo;t on the shelf. Let&rsquo;s head back.</p>
        <div className="project__actions">
          <Link className="cz-btn cz-btn--primary" href="/">Go home</Link>
        </div>
      </section>
    </main>
  );
}
