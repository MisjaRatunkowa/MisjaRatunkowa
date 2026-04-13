document.addEventListener("DOMContentLoaded", () => {
  const tasksData = [
    { id: 1, title: "Rozgrzewka Pana Młodego", code: "1234" },
    { id: 2, title: "Test Lojalności Ekipy", code: "2345" },
    { id: 3, title: "Misja: Pierwszy Toast", code: "3456" },
    { id: 4, title: "Sekretna Wiedza o Adamie", code: "4567" },
    { id: 5, title: "Próba Charakterna", code: "5678" },
    { id: 6, title: "Operacja Kawalerski", code: "6789" },
    { id: 7, title: "Wyzwanie Ostatniej Wolności", code: "7890" },
    { id: 8, title: "Męska Narada Kryzysowa", code: "8901" },
    { id: 9, title: "Instrukcja Obsługi Pana Młodego", code: "9012" },
    { id: 10, title: "Finał Wieczoru", code: "0123" }
  ];

  const tasksContainer = document.getElementById("tasks");

  tasksData.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
      <div class="task-header">
        <div class="task-icon">
          <img src="icons/${task.id}.png" alt="Ikona zadania ${task.id}">
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