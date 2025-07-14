function generatePoem(event) {
        event.preventDefault();

        const poemElement = document.querySelector("#poem");
        poemElement.innerHTML = ""; // Clear previous poem

        const typewriter = new Typewriter(poemElement, {
          autoStart: true,
          delay: 50,
          cursor: "",
        });

        typewriter
          .typeString("The grave said to the rose,<br>")
          .pauseFor(500)
          .typeString("Tears with which dawn waters you.")
          .start();
      }

      let poemFormElement = document.querySelector("#poem-generator-form");
      poemFormElement.addEventListener("submit", generatePoem);
    
