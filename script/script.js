function filterSkills(category) {
      const allSkills = document.querySelectorAll(".skill-item");
      allSkills.forEach(skill => {
        if (category === 'all' || skill.dataset.category === category) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
    }
