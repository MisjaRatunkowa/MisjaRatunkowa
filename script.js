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
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  function updateProgress() {
    let doneCount = 0;

    tasksData.forEach(task => {
      if (localStorage.getItem(`task_${task.id}`) === "done") {
        doneCount++;
      }
    });

    progressText.textContent = doneCount;
    progressFill.style.width = `${(doneCount / tasksData.length) * 100}%`;
  }

  tasksData.forEach(task => {
    const isDone = localStorage.getItem(`task_${task.id}`) === "done";

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

      <input type="text" placeholder="Wpisz kod" ${isDone ? "disabled" : ""}>
      <button class="${isDone ? 'done-btn' : ''}">${isDone ? 'Zaliczone' : 'Sprawdź'}</button>
      <div class="answer">${isDone ? 'Poprawny kod' : ''}</div>
    `;

    const input = taskDiv.querySelector("input");
    const button = taskDiv.querySelector("button");
    const answerDiv = taskDiv.querySelector(".answer");

    button.addEventListener("click", () => {
      if (input.value === task.code) {
        localStorage.setItem(`task_${task.id}`, "done");
        answerDiv.textContent = "Poprawny kod";
        button.textContent = "Zaliczone";
        button.classList.add("done-btn");
        input.disabled = true;
        updateProgress();
      } else {
        answerDiv.textContent = "Błędny kod";
      }
    });

    tasksContainer.appendChild(taskDiv);
  });

  updateProgress();
});
