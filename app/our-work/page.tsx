import FeaturedWork from "@/components/FeaturedWork";
import StudioCTA from "@/components/StudioCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected work & results",
  "Explore Midline Code website projects and the Savory Southern social media case study: 39.85% audience growth over four months.",
  "/our-work",
);
export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-shell wrap work-page-intro">
        <div className="page-intro">
          <p className="eyebrow">Selected work & results</p>
          <h1 className="page-title">
            A little of our work.
            <br />
            <span className="serif accent">A lot of intention.</span>
          </h1>
          <p className="lead">
            A live business website, a restaurant concept, and a social media
            growth story. Different projects, connected by thoughtful
            presentation and a clear purpose.
          </p>
        </div>
      </header>
      <div className="pb-24">
        <FeaturedWork full />
      </div>
      <StudioCTA />
    </main>
  );
}
