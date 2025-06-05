# Waste – UI/UX Redesign with React

This project involved redesigning the UI/UX of a given web page and developing it using React.  
The goal was to create a more modern, clean, and user-friendly interface while maintaining full functionality.

## 🎨 UI/UX Approach

- I created **multiple alternative designs** using Figma.
- The focus was on **usability**, **visual balance**, and **responsive layout**.
- I implemented one of the designs but included others for optional review.

🔗 **Figma Design Link:**  
[https://www.figma.com/design/oJ3z1cXnDOJMuoAISUAyXe/Untitled?node-id=0-1&t=dtCSmokGxoV21HPY-1](https://www.figma.com/design/oJ3z1cXnDOJMuoAISUAyXe/Untitled?node-id=0-1&t=dtCSmokGxoV21HPY-1)

## 🚀 Live Demo

The project is deployed on GitHub Pages:  
🔗 [https://furkan-selcuk.github.io/waste/](https://furkan-selcuk.github.io/waste/)

## 🛠️ Technologies Used

- ⚛️ **React** – Component-based frontend architecture
- 🧠 **Redux** – Global state management for data fetched from API
- 🌐 **Axios** – Promise-based HTTP client for API requests
- 🎨 **Tailwind CSS** – Utility-first CSS framework for styling
- 📦 **Custom Components**: `Header`, `Hero`, `Card`

## 🧩 Application Structure

The project was structured with reusable and maintainable components, ensuring scalability:

## 📁 Project Structure

- `src/`  
  Main source code folder
  - `assets/`  
    Images, icons, or other static media
  - `components/`  
    Reusable UI components
    - `common/`  
      - `Card.jsx` – Card component used in Hero
    - `sections/`  
      - `Header.jsx` – Page header
      - `Hero.jsx` – Hero section with filterable cards
  - `store/`  
    Redux state management
    - `slices/`  
      - `skipSlice.js` – Slice for skip-related state
      - `index.js` – Exports all slices
    - `store.js` – Redux store configuration
  - `App.jsx` – Main application component
  - `index.js` – React entry point
  - `index.css` – Global styles
  - `reportWebVitals.js` – App performance tracking
  - `setupTests.js` – Test setup file

- `Hero` dynamically renders content cards.
- `Card.jsx` represents each data item as an individual component.
- `Redux` manages global state, including fetched API data.

## 📱 Responsive Design

The application is fully responsive and works smoothly across:

- ✅ Mobile
- ✅ Tablet
- ✅ Desktop

The layout adjusts seamlessly to different screen sizes for a consistent user experience.
## 💡 Additional Designs
I created multiple versions of the UI in Figma. If the current implementation doesn't match your expectations, you're welcome to review alternative designs through the shared link above.
I’m happy to provide further support based on your preferences.

## ✅ Conclusion
This project was designed and developed entirely by me.
I structured the codebase for clarity and scalability, used modern tools and libraries, and ensured a smooth, responsive user experience across all devices.

## ⚙️ Getting Started

To run the project locally, follow these steps:

```bash
git clone https://github.com/furkan-selcuk/waste.git
cd waste
npm install
npm start


## Thank you for reviewing my work!
