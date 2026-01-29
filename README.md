# My_Portfolio

React + Vite portfolio with page routing and a shared global stylesheet.

Finalised link for my website made through Vercel: [[https://my-portfolio-three-liart-52.vercel.app](https://my-portfolio-h0se9k4u3-srihan-maxs-projects-9d2de816.vercel.app)](https://my-portfolio-three-liart-52.vercel.app)

## Getting started

- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Contact form (Formspree)

This project uses Formspree for the contact form.

1. Create a form in Formspree and copy your endpoint URL (looks like `https://formspree.io/f/xxxxxxx`).
2. Create a `.env` file (or copy `.env.example`) and set:

`VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourformid`

Vite exposes environment variables prefixed with `VITE_` to the client.
