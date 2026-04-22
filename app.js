function showTradition(event, key) {
  const t = traditions[key];

  document.querySelectorAll(".card").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("panel").innerHTML = `
    <h2>${t.name}</h2>

    <h3>Ultimate Reality</h3>
    <p>${t.ultimate}</p>

    <h3>Key Traits</h3>
    <ul>
      ${t.traits.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Media Representation</h3>
    <ul>
      ${t.media.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Common Misunderstandings</h3>
    <ul>
      ${t.misunderstandings.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Tags</h3>
    <div>
      ${t.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}
