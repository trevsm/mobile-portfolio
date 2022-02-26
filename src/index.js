import { render } from "react-dom";
import { projects } from "./projects";
import * as urls from "@trevsm/urls";
import "./styles.css";

function App() {
  return (
    <div class="center">
      <div class="intro section">
        <div>
          <h1>Hello.</h1>
          <h1>I'm Trevor,</h1>
          <p>Software Engineer</p>
        </div>
        <div class="quick_links">
          <ul>
            <li>
              <a href="./Trevor_Smith.pdf" target="new">
                Resume
              </a>
            </li>
            <li>
              <a href={urls.github.url}>Github</a>
            </li>
            <li>
              <a href={urls.social.linkedin.url}>Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="about section">
          <h2>&#8250; About</h2>
          <div class="description">
            <p>
              Hey! I'm Trevor Smith. <br />I am a senior at Weber State
              University pursuing a bachelor's degree in Computer Science. (Dec
              2022)
            </p>
            <p>I am also a Software Engineer for LifeOmic</p>
          </div>
        </div>
        <div class="projects section">
          <h2>&#8250; Projects</h2>
          <div class="project_list">
            {projects.map((p) => (
              <div className="card">
                <h3>
                  {p.links.live ? (
                    <a href={p.links.live}>{p.title}</a>
                  ) : (
                    p.title
                  )}
                </h3>
                <div className="description">{p.description}</div>
                <div className="languages">
                  {p.languages.map((lang, index) => (
                    <div className="item" key={index}>
                      {lang}
                    </div>
                  ))}
                </div>
                <div className="links">
                  {p.links.source ? <a href={p.links.source}>Source</a> : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
