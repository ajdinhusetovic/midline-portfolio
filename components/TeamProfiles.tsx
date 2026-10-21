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
            Ajdin brings your website to life, from design implementation and
            development to responsive behavior and launch. He focuses on clear
            experiences that work for your customers.
          </p>
        </div>
      </article>
      <article className="team-profile">
        <span className="avatar" aria-hidden="true">
          MC
        </span>
        <div>
          <h3>Mile Cristo</h3>
          <p className="role">Marketing, social media & client coordination</p>
          <p>
            Based in North Carolina, Mile shapes marketing and social content,
            supports client communication, and keeps projects connected to your
            business goals.
          </p>
        </div>
      </article>
    </div>
  );
}
