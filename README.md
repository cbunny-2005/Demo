# Professional Portfolio Website

A high-performance, visually stunning portfolio website built with Next.js 14, TailwindCSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🛠️ Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Deployment

### Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into [Vercel](https://vercel.com/new).
3.  Vercel will automatically detect Next.js and configure the build settings.
4.  Click **Deploy**.

### Netlify

1.  Push your code to a Git repository.
2.  Import the project into [Netlify](https://app.netlify.com/start).
3.  Ensure the build command is `npm run build` and publish directory is `.next`.
4.  Click **Deploy**.

## 📂 Project Structure

```
src/
├── app/              # App Router pages and layouts
│   ├── globals.css   # Global styles and Tailwind directives
│   ├── layout.tsx    # Root layout with font configuration
│   └── page.tsx      # Main landing page
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
└── lib/              # Utility functions
    └── utils.ts      # cn utility for class merging
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` and `src/app/globals.css` to change the color palette.
- **Content**: Update the data arrays in `src/app/page.tsx` to add your own projects and bio.
