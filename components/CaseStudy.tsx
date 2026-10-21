import Link from "next/link";
export default function CaseStudy({ full = false }: { full?: boolean }) {
  return (
    <section
      id="savory-southern"
      className="case-panel"
      aria-label="Savory Southern social media case study"
    >
      <div className="case-copy">
        <p className="eyebrow">Social media / Savory Southern</p>
        <h3>
          A small audience.
          <br />A meaningful step forward.
        </h3>
        <p>
          Starting with 650 followers in June, we focused on audience alignment
          and consistent content delivery. Four months later, the account
          reached 909 followers.
        </p>
        {full ? (
          <p>
            The work centered on a clearer audience focus and a consistent
            publishing rhythm. The result: 259 additional followers and 39.85%
            total audience growth over the reporting period.
          </p>
        ) : (
          <Link className="text-link" href="/our-work#savory-southern">
            A closer look at the results <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <div className="case-chart">
        <strong>
          39.85<span className="serif">%</span>
        </strong>
        <p>Total audience growth over four months</p>
        <div
          className="growth-bars"
          role="img"
          aria-label="Follower count increased from 650 to 909, a gain of 259 followers"
        >
          <div className="growth-bar">
            <span>650</span>
          </div>
          <div className="growth-bar">
            <span>909</span>
          </div>
        </div>
        <div className="chart-labels">
          <span>JUNE / STARTING AUDIENCE</span>
          <span>FOUR MONTHS LATER</span>
        </div>
        <p className="case-fineprint">
          Reporting window: four months from the June baseline. Growth
          calculated from 650 to 909 followers using the studio’s account
          reporting.
        </p>
      </div>
    </section>
  );
}
