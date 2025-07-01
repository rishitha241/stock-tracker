
async function getStockData() {
    const symbol = document.getElementById("stockInput").value.toUpperCase();
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.code === 400 || data.status === "error") {
        document.getElementById("stockInfo").innerHTML = "<p>Invalid Symbol or API Error</p>";
        return;
    }

    document.getElementById("stockInfo").innerHTML = `
        <h2>${data.name} (${data.symbol})</h2>
        <p>Price: $${data.price}</p>
        <p>Day High: $${data.high}</p>
        <p>Day Low: $${data.low}</p>
        <p>Change: ${data.percent_change}%</p>
    `;
}
