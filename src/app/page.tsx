import { Nav } from "@/ui/nav";
import { Footer } from "@/ui/footer";
export default function Home() {
  return (
    <div className="body flex flex-col bg-canvas min-h-screen">
      <Nav />
      <main className="main px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="hero flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="hero-image flex-shrink-0">
            <img src="/tarin--green.png" alt="Tarin" className="w-60 h-60" />
          </div>
          <div className="hero-body my-auto">
            <h1 className="hero-title text-4xl font-bold inline">hi, i'm tarin!</h1>
            <p className="hero-text ml-2 inline">
              i am a cross-functional product engineer and technical leader with a deep understanding of people problems, from team dynamics to empathy for our users. i lead workshops and events across diverse communities to demystify technology and empower my audiences. i have a passion for social impact, particularly women in tech and how tech can– and must – be a lever for social good.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
