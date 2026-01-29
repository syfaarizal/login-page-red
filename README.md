## Modern Neon Auth Page

A sleek, responsive Login and Sign Up interface built with React and Tailwind CSS. Designed with a focus on aesthetics, featuring a Maroon/Black/White theme and interactive neon animations.

### ✨ Features

- **Dual Mode:** Seamless Dark and Light mode toggle.
- **Visual Effects:** Rotating neon border animation using CSS conic gradients.
- **Responsive:** Fully optimized for mobile and desktop screens.
- **Interactive:** Smooth transitions between Login and Sign Up forms.
- **Icons:** Integrated with lucide-react.

### 🛠️ Tech Stack
- React
- Tailwind CSS
- Lucide React (Icons)

### 🚀 Getting Started
1. Prerequisites
Ensure you have a React project set up with Tailwind CSS configured.

2. Installation
Install the required icon library:
```
npm install lucide-react
# or
yarn add lucide-react
```

3. Tailwind Configuration
To ensure the Dark Mode toggle works correctly, you must add ```darkMode: 'class'``` to your Tailwind config.

Open ```tailwind.config.js```:
```
export default {
  darkMode: 'class', // <--- Important: Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Usage

Copy the component code into your project (e.g., ```src/components/AuthPage.jsx```) and import it into your main App file:
```
import AuthPage from './components/AuthPage';

function App() {
  return (
    <AuthPage />
  );
}

export default App;
```

### 🎨 Customization

Colors: The primary color is Maroon (```#800000```). You can specifically find and replace this hex code to match your brand identity.

Animation Speed: The rotation speed is controlled in the internal ```<style>``` tag within the component (```animation: border-spin 4s linear infinite;```). Change ```4s``` to make it faster or slower.

*Simple, Fast, and Aesthetic.*