import { Section, Avatar, Button, AppCardList } from "ui";
import { profile } from "../data/profile";
import { apps } from "../data/apps";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary-900 to-secondary-800 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Avatar src={profile.avatar} alt={profile.name} size="xl" />
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-xl text-secondary-200">{profile.title}</p>
          <p className="mt-1 text-sm text-secondary-300">{profile.subtitle}</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            {profile.languages.map((lang) => (
              <span key={lang} className="rounded bg-primary-600 px-3 py-1">
                {lang}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/apps" variant="primary" size="lg">
              View Apps
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      <Section id="about" label="About" title="Developer by passion, learner by nature.">
        <p className="text-secondary-100">
          I am Moe Kyaw Aung, a Senior Android Developer focused on building
          high-performance mobile applications with Kotlin, Jetpack Compose,
          and Clean Architecture.
        </p>
      </Section>

      <Section id="apps" label="Collection" title="App Collection">
        <p className="text-secondary-100 mb-6">
          A collection of my senior-level apps and projects.
        </p>
        <AppCardList
          apps={apps.map((a) => ({
            icon: a.icon,
            title: a.title,
            description: a.description,
            link: a.link,
            image: a.image,
          }))}
        />
      </Section>
    </div>
  );
}
