document.getElementById('orderForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const pizza = document.getElementById('pizza').value;

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, pizza })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('message').textContent = data.message;
        } else {
            document.getElementById('message').textContent = data.error;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
