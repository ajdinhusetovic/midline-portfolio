import { pageMetadata } from "@/lib/metadata";
import TeamProfiles from "@/components/TeamProfiles";
import StudioCTA from "@/components/StudioCTA";
export const metadata = pageMetadata(
  "The studio",
  "Meet Ajdin and Mile, the people behind Midline Code’s web design, creative marketing, and social media services for US businesses.",
  "/about-us",
);
export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="page-shell wrap">
        <header className="page-intro">
          <p className="eyebrow">The people behind the pixels</p>
          <h1 className="page-title">
            Two perspectives.
            <br />
            <span className="serif accent">One connected studio.</span>
          </h1>
          <p className="lead">
            Good design, thoughtful development, and a clear marketing direction
            belong together. We built Midline Code to give small businesses a
            more personal way to get all three.
          </p>
        </header>
        <div className="team-section">
          <div>
            <h2 className="section-title">
              Your business is personal.
              <br />
              <span className="serif">So is our approach.</span>
            </h2>
            <p className="lead mt-6">
              You work directly with the people creating your work. Ajdin brings
              the web development perspective. Mile brings marketing, social
              media, and coordination. Together, we help your business show up
              consistently.
            </p>
            <p className="muted leading-8 mt-5">
              North Carolina is our base for client coordination and local
              networking. Our collaboration happens across the USA, with remote
              communication and clear project checkpoints.
            </p>
          </div>
          <TeamProfiles />
        </div>
      </div>
      <StudioCTA />
    </main>
  );
}
