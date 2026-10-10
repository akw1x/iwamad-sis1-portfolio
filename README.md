# Personal Portfolio Website

Live Demo: [https://akw1x.github.io/iwamad-sis1-portfolio/](https://akw1x.github.io/iwamad-sis1-portfolio/)

## Overview
This is an individual single-page portfolio website built for the SIS 1 assignment in Foundational Web Interface Development. The page highlights my background in IT Management and UI/UX design, showcases my recent project builds, and provides an interactive contact form with custom JavaScript validation.

## Key Design Decisions
1. **Layout Strategy:** I implemented a mobile-first responsive layout where the projects section transforms from a single-column view on mobile screens (375px) to a 3-column grid on desktop screens (1200px) using CSS Grid and media queries.
2. **Color & Theme System:** Custom CSS properties were used to build a consistent light/dark color system switched instantly by toggling a single `data-theme` attribute on the root HTML element.
3. **Mobile Optimization & Accessibility:** After testing the layout on a 375px viewport, I adjusted form control padding and container margins to eliminate horizontal scrolling, ensured a minimum font size of 14px, and added visible keyboard focus indicators for accessibility.