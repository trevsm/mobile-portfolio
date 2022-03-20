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
          <h1>Hey! 👋</h1>
          <h1>I&apos;m Trevor,</h1>
          <p>
            Software Engineer @ <a href="https://lifeomic.com/">Lifeomic</a>
          </p>
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
      <br />
      <div>
        <div className="about section">
          <h2>A little about me...</h2>
          <div className="description">
            <p>
              I am a senior at Weber State University pursuing a bachelor&apos;s
              degree in Computer Science.{" "}
              <span style={{ opacity: ".4" }}>(Spring 2024)</span> <br /> <br />
              Right now, I&lsquo;m into{" "}
              <span className="interest" style={{ background: "#c0f0ff" }}>
                typescript
              </span>
              ,{" "}
              <span className="interest" style={{ background: "#ffd6dc" }}>
                react
              </span>
              , and{" "}
              <span className="interest" style={{ background: "#cefdd2" }}>
                three.js
              </span>
            </p>
          </div>
        </div>
        <br />
        <div className="projects section">
          <h2>Projects</h2>
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
