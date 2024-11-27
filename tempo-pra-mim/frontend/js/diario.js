const diary = document.getElementById('diary');
const saveBtn = document.getElementById('save');
const entriesContainer = document.getElementById('entries');

function saveEntry() {
    const entryText = diary.value;
    const timestamp = new Date().toLocaleString();
    const entry = `<div class="entry">
        <p>${timestamp}</p>
        <p>${entryText}</p>
    </div>`;
    entriesContainer.innerHTML += entry;
    diary.value = '';
}

saveBtn.addEventListener('click', saveEntry);

// Load entries from local storage (optional)
const savedEntries = localStorage.getItem('diaryEntries');
if (savedEntries) {
    entriesContainer.innerHTML = savedEntries;
}