# Frontend Mentor - Job Listings with Filtering

This is a solution to the [Job Listings with Filtering Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). The project implements an interactive job board with a filtering system that allows users to refine job listings based on multiple criteria such as role, level, languages, and tools. Using React.js and Tailwind CSS, I've created a fully responsive interface that provides an optimal viewing experience across devices from mobile phones to desktop computers.

![Job Listings](https://github.com/user-attachments/assets/f2dc9b77-ca9b-46e3-94d9-d864d2ecfcb5)

## Overview

### The Challenge

The main objectives of this project were to:

- Build a responsive job listings page that adapts to different screen sizes
- Implement dynamic filtering based on selected categories (roles, levels, tools, languages)
- Allow users to add, remove, and clear filters
- Create a visually appealing UI matching the provided design

### Live Demo

- Live Site URL: [https://jobslistingbysayaliakbar.netlify.app/](https://jobslistingbysayaliakbar.netlify.app/)

## Built With

- **React.js** (v18.3.1): A JavaScript library for building interactive UIs
- **Tailwind CSS** (v3.4.17): A utility-first CSS framework for modern designs
- **Vite** (v6.0.5): A fast front-end build tool for modern web development
- **Zustand** (v5.0.2): A lightweight state management library used for managing filters
- **ESLint** (v9.17.0): For code quality and consistency
- Semantic HTML5 and CSS3 for markup and styling

## Project Structure

```
job-listings-page/
├── public/
│   └── assets/
├── src/
│   ├── assets/               # SVG company logos and icons
│   ├── components/           # React components
│   │   ├── FilterBar.jsx     # Filter management component
│   │   ├── Header.jsx        # Page header with background image
│   │   ├── Job.jsx           # Individual job card component
│   │   └── Joblist.jsx       # Container for job listings
│   ├── styles/
│   │   └── index.css         # Global styles with Tailwind imports
│   ├── utils/
│   │   ├── assetMap.js       # Maps company logo assets
│   │   └── imageUtils.js     # Image path utilities
│   ├── App.jsx               # Main application component
│   ├── data.json             # Job listings data
│   ├── main.jsx              # Entry point
│   └── store.js              # Zustand store for state management
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
└── vite.config.js            # Vite configuration
```

## Features

- **Dynamic Filtering System**: Filter job listings based on role, level, languages, and tools
- **Responsive Design**: Optimal layout for mobile (375px) and desktop (1440px) views
- **Interactive Elements**: Hover states for all interactive elements
- **Filter Management**:
  - Add filters by clicking on tags
  - Remove individual filters
  - Clear all filters at once
- **Visual Indicators**: Special badges for "New" and "Featured" job listings
- **Left Border Accent**: Featured jobs have a left border accent
- **Company Logo Display**: Properly positioned company logos from SVG assets
- **Clean Modern UI**: Built with Tailwind CSS custom theme colors

## Technical Implementation

### State Management

The project uses Zustand for state management, which provides a simple and efficient way to handle the application state:

```jsx
// From store.js
const useJobStore = create((set) => ({
  jobs: jobData, // Load JSON data directly
  filters: [],
  addFilter: (filter) =>
    set((state) => ({
      filters: state.filters.includes(filter)
        ? state.filters
        : [...state.filters, filter],
    })),
  removeFilter: (filter) =>
    set((state) => ({
      filters: state.filters.filter((f) => f !== filter),
    })),
  clearFilters: () => set({ filters: [] }),
}));
```

### Component Architecture

The application is built using a component-based architecture:

- **App.jsx**: Main container that orchestrates other components
- **Header.jsx**: Responsive header with desktop/mobile background images
- **FilterBar.jsx**: Displays and manages active filters
- **Joblist.jsx**: Renders the filtered list of jobs
- **Job.jsx**: Individual job card component with filter tag buttons

### Asset Management

The project includes a custom asset management system that maps company logos from the data file to the actual SVG assets:

```jsx
// From assetMap.js
const assetMap = {
  "photosnap.svg": photosnap,
  "manage.svg": manage,
  // ... other mappings
};

export function getAsset(path) {
  const filename = path.split("/").pop();
  return assetMap[filename] || path;
}
```

## What I Learned

This project was a great opportunity to apply advanced React concepts like component composition, state management with **Zustand**, and building reusable components. Key learning points include:

1. **Efficient State Management**: Using Zustand to manage global state without excessive boilerplate code
2. **Optimized Filtering Logic**: Implementing efficient filtering mechanisms using JavaScript Array methods
3. **Responsive Design Techniques**: Using Tailwind's responsive modifiers for optimal layouts across devices
4. **SVG Asset Management**: Creating a system to map and display SVG assets efficiently

Example of the filtering logic:

```jsx
// From Joblist.jsx
const filteredJobs = jobs.filter((job) =>
  filters.every((filter) =>
    [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
  )
);
```

Example of responsive design with Tailwind:

```jsx
// From Header.jsx
<img
  className="hidden sm:block w-full"
  src={BgHeaderDesktop}
  alt="Background Header"
/>
<img
  className="sm:hidden w-full"
  src={BgHeaderMobile}
  alt="Background Header"
/>
```

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/job-listings-page
   cd job-listings-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit:

   ```plaintext
   http://localhost:5173
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Useful Resources

- [React Documentation](https://react.dev): Comprehensive guides for React development
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Reference for utility classes and customization
- [Zustand Documentation](https://docs.pmnd.rs/zustand): Guide for state management
- [Vite Documentation](https://vitejs.dev/guide/): Fast frontend build tool
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt): The challenge details and requirements

## Author

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [@sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## Acknowledgments

- Frontend Mentor for providing the challenge and design assets
- The React and Tailwind CSS communities for excellent documentation and resources
- Special thanks to all open-source contributors whose tools made this project possible
