import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import about from "@/app/data/about.json";
import projects from "@/app/data/projects.json";
import "@/app/styles/about.css";

export const metadata: Metadata = {
  title: "About · The Workshop Shelf",
  description: "Meet the maker behind the workshop.",
};

// Tools used across the shelf, de-duplicated from the project data.
const stack = [...new Set(projects.flatMap((p) => p.tech.split("·").map((t) => t.trim())))];

export default function AboutPage() {
  return (
    <main className="about">
      <section className="cz-scene cz-grain about__scene" aria-labelledby="about-title">
        <div className="about__plate">
          <h1 id="about-title" className="about__title">About</h1>
          <p className="about__tag">{about.tag}</p>
        </div>
        <div className="about__hill" aria-hidden="true" />
      </section>

      <div className="about__sheet">
        <figure
          className="cz-polaroid about__photo"
          style={{ "--cz-tilt": "-3deg" } as React.CSSProperties}
        >
          {about.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="cz-polaroid__img about__photo-img"
              src={about.photo}
              alt={about.photoAlt}
              loading="lazy"
            />
          ) : (
            <div
              className="cz-polaroid__img about__photo-img about__photo-art"
              role="img"
              aria-label="Illustration placeholder for Randal's photo"
            >
              <Icon name="paw" size={72} />
            </div>
          )}
          <figcaption className="cz-polaroid__cap">{about.photoCaption}</figcaption>
        </figure>

        <div className="about__text">
          <section className="cz-dialogue about__dialogue" aria-label={`${about.speaker} says`}>
            <div className="about__dialogue-body">
              <div className="cz-dialogue__name">{about.speaker}</div>
              <p className="cz-dialogue__text">{about.paragraph}</p>
            </div>
            <span className="cz-dialogue__more" aria-hidden="true">▼</span>
          </section>

          <section className="cz-card cz-card--parchment" aria-labelledby="kit-title">
            <h2 id="kit-title" className="cz-card__title">In my toolbox</h2>
            <ul className="about__tags" aria-label="Tools used on the shelf">
              {stack.map((t) => (
                <li key={t} className="cz-badge cz-badge--sage">{t}</li>
              ))}
            </ul>
          </section>

          <Link className="cz-btn cz-btn--primary about__cta" href="/#shelf-title">
            See what I&rsquo;ve made <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
