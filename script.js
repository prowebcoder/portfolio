// Fetch the product data from product.json
fetch('product.json')
  .then(response => response.json())
  .then(data => {
    const categoriesContainer = document.getElementById('categories');
    const portfolioContainer = document.getElementById('portfolioContainer');

    // Function to create category buttons
    function createCategoryButtons(categories) {
      categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.onclick = function() {
          filterProjects(this, category);
        };
        categoriesContainer.appendChild(button);
      });
    }

// Function to create project elements
function createProjectElements(projects) {
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.setAttribute('data-categories', project.categories.join(','));

    const image = document.createElement('img');
    image.src = project.mainImage;
    image.alt = project.name + ' Thumbnail';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');
    projectDetails.id = `${project.projId}-details`;

    const heading = document.createElement('h2');
    heading.textContent = project.name;

    const description = document.createElement('p');
    description.textContent = project.details;

    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.textContent = 'Visit Project';

    projectDetails.appendChild(heading);
    projectDetails.appendChild(description);
    projectDetails.appendChild(link);

    projectElement.appendChild(image);
    projectElement.appendChild(overlay);
    projectElement.appendChild(projectDetails);

    projectElement.addEventListener('click', function() {
      showDetails(project.projId, project.popImage);
    });

    portfolioContainer.appendChild(projectElement);
  });
}



    // Use the data fetched to create categories and projects dynamically
    const categories = [...new Set(data.flatMap(project => project.categories))];
    createCategoryButtons(categories);
    createProjectElements(data);
  })
  .catch(error => console.error('Error fetching data:', error));

// Your existing filterProjects, showDetails, closeModal functions remain unchanged


function showDetails(projectId, popImage) {
  const projectModal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  console.log("image");
  modalImage.src = popImage; // Use the 'popImage' parameter here
  projectModal.style.display = "flex";
}


function closeModal() {
  const projectModal = document.getElementById("projectModal");
  projectModal.style.display = "none";
}

function filterProjects(clickedButton, category) {
  const projects = document.querySelectorAll(".project");
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedButton.classList.add("active");
  // console.log(clickedButton);
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
