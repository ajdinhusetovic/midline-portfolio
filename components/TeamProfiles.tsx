export default function TeamProfiles() {
  return (
    <div className="team-profiles">
      <article className="team-profile">
        <span className="avatar" aria-hidden="true">
          AH
        </span>
        <div>
          <h3>Ajdin Husetovic</h3>
          <p className="role">Web design & development</p>
          <p>
            Ajdin leads the technical side of MidlineCode, bringing websites to
            life through design, development, and implementation. He focuses on
            building functional, responsive websites that make it easy for
            customers to interact with your business.
          </p>
        </div>
      </article>
      <article className="team-profile">
        <span className="avatar" aria-hidden="true">
          MC
        </span>
        <div>
          <h3>Mile Cristobal</h3>
          <p className="role">Marketing, social media & client coordination</p>
          <p>
            Mile leads marketing, social media, and creative content, while
            managing client communication and project coordination. She works
            closely with businesses to bring their ideas to life through
            content, visuals, and thoughtful marketing.
          </p>
        </div>
      </article>
    </div>
  );
}
