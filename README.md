# FlavourGraph
FlavorGraph AI is an intelligent food and nutrition platform that helps users track meals, explore ingredient pairings, monitor nutritional goals, and discover balanced recipes. Featuring a food scanner prototype, nutrition dashboard, flavor lab, and AI nutrition assistant, it combines food science and personalized insights to promote healthy food
# 🌿 FlavorGraph AI — Food Intelligence, Reimagined

**FlavorGraph AI** is a food intelligence and nutrition platform that combines meal tracking, nutritional insights, ingredient pairing, and personalized food guidance in one interactive dashboard. It aims to help users make smarter food choices while discovering exciting flavor combinations.

> **Our vision:** Connect food science, nutrition, and AI to make healthier eating more personalized, accessible, and enjoyable.

---

## ✨ Key Features

### 📊 1. Smart Nutrition Dashboard
- Track daily calories, protein, carbohydrates, and fats.
- Visualize nutritional progress through interactive dashboard cards.
- Monitor daily targets and meal history.
- Get nutrition insights based on logged intake.

### 📸 2. Food Scanner
- Upload a meal photo through the interface.
- Preview the selected image.
- Explore sample nutritional estimates.
- Add meals to your food journal.

**Development note:** Real food recognition and live nutrition API integration are planned. Current scan results are demonstrations, not AI-generated image analysis.

### 🧪 3. Flavor Lab
- Explore ingredient combinations.
- Discover curated flavor pairings for ingredients such as paneer, chicken, chickpeas, tofu, and mushrooms.
- View pairing explanations and illustrative match scores.
- Explore how herbs, spices, acidity, and other flavor characteristics can complement ingredients.

### 🤖 4. AI Nutrition Assistant
- Explore balanced meal ideas.
- Discover vegetarian protein sources.
- Get general food and nutrition guidance.
- Ask questions through an interactive chat interface.

**Development note:** The current assistant uses predefined demo responses. Integration with a real AI model is planned.

### 🎯 5. Personalized Goals
- Set daily calorie and protein targets.
- Configure a daily water goal.
- Choose a dietary preference.
- Track progress toward personal nutrition goals.

### 💾 6. Local Data Persistence
- Save meal journal entries on the current device.
- Preserve nutrition goals between page refreshes.
- Store prototype data using browser LocalStorage.

---

## 🚀 What Makes FlavorGraph AI Different?

- **Nutrition + Flavor Intelligence:** Combines food tracking with ingredient-pairing exploration.
- **Personalized Experience:** Lets users configure nutrition targets and dietary preferences.
- **Interactive Food Journal:** Makes recording meals and monitoring intake straightforward.
- **Flavor Discovery:** Encourages experimentation with ingredient combinations.
- **AI-Ready Architecture:** Provides a foundation for future food recognition, intelligent recommendations, and knowledge-graph-powered pairing.

Our long-term goal is to move beyond basic calorie tracking toward a platform that understands both the nutritional value and flavor relationships of food.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Responsive UI, layouts, animations, and styling |
| JavaScript | Dashboard logic and interactive features |
| SVG | Nutrition trend visualization |
| LocalStorage | Saving meals and goals in the browser |

### Planned Integrations
- **AI/ML:** Food image recognition and personalized recommendations.
- **Nutrition APIs:** More reliable nutritional data for foods and ingredients.
- **Large Language Model (LLM):** Conversational nutrition assistant.
- **Neo4j or another graph database:** Ingredient relationships and flavor knowledge graph.
- **Backend and database:** User accounts, synchronized meal histories, and persistent storage.

*Planned technologies are not yet integrated into the current prototype.*

---

## 📂 Project Structure

The current prototype is implemented in a single HTML file.

```text
FlavorGraph-AI/
│
├── index.html       # HTML, CSS, JavaScript, and application logic
└── README.md        # Project documentation
```

As development progresses, the project can be organized into separate frontend, backend, AI, and database modules.

---

## ⚙️ Getting Started

### Prerequisites
- A modern web browser.
- A code editor such as Visual Studio Code (optional).

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project folder**

```bash
cd FlavorGraph-AI
```

**3. Run the application**

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

No backend server or package installation is required for the current prototype.

---

## 🗺️ Roadmap

- [x] Interactive nutrition dashboard
- [x] Macro and calorie tracking interface
- [x] Manual meal logging
- [x] Food photo upload and preview
- [x] Curated ingredient-pairing demonstrations
- [x] Nutrition assistant demo
- [x] Editable nutrition goals
- [x] Browser-based persistence for meals and goals
- [ ] Real AI-powered food recognition
- [ ] Nutrition database/API integration
- [ ] LLM-powered nutrition assistant
- [ ] Graph-based ingredient relationship engine
- [ ] Personalized meal recommendations
- [ ] User authentication and cloud data storage
- [ ] Advanced nutrition analytics

---

## 🔮 Future Scope

FlavorGraph AI can evolve into a more intelligent food platform through:

1. **Computer Vision:** Identify food items from uploaded meal photographs.
2. **Nutrition Intelligence:** Estimate nutritional values using verified food databases.
3. **Flavor Knowledge Graph:** Model relationships between ingredients, aromas, tastes, and cuisines.
4. **Personalized Recommendations:** Suggest meals based on dietary preferences, goals, and logged meals.
5. **Smart Meal Planning:** Generate meal ideas using ingredient availability and nutritional requirements.
6. **Explainable Recommendations:** Explain why a suggested ingredient combination or meal may be suitable.
7. **Waste Reduction:** Recommend recipes that use ingredients users already have.

These capabilities represent future development opportunities rather than completed features.

---

## 🎯 Target Users

- Students and busy professionals.
- People interested in nutrition and balanced eating.
- Home cooks exploring new flavor combinations.
- Fitness enthusiasts tracking food intake.
- Developers and researchers interested in food technology and AI.

---

## 🌱 Our Mission

We want to make food exploration smarter by connecting nutrition, flavor science, and personalized technology.

**FlavorGraph AI — Understand your food. Discover new flavors. Make smarter choices.**

---

## ⚠️ Disclaimer

FlavorGraph AI is currently a prototype for educational and experimental purposes. Its sample nutritional values and recommendations are not verified medical advice. Actual nutritional content varies with ingredients, portion sizes, and preparation methods.


FlavorGraph-AI/
│
├── README.md
├── LICENSE
├── .gitignore
├── .env.example
│
├── docs/
│   ├── project-overview.md
│   ├── system-architecture.md
│   ├── features.md
│   └── screenshots/
│       ├── dashboard.png
│       ├── food-scanner.png
│       └── flavor-lab.png
│
├── frontend/
│   ├── index.html
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── dashboard.css
│   │   ├── scanner.css
│   │   ├── flavor-lab.css
│   │   └── responsive.css
│   │
│   └── js/
│       ├── app.js
│       ├── navigation.js
│       ├── dashboard.js
│       ├── food-scanner.js
│       ├── flavor-engine.js
│       ├── nutrition-chat.js
│       ├── goals.js
│       └── storage.js
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── config/
│   └── routes/
│
├── ai-engine/
│   ├── food-recognition/
│   ├── nutrition-estimation/
│   ├── flavor-recommendation/
│   ├── nutrition-assistant/
│   └── requirements.txt
│
├── database/
│   ├── schema.sql
│   └── seed-data.sql
│
├── tests/
│   ├── frontend/
│   ├── backend/
│   └── ai-engine/
│
└── .github/
    └── workflows/
        └── ci.yml
