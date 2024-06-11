const listCourses = [
  {
    logolanguage: "images/logo-html.svg",
    nameCourse: "Html",
    namePerson: "El mas Gay",
    time: "10h 30min",
    numberNote: "4.9",
  },
  {
    logolanguage: "images/logo-css.svg",
    nameCourse: "Css",
    namePerson: "Pintar",
    time: "12h 30min",
    numberNote: "4.4",
  },
  {
    logolanguage: "images/logo-c.svg",
    nameCourse: "C#",
    namePerson: "Poderoso",
    time: "32h 20min",
    numberNote: "4.2",
  },
  {
    logolanguage: "images/logo-net.svg",
    nameCourse: ".Net",
    namePerson: "Bueno",
    time: "10h 10min",
    numberNote: "4.7",
  },
  {
    logolanguage: "images/logo-react.svg",
    nameCourse: "React",
    namePerson: "Mas usado",
    time: "00h 00min",
    numberNote: "0.0",
  },
];

if ("content" in document.createElement("template")) {
  const template = document.querySelector("#template-language-blocks");
  const coursesLanguage = document.querySelector("#coursesLanguage");

  listCourses.forEach((card) => {
    const clone = template.content.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = card.logolanguage;

    let nameCourse = clone.querySelector(
      ".languages-text-block__name-languages-text"
    );
    nameCourse.textContent = card.nameCourse;

    let namePerson = clone.querySelector(
      ".languages-text-block__description-text"
    );
    namePerson.textContent = card.namePerson;

    let time = clone.querySelector(".time-block__text-time");
    time.textContent = card.time;

    let numberNote = clone.querySelector(".note-block__number-note");
    numberNote.textContent = card.numberNote;

    coursesLanguage.appendChild(clone);
  });
}
