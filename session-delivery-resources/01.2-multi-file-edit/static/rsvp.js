document.addEventListener('DOMContentLoaded', (event) => {
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', handleRSVP);
});

async function handleRSVP(event) {
    event.preventDefault();

    const invitationId = document.getElementById('invitationId').value;
    const rsvpUrl = `/rsvp/${invitationId}`;

    try {
        const response = await fetch(rsvpUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.text();
            alert(result);
        } else {
            alert('Failed to send RSVP');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending RSVP');
    }
}