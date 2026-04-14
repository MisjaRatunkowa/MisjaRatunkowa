document.addEventListener("DOMContentLoaded", () => {
  const tasksData = [
  { id: 1, title: "Główna rozdzielnia", code: "1234" },
    { id: 2, title: "Centrum informatyczne", code: "2345" },
    { id: 3, title: "Szafa elektryczna", code: "3456" },
    { id: 4, title: "Wyspa zasilająca", code: "4567" },
    { id: 5, title: "Centrum obserwacyjne", code: "5678" },
    { id: 6, title: "Podziemia", code: "6789" },
    { id: 7, title: "Archiwa", code: "7890" },
    { id: 8, title: "Centrum radiowe", code: "8901" },
    { id: 9, title: "Ruiny starego laboratorium", code: "9012" },
    { id: 10, title: "Reaktor", code: "0123" }
  ];

  const tasksContainer = document.getElementById("tasks");

  tasksData.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
      <div class="task-header">
        <div class="task-icon">
          <img src="${task.id}.png" alt="Ikona zadania ${task.id}">
        </div>
        <div class="task-title-wrap">
          <div class="task-title">${task.title}</div>
          <div class="task-label">Zadanie ${task.id}</div>
        </div>
      </div>

      <a href="zadanie${task.id}.html" class="task-link-btn">Otwórz zadanie</a>

      <input type="text" placeholder="Wpisz kod">
      <button>Sprawdź</button>
      <div class="answer"></div>
    `;

    const input = taskDiv.querySelector("input");
    const button = taskDiv.querySelector("button");
    const answerDiv = taskDiv.querySelector(".answer");

    button.addEventListener("click", () => {
      if (input.value === task.code) {
        answerDiv.textContent = "Poprawny kod";
      } else {
        answerDiv.textContent = "Błędny kod";
      }
    });

    tasksContainer.appendChild(taskDiv);
  });
});
