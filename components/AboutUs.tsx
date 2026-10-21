import Link from "next/link";
import TeamProfiles from "./TeamProfiles";
export default function AboutUs() {
  return (
    <section className="section wrap team-section">
      <div>
        <p className="eyebrow">Small studio. Personal investment.</p>
        <h2 className="section-title">
          Real people.
          <br />
          <span className="serif">On your side.</span>
        </h2>
        <p className="lead mt-6">
          We’re Ajdin and Mile. Together, we connect the technical and creative
          sides of showing up online, with direct communication from start to
          finish.
        </p>
        <Link className="text-link mt-6" href="/about-us">
          Get to know the studio <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <TeamProfiles />
    </section>
  );
}
