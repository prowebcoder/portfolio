function showDetails(projectId, imageUrl) {
  const projectModal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageUrl;
  projectModal.style.display = "flex";
}

function closeModal() {
  const projectModal = document.getElementById("projectModal");
  projectModal.style.display = "none";
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  console.log(this);
  projects.forEach((project) => {
    const projectCategories = project
      .getAttribute("data-categories")
      .split(",");

    if (category === "all" || projectCategories.includes(category)) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initial delay before starting typing-text-1 animation
  setTimeout(function () {
    startTypingAnimation(".typing-text-1");
  }, 500); // Adjust the delay as needed
});

function startTypingAnimation(elementSelector) {
  const typingElement = document.querySelector(elementSelector);

  if (!typingElement) {
    return;
  }

  const textNodes = getTextNodes(typingElement);
  let currentCharacter = 0;

  textNodes.forEach((textNode) => {
    for (let i = 0; i < textNode.textContent.length; i++) {
      setTimeout(function () {
        textNode.data += textNode.textContent.charAt(i);
        textNode.parentElement.classList.add("waiting");
      }, currentCharacter * 100); // Adjust the delay between characters as needed

      currentCharacter++;
    }
  });

  // After all characters are shown in typing-text-1, start typing-text-2
  setTimeout(function () {
    const nextElement = typingElement.nextElementSibling;
    if (nextElement && nextElement.classList.contains("typing-text-2")) {
      startTypingAnimation(".typing-text-2");
    }
  }, currentCharacter * 100 + 1000); // Adjust the delay before starting typing-text-2
}

function getTextNodes(element) {
  return Array.from(element.childNodes).filter((node) => node.nodeType === 3); // Text nodes only
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    startTypingAnimation(".typing-text-3");
    animateBounceHand();
  }, 3000); // Show typing-text-3 after 3 seconds
});

function startTypingAnimation(elementSelector) {
  const typingElement = document.querySelector(elementSelector);

  if (!typingElement) {
    return;
  }

  const textNodes = getTextNodes(typingElement);
  let currentCharacter = 0;

  textNodes.forEach((textNode) => {
    for (let i = 0; i < textNode.textContent.length; i++) {
      setTimeout(function () {
        textNode.data += textNode.textContent.charAt(i);
        textNode.parentElement.classList.add("waiting");
      }, currentCharacter * 100); // Adjust the delay between characters as needed

      currentCharacter++;
    }
  });
}

function animateBounceHand() {
  const handElement = document.querySelector(".bounce-hand");

  if (handElement) {
    handElement.style.visibility = "visible";
  }
}

function getTextNodes(element) {
  return Array.from(element.childNodes).filter((node) => node.nodeType === 3); // Text nodes only
}
