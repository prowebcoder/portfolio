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
