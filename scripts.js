async function getProjects() {
  const data = await fetch("./projects.json").then((r) => r.json());
  return data;
}

const cardElement = ({ title, description, languages, links }) =>
  createElement("div", { className: "card" }, [
    createElement("h3", {}, [
      links.live ? createElement("a", { href: links.live }, title) : title,
    ]),
    createElement("div", { className: "description" }, description),
    createElement("div", { className: "languages" }, [
      ...languages.map((e) => createElement("div", { className: "item" }, e)),
    ]),
    createElement("div", { className: "links" }, [
      links.source ? createElement("a", { href: links.source }, "Source") : "",
    ]),
  ]);

function main() {
  const project_list = document.querySelector(".project_list");
  getProjects().then((p) => {
    p.forEach((e) => {
      project_list.appendChild(cardElement(e));
    });
  });
}

main();
