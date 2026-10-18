import projects from "@/app/data/projects.json";
import ProjectCard from "@/app/components/ProjectCard";
import Icon from "@/app/components/Icon";
import home from "@/app/data/home.json";
import "./styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="cz-scene cz-grain home__scene" aria-label="Welcome">
        {/* Decorative ambience: muted, looping, no sound */}
        <video
          className="home__video"
          src={home.video}
          poster={home.image}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          aria-hidden="true"
        />

        <div className="home__plate">
          <h1 className="home__title">The Workshop Shelf</h1>
          <p className="home__tag">Come in. Look around.</p>
        </div>

        <div className="home__hill" aria-hidden="true" />
      </section>

      <section className="shelf" aria-labelledby="shelf-title">
        <h2 id="shelf-title" className="shelf__head">
          <Icon name="projects" size={32} />
          Things I&rsquo;ve Made
        </h2>
        <p className="shelf__hint">Tip: pick one up to inspect it.</p>
        <ul className="shelf__list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </ul>
      </section>
    </main>
  );
}
