# PolyRevive Innovation Private Limited — Official Website

> **Brand Message:** *“Recover. Recycle. Revive.”*  
> **Tagline:** *“Transforming PET Waste Into a Sustainable Future.”*

A modern, corporate Home Page for **PolyRevive Innovation Private Limited**, built with an eco-industrial aesthetic matching the company's brand identity, official documentation, and visual design reference.

---

## 🌟 Overview

PolyRevive Innovation Private Limited is an emerging recycling enterprise focused on the collection, processing, and transformation of post-consumer PET waste into valuable recycled materials. This website serves as the primary digital touchpoint for industrial buyers, scrap suppliers, technology partners, and institutional stakeholders.

All copy, statistics, and terminology on this website are derived strictly from the official company documentation (`PolyRevive_Website_Development_Content.pdf`).

---

## 🎨 Visual Design System

- **Brand Palette (Derived from Logo)**:
  - **Leaf Green (`#477f30`)**: Primary brand identity color
  - **Vibrant Accent Green (`#4ade80` / `#5ba33e`)**: Highlighting key messages and active indicators
  - **Corporate Deep Navy (`#08284c`)**: Secondary brand tone from logo
  - **Deep Eco Forest (`#0f2316` / `#0a1b11`)**: Luxurious dark contrast sections
  - **Clean Surface Greens (`#f7faf5` / `#f0f7ec`)**: High-readability card backgrounds
- **Typography**:
  - **Body & Headings**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — modern, geometric, readable corporate typography
  - **Signature Accents**: [Caveat](https://fonts.google.com/specimen/Caveat) — elegant script accents (*"Small Bottles Big Change"*, *"A Cleaner Brighter Greener Tomorrow"*, *"Recover. Recycle. Revive."*)
- **Layout Treatment**:
  - Glassmorphic translucent cards with subtle borders (`backdrop-filter: blur(...)`)
  - Elevated floating benefit strip
  - Circular economy transformation loop
  - 10-step horizontal recycling value chain journey

---

## 🚀 Key Sections

1. **Sticky Header / Navigation**: Sticky with backdrop blur, actual PolyRevive logo, active section tracking, smooth scroll, responsive mobile navigation, and primary "Partner With Us" action.
2. **Hero Section**: Cinematic forest PET bottle visual with dark green gradient overlay, brand eyebrow, main headline with green accent, official PDF paragraph, CTA buttons, and 4 glass badges (*Cleaner Environment, Stronger Communities, Circular Economy, Sustainable Tomorrow*).
3. **Floating Benefits Strip**: 6 core highlights from the PDF (*Advanced PET recycling solutions, High-quality recycled PET flakes and pellets, Sustainable waste-to-resource model, Responsible water and waste management, Circular economy focused, B2B industrial supply*).
4. **About PolyRevive & Circular Economy Transformation**: Compact corporate introduction, clear objective, Vision and Mission cards, and an interactive circular economy diagram (*From Waste → To Flakes → To Pellets → To New Possibilities*).
5. **What We Do (10-Step Value Chain)**: Connected horizontal journey (*Collection → Sorting → Processing → Washing → Separation → Drying → Flake Production → Pellet Production → Quality Control → B2B Supply*).
6. **Products Preview**: Dedicated product cards for **Recycled PET Flakes** and **Recycled PET Pellets** featuring descriptions, potential application chips, and official disclaimer.
7. **Sustainability (5 Pillars)**: Dark green eco-industrial section with 5 glass cards (*Plastic Waste Reduction, Resource Recovery, Water Responsibility, Energy Efficiency, Circular Manufacturing*).
8. **Environmental Impact Banner**: Serene alpine lake backdrop, official impact statement from PDF, and 4 impact cards (*Reduced Plastic Waste, Cleaner Environment, Stronger Communities, A Sustainable Future*).
9. **Partnership CTA**: Dedicated collaboration section for suppliers, buyers, tech partners, and investors.
10. **Contact & Enquiries Touchpoints**: Categorized enquiry paths for Business, Supplier, Partnership, and Investment contacts.
11. **Footer**: Official logo, brand message, quick links, SEO keyword tags, and copyright notice.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic, accessible markup adhering to W3C standards
- **CSS3**: Custom vanilla CSS design system with custom properties, responsive grid, flexbox, and glassmorphism
- **Vanilla JavaScript (ES6+)**: Scroll spy, smooth navigation, interactive timeline
- **Bootstrap 5.3.3**: Responsive grid and offcanvas mobile menu
- **Bootstrap Icons 1.11.3**: Lightweight vector iconography
- **GSAP 3.12.5 & ScrollTrigger 3.12.5**: High-performance entrance and scroll reveal animations

---

## 📁 Project Structure

```
PolyRevive/
├── index.html               # Main homepage HTML
├── css/
│   └── style.css            # Design system, responsive layout & custom styles
├── js/
│   └── script.js            # GSAP animations, scroll interactions & navbar behavior
├── assets/
│   ├── logo/
│   │   ├── logo.png         # Cropped official PolyRevive logo
│   │   └── logo-transparent.png # Alpha-isolated official logo
│   └── images/
│       ├── hero-bg.jpg      # High-res cinematic PET forest background
│       ├── impact-lake.jpg  # Mountain lake landscape for impact section
│       ├── waste-bottles.jpg
│       ├── pet-flakes.jpg
│       ├── pet-pellets.jpg
│       └── pet-possibilities.jpg
└── README.md
```

---

## 💻 Local Preview

You can open `index.html` directly in any modern browser or run a simple local web server:

```bash
# Using Node.js http-server or npx serve:
npx serve .

# Or using Python:
py -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

---

## 📄 License & Copyright

&copy; 2026 PolyRevive Innovation Private Limited. All Rights Reserved.
