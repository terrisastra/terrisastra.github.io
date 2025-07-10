# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages website for TerrisAstra, an AI engineering company. The site is a single-page application with an animated starscape background and brain constellation visualization.

## Repository Structure

- `index.html` - Main HTML file containing the complete website
- `package.json` - Contains dependencies (currently just `claude` package)
- `README.md` - Project title only
- `CNAME` - GitHub Pages custom domain configuration

## Development Commands

This project uses npm for package management:

```bash
npm install    # Install dependencies
```

Note: This is a static HTML site with no build process. Changes to `index.html` are immediately reflected when served.

## Code Architecture

### Single-Page Application Structure
- **HTML**: Self-contained in `index.html` with embedded CSS and JavaScript
- **Styling**: Uses Tailwind CSS via CDN plus custom CSS for animations
- **JavaScript**: Vanilla JS for interactive elements including:
  - Animated star field generation
  - Floating particle effects
  - Brain constellation SVG animation
  - Text scramble effect on contact link

### Key Components
- **Starscape Animation**: Dynamically generated twinkling stars
- **Brain Constellation**: SVG path animation with connected star points
- **Earth Horizon**: Decorative SVG with gradient atmosphere effect
- **Contact Scramble**: Hover effect that scrambles text characters

### Visual Design
- Dark space theme with emerald green accents (`#34d399`)
- Inter font family loaded from Google Fonts
- Responsive design with mobile-first approach
- CSS animations for smooth visual effects

## Deployment

This is a GitHub Pages site. Changes pushed to the main branch are automatically deployed.