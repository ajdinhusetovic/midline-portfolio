const steps = [
  [
    "Get to know you",
    "We talk about your business, audience, and what you need your next chapter to look like.",
  ],
  [
    "Make a clear plan",
    "We agree on deliverables, timing, revisions, and pricing before any work begins.",
  ],
  [
    "Create, then collaborate",
    "We design, build, or produce your content, with your feedback at agreed checkpoints.",
  ],
  [
    "Launch & look ahead",
    "We deliver the work, review the next steps, and agree on ongoing support if you need it.",
  ],
];
export default function OurProcess() {
  return (
    <section className="section wrap process" id="our-process">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="section-title">
            Less back-and-forth.
            <br />
            <span className="serif">More moving forward.</span>
          </h2>
        </div>
        <p>
          A collaborative process with clear expectations, whether we’re
          building your site or planning your next month of content.
        </p>
      </div>
      <div className="process-grid">
        {steps.map(([title, text], i) => (
          <article className="process-step" key={title}>
            <span>0{i + 1} /</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
