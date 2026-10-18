import Icon from "@/app/components/Icon";
import Link from "next/link";
type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    icon: string;
    color: string;
    image: string | null;
  };
  tech: string;
  category: string;
  href: string;
  rarity?: string; // common | rare | epic | legendary
};

/* thumbnail.color -> palette token for the item slot */
const SLOT_COLOR: Record<string, string> = {
  lavender: "var(--lavender-300)",
  butter: "var(--honey-400)",
  mint: "var(--sage-400)",
};

export default function ProjectCard({ project }: { project: Project }) {
  const rarity = project.rarity ?? "common";

  return (
    <li className="shelf__slot">
      <Link
        href={`/projects/${project.id}`}
        className={`cz-item cz-item--${rarity} shelf__item`}
        aria-label={`Inspect ${project.title}, ${rarity} item`}
      >
        <span
          className="cz-item__slot"
          aria-hidden="true"
          style={{ background: SLOT_COLOR[project.thumbnail.color] }}
        >
          {project.thumbnail.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="shelf__thumb"
              src={project.thumbnail.image}
              alt=""
              loading="lazy"
            />
          ) : (
            <Icon name={project.thumbnail.icon} size={48} />
          )}
        </span>
        <span className="cz-item__rarity">{rarity}</span>
        <h3 className="cz-item__name">{project.title}</h3>
        <p className="shelf__summary">{project.description}</p>
        <dl className="cz-item__stats">
          <dt>Stack</dt>
          <dd>{project.tech}</dd>
          <dt>Type</dt>
          <dd>{project.category}</dd>
        </dl>
        <span className="cz-item__cta" aria-hidden="true">
          Inspect <Icon name="arrow" size={16} />
        </span>
      </Link>
    </li>
  );
}
