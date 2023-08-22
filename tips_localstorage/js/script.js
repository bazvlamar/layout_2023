// Отримуємо посилання на елементи DOM
const noteInput = document.getElementById('note');
const saveBtn = document.getElementById('saveBtn');
const notesList = document.getElementById('notesList');

// Слухач події для кнопки "Зберегти"
saveBtn.addEventListener('click', () => {
    const noteText = noteInput.value;

    if (noteText.trim() !== '') {
        saveNoteToLocalStorage(noteText);
        displayNotes();
        noteInput.value = ''; // Очищаємо поле вводу
    }
});

// Збереження замітки в localStorage
function saveNoteToLocalStorage(note) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Виведення заміток на сторінці
function displayNotes() {
    notesList.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

// Відображення заміток при завантаженні сторінки
displayNotes();
