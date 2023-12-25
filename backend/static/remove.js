document.addEventListener('DOMContentLoaded', () => {
    fetchItems();
});

function fetchItems() {
    fetch('/api/savjeti/all')
        .then(response => response.json())
        .then(items => {
            const container = document.getElementById('itemContainer');
            container.innerHTML = '';
            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>ID: ${item.id}</p>
                    <button onclick="deleteItem(${item.id})" class="delete-btn">x</button>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}

function deleteItem(id) {
    fetch(`/api/savjeti/delete/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                fetchItems(); // Refresh the list after deletion
            } else {
                console.error('Error deleting item');
            }
        })
        .catch(error => console.error('Error:', error));
}

