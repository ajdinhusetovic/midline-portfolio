import OurProcess from "@/components/OurProcess";
import StudioCTA from "@/components/StudioCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our approach",
  "A small creative studio with direct communication, connected web and marketing services, clear scope, and a collaborative process.",
  "/why-us",
);
const reasons = [
  [
    "Your presence, connected",
    "A website, a social post, and a printed menu should feel like they come from the same business. We consider the whole picture, even when we start with one piece.",
  ],
  [
    "A direct line to the makers",
    "You speak with Ajdin and Mile, the people doing the work. Feedback stays close to the project, with agreed checkpoints and a shared understanding of what comes next.",
  ],
  [
    "Clear scope before we start",
    "Your quote sets out the deliverables, revisions, schedule, and costs. Website projects use a 50% deposit and 50% before launch. Marketing and ongoing services have their own agreed terms.",
  ],
  [
    "Progress you can understand",
    "We focus on clear deliverables and useful reporting. For social media, we review audience and content performance to inform the next steps, without promising a specific follower count or sales result.",
  ],
];
export default function WhyPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="page-shell wrap">
        <header className="page-intro">
          <p className="eyebrow">Our approach</p>
          <h1 className="page-title">
            Thoughtful work.
            <br />
            <span className="serif accent">Straightforward people.</span>
          </h1>
          <p className="lead">
            A good creative partnership should feel clear, collaborative, and
            grounded in your business. Here’s what that means at Midline Code.
          </p>
        </header>
        <div className="principles">
          {reasons.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <OurProcess />
      <StudioCTA />
    </main>
  );
}
