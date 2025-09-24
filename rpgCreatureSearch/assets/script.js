const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typesDiv = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const creatureImage = document.getElementById("creature-image");

const API_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const fetchCreatureData = async () => {
    const searchTerm = searchInput.value.toLowerCase();

    if (!searchTerm) {
        alert("Please enter a creature name or ID.");
        return;
    }

    // Clear previous search results and hide image
    clearResults();

    try {
        const response = await fetch(`${API_URL}${searchTerm}`);
        if (!response.ok) {
            // User Story: Invalid creature name/ID, show alert.
            alert("Creature not found");
            return;
        }
        const data = await response.json();

        // Populate the UI with creature data
        creatureName.textContent = data.name.toUpperCase();
        creatureId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        hp.textContent = `${data.stats[0].base_stat}`;
        attack.textContent = `${data.stats[1].base_stat}`;
        defense.textContent = `${data.stats[2].base_stat}`;
        specialAttack.textContent = `${data.stats[3].base_stat}`;
        specialDefense.textContent = `${data.stats[4].base_stat}`;
        speed.textContent = `${data.stats[5].base_stat}`;

        // Add types to the types container
        data.types.forEach(typeObj => {
            const typeBadge = document.createElement("span");
            typeBadge.textContent = typeObj.name.toUpperCase();
            typeBadge.classList.add("type-badge");
            typesDiv.appendChild(typeBadge);
        });

        // Show the creature image
        creatureImage.src = data.image;
        creatureImage.style.display = 'block';

    } catch (error) {
        // Fallback for network or other unexpected errors
        alert("Creature not found");
        console.error(error);
        clearResults();
    }
};

const clearResults = () => {
    // Clear previous search results and hide image
    typesDiv.innerHTML = "";
    creatureImage.style.display = 'none';

    // Clear all text content
    creatureName.textContent = "";
    creatureId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
};

searchButton.addEventListener("click", fetchCreatureData);