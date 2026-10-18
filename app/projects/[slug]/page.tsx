import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/app/components/Icon";
import projects from "@/app/data/projects.json";
import "@/app/styles/project.css";

const SLOT_COLOR: Record<string, string> = {
  lavender: "var(--lavender-300)",
  butter: "var(--honey-400)",
  mint: "var(--sage-400)",
};

const BADGE_TONE: Record<string, string> = {
  common: "",
  rare: "cz-badge--sky",
  epic: "cz-badge--lavender",
  legendary: "cz-badge--honey",
};

const findProject = (slug: string) => projects.find((p) => p.id === slug);

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};
  return { title: `${project.title} · The Workshop Shelf`, description: project.description };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  const rarity = project.rarity ?? "common";
  const hasLink = project.href && project.href !== "#";
  const techs = project.tech.split("·").map((t) => t.trim());

  return (
    <main className="project">
      <nav className="cz-crumbs project__crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
            <span className="cz-crumbs__steps" aria-hidden="true">
              <Icon name="paw" size={14} />
              <Icon name="paw" size={14} />
            </span>
          </li>
          <li>
            <Link href="/#shelf-title">Workshop</Link>
            <span className="cz-crumbs__steps" aria-hidden="true">
              <Icon name="paw" size={14} />
              <Icon name="paw" size={14} />
            </span>
          </li>
          <li aria-current="page">{project.title}</li>
        </ol>
      </nav>

      <header className="project__head">
        <span className={`cz-badge cz-badge--pixel ${BADGE_TONE[rarity]}`}>{rarity} item</span>
        <h1 className="project__title">{project.title}</h1>
        <p className="project__lede">{project.description}</p>
        <ul className="project__tags" aria-label="Stack">
          {techs.map((t) => (
            <li key={t} className="cz-badge cz-badge--sage">{t}</li>
          ))}
          <li className="cz-badge">{project.category}</li>
        </ul>
      </header>

      <div className="project__body">
        <figure
          className="cz-polaroid project__shot"
          style={{ "--cz-tilt": "-2deg" } as React.CSSProperties}
        >
          {project.thumbnail.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="cz-polaroid__img project__shot-img"
              src={project.thumbnail.image}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
            />
          ) : (
            <div
              className="cz-polaroid__img project__shot-img project__shot-art"
              style={{ background: SLOT_COLOR[project.thumbnail.color] }}
              role="img"
              aria-label={`Illustration for ${project.title}`}
            >
              <Icon name={project.thumbnail.icon} size={96} />
            </div>
          )}
          <figcaption className="cz-polaroid__cap">{project.title}</figcaption>
        </figure>

        <section className="cz-card cz-card--parchment project__notes" aria-labelledby="notes-title">
          <h2 id="notes-title" className="cz-card__title">About this item</h2>
          <p className="cz-card__body">{project.description}</p>
          <dl className="cz-item__stats project__stats">
            <dt>Stack</dt>
            <dd>{project.tech}</dd>
            <dt>Type</dt>
            <dd>{project.category}</dd>
            <dt>Rarity</dt>
            <dd>{rarity}</dd>
          </dl>
          <div className="project__actions">
            {hasLink && (
              <a className="cz-btn cz-btn--primary" href={project.href} target="_blank" rel="noreferrer">
                Visit project <Icon name="arrow" size={18} />
              </a>
            )}
            <Link className="cz-btn cz-btn--ghost" href="/#shelf-title">
              Back to the shelf
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
