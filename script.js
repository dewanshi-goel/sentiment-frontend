function analyzeSentiment() {
    const text = document.getElementById("text-input").value;

    fetch("https://sentiment-backend-4-43s2.onrender.com/analyze", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <strong>Sentiment:</strong> ${data.overall}<br>
            <strong>Scores:</strong> ${JSON.stringify(data.scores)}
        `;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error contacting the server.";
    });
}
