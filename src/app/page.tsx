import { Nav } from "@/ui/nav";
import { Footer } from "@/ui/footer";
import { CardSection } from "@/ui/card-section";
import { Divider } from "@/ui/divider";
import { advisingExperienceCards, speakerExperienceCards, techExperienceCards } from "@/constants/experience";
import { Bubble } from "@/ui/theming";

export default function Home() {
  return (
    <div className="body flex flex-col gap-8 bg-canvas min-h-screen">
      <Nav />
      <main className="main px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="hero flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="hero-image flex-shrink-0">
            <Bubble/>
          </div>
          <div className="hero-body my-auto">
            <h1 className="hero-title text-4xl font-bold inline">Hi, I&apos;m Tarin!</h1>
            <p className="hero-text ml-2 inline">
              I am a cross-functional product engineer and technical leader with a deep understanding of people problems, from team dynamics to empathy for our users. I lead workshops and events across diverse communities to demystify technology and empower my audiences. I have a passion for social impact, particularly women in tech and how tech can— and must — be a lever for social good.
            </p>
          </div>
        </div>
      </main>
      <Divider />
      <CardSection title="Technical Product Leader" cards={techExperienceCards} />
      <CardSection title="Community Builder" cards={advisingExperienceCards} />
      <CardSection title="Speaker & Workshop Lead" cards={speakerExperienceCards} />
      <Footer />
    </div>
  );
}
