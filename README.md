# 🕵️‍♂️ Cypher

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/built%20with-Next.js-000?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-38b2ac?logo=tailwindcss)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/UI-Radix%20UI-purple?logo=radix-ui)](https://www.radix-ui.com/)
[![GSAP](https://img.shields.io/badge/animation-GSAP-green?logo=greensock)](https://greensock.com/)

**Cypher** is an interactive cryptography playground that lets users explore, encode, and decode messages using classic and modern cipher algorithms. Whether you're learning about secure communication or crafting obfuscated passwords, Cypher makes cryptography intuitive and fun.

---

## 🔐 Features

-   🧠 **Learn & Explore**: Discover how ciphers like Caesar, Vigenère, XOR, and Base64 work
-   ✍️ **Encode & Decode**: Transform messages in real time with animated feedback
-   🎨 **Interactive UI**: Built with Tailwind CSS, Radix UI, and GSAP for smooth, accessible interactions
-   🧩 **Modular Architecture**: Easily extend with new cipher algorithms or custom logic
-   📚 **Educational Insights**: Includes historical context and usage tips for each cipher

---

## Project Structure

-   /app
    -   /cipher/[name] → Dynamic cipher views
-   /components → Reusable UI and animation components
-   /lib/algorithms → Cipher logic modules
-   /hooks → Custom hooks for state and interactivity
-   /utils → Shared helpers
-   /public → Open Graph images, assets

---

# 🧠 Tech Stack

Cypher is built with a modern, modular stack designed for performance, accessibility, and creative UI/UX.


## ⚙️ Core Technologies

| Technology               | Purpose                                          |
| ------------------------ | ------------------------------------------------ |
| **Next.js (App Router)** | Framework for routing, SSR, and scalability      |
| **TypeScript**           | Type safety, better tooling, and maintainability |
| **Tailwind CSS**         | Utility-first styling for rapid UI development   |
| **Radix UI**             | Accessible, unstyled UI primitives               |
| **GSAP / Framer Motion** | Smooth, performant animations and transitions    |
| **React Hooks**          | State management and interactivity               |

---

## 🔐 Cipher Logic

| Module           | Role                                               |
| ---------------- | -------------------------------------------------- |
| `lib/algorithms` | Encoders/decoders for Caesar, Vigenère, XOR, etc.  |
| `utils`          | Shared helpers for string manipulation, validation |
| `hooks`          | Custom hooks for animation, state, and effects     |

---

## 🧩 UI & UX

| Tool                     | Purpose                                                |
| ------------------------ | ------------------------------------------------------ |
| **Radix UI**             | Keyboard-accessible components (e.g. dialogs, sliders) |
| **Tailwind CSS**         | Responsive design and dark mode support                |
| **GSAP / Framer Motion** | Element transitions, feedback animations               |

---

## 🛠 Developer Experience

| Feature                    | Benefit                                          |
| -------------------------- | ------------------------------------------------ |
| **Modular architecture**   | Easy to extend with new ciphers or UI components |
| **TypeScript strict mode** | Prevents runtime errors and improves clarity     |
| **Reusable components**    | Speeds up development and enforces consistency   |

---

## 📦 Deployment & Optimization

| Strategy                 | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| **Static optimization**  | Fast initial load and SEO-friendly pages     |
| **Code splitting**       | Reduces bundle size and improves performance |
| **Minimal dependencies** | Keeps hosting costs low and avoids bloat     |

---

Want to dive deeper into how these tools work together? Check out the [README.md](./README.md) or explore the source code!

## 🚀 Getting Started

### Clone the repo

git clone https://github.com/DLee1993/Cypher.git

cd cypher
