import { render } from "react-dom";
import { projects } from "./projects";
import Card from "./components/Card";
import * as urls from "@trevsm/urls";
import "./styles.css";

function App() {
  return (
    <div className="center">
      <div className="intro section">
        <div>
          <h1>Hello.</h1>
          <h1>I&apos;m Trevor,</h1>
          <p>Software Engineer</p>
        </div>
        <div className="quick_links">
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
        <div className="about section">
          <h2>&#8250; About</h2>
          <div className="description">
            <p>
              Hey! I&apos;m Trevor Smith. <br />I am a senior at Weber State
              University pursuing a bachelor&apos;s degree in Computer Science.
              (Dec 2022)
            </p>
            <p>I am also a Software Engineer for LifeOmic</p>
          </div>
        </div>
        <div className="projects section">
          <h2>&#8250; Projects</h2>
          <div className="project_list">
            {projects.map((p, key) => (
              <Card {...p} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
