async function askAI(message) {
  const response = await fetch("https://blogger-ai-chat.vercel.app/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await response.json();
  return data.reply || data.error;
}

window.askAI = askAI;
