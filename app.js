const traditions = {
  buddhism: {
    name: "Buddhism",
    color: "#efe9dc",
    ultimate: "Dharma (path toward liberation and understanding of reality)",
    traits: [
      "Guides ethical conduct, mindfulness, and wisdom",
      "Leads toward Nirvana (freedom from suffering)",
      "Non-theistic framework"
    ],
    media: [
      "Often reduced to mindfulness or calm imagery",
      "Frequently aestheticized in Western media"
    ],
    misunderstandings: [
      "Seen as passive or nihilistic",
      "Buddha incorrectly treated as a god"
    ],
    tags: ["Path-based", "Impersonal"]
  },

  hinduism: {
    name: "Hinduism",
    color: "#f3e5d8",
    ultimate: "Brahman (infinite, unified reality expressed in all existence)",
    traits: [
      "Infinite and beyond physical form",
      "Expressed through many deities and forms",
      "Underlying all existence"
    ],
    media: [
      "Often simplified as 'many gods mythology'",
      "Spiritual symbols used aesthetically (e.g., Om)"
    ],
    misunderstandings: [
      "Mistaken as purely polytheistic",
      "Brahman confused with a single god figure"
    ],
    tags: ["Immanent", "Transcendent", "Many forms"]
  },

  islam: {
    name: "Islam",
    color: "#e4efe7",
    ultimate: "Allah (one, indivisible God)",
    traits: [
      "Absolute unity (Tawhid)",
      "99 Names describe attributes",
      "Transcendent yet close to believers"
    ],
    media: [
      "Rarely visually represented",
      "Often associated with political headlines"
    ],
    misunderstandings: [
      "Conflated with violence in media",
      "Absence of imagery seen as absence of belief"
    ],
    tags: ["Singular", "Transcendent", "Personal"]
  },

  judaism: {
    name: "Judaism",
    color: "#e6e9f0",
    ultimate: "God (Hashem — 'The Name')",
    traits: [
      "One indivisible God",
      "Covenant relationship with people",
      "Balances justice and compassion"
    ],
    media: [
      "Often anthropomorphized in fiction",
      "Represented through symbols"
    ],
    misunderstandings: [
      "God seen as human-like",
      "Law seen as purely restrictive"
    ],
    tags: ["Singular", "Moral order", "Personal"]
  },

  christianity: {
    name: "Christianity",
    color: "#f0e4e4",
    ultimate: "God (Trinity)",
    traits: [
      "Father, Son, Holy Spirit",
      "Love, grace, forgiveness",
      "Personal relationship with believers"
    ],
    media: [
      "Old man in the sky imagery",
      "Wish-granting stereotype"
    ],
    misunderstandings: [
      "God portrayed as human-like",
      "Cultural bias shapes depiction"
    ],
    tags: ["Personal", "Singular", "Transcendent"]
  },

  confucianism: {
    name: "Confucianism",
    color: "#e8e6df",
    ultimate: "Tian (Heaven / moral order)",
    traits: [
      "Ethical relational system",
      "Focus on harmony",
      "Impersonal moral structure"
    ],
    media: [
      "Reduced to sayings or quotes",
      "Merged into 'Eastern philosophy'"
    ],
    misunderstandings: [
      "Seen as deity-based religion",
      "Oversimplified wisdom tradition"
    ],
    tags: ["Moral order", "Impersonal"]
  },

  sikhism: {
    name: "Sikhism",
    color: "#f2efe5",
    ultimate: "Ik Onkar (One universal divine reality)",
    traits: [
      "One formless God",
      "Equality of all people",
      "Truth through action"
    ],
    media: [
      "Reduced to turbans",
      "Often misidentified"
    ],
    misunderstandings: [
      "Confused with Islam or Hinduism",
      "Beliefs underrepresented"
    ],
    tags: ["Singular", "Moral order", "Transcendent"]
  },

  taoism: {
    name: "Taoism",
    color: "#e3f0ed",
    ultimate: "Tao (the Way — natural flow of existence)",
    traits: [
      "Ineffable guiding principle",
      "Harmony with nature",
      "Balance of opposites"
    ],
    media: [
      "Aestheticized as zen imagery",
      "Simplified as relaxation practice"
    ],
    misunderstandings: [
      "Tao seen as a god",
      "Reduced to meditation aesthetic"
    ],
    tags: ["Impersonal", "Path-based", "Immanent"]
  }
};

function showTradition(event, key) {
  const t = traditions[key];

  document.body.style.backgroundColor = t.color;

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
