import { Project } from "../projects";
import "./Card.css";

export default function Card({
  title,
  description,
  languages,
  links: { live, source },
  image,
}: Project) {
  return (
    <div className="card">
      {image && (
        <a href={live} target="new">
          <div
            className="top"
            style={{
              backgroundImage: `url(${image.source})`,
              backgroundPosition: image.position,
            }}
          ></div>
        </a>
      )}
      <div className="bottom">
        <h3>{title}</h3>
        <div className="links">
          <a href={live} target="new">
            Demo
          </a>
          |
          <a href={source} target="new">
            Source
          </a>
        </div>
        <br />
        <div className="description">{description}</div>
        <br />
        <div className="languages">
          {languages.map((lang, index) => (
            <div className="item" key={index}>
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
