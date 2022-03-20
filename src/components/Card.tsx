import { Project } from "../projects";

export default function Card({
  title,
  description,
  languages,
  links: { live, source },
}: Project) {
  return (
    <div className="card">
      <h3>{live ? <a href={live}>{title}</a> : title}</h3>
      <div className="description">{description}</div>
      <div className="languages">
        {languages.map((lang, index) => (
          <div className="item" key={index}>
            {lang}
          </div>
        ))}
      </div>
      <div className="links">{source ? <a href={source}>Source</a> : ""}</div>
    </div>
  );
}
