function getUser() {
    const jokeElement = document.getElementById("joke");
  
    fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Joke not found");
        }
        return response.json();
      })
      .then((data) => {
        // Handle two-part or single jokes
        if (data.type === "twopart") {
          jokeElement.innerHTML = `<strong>Setup:</strong> ${data.setup}<br><strong>Punchline:</strong> ${data.delivery}`;
        } else {
          jokeElement.textContent = data.joke;
        }
      })
      .catch((error) => {
        jokeElement.textContent = `Error: ${error.message}`;
      });
  }
  
  // Fetch a joke when the page loads
  getUser();
  