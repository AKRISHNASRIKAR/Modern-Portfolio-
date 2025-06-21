# Modern Portfolio Template

A responsive, minimalist portfolio website built using Next.js 15 (App Router), Tailwind CSS v4, and MDX. Ideal as a personal site template for developers, designers, or creators. Easily customizable and deployable on Vercel or Cloudflare Pages.

## Tech Stack

- **Framework**: Built with [Next.js](https://nextjs.org) App Router for a modern React architecture.
- **Styling**: Custom-designed with [Tailwind CSS v4](https://tailwindcss.com), using OKLCH color tokens and CSS variables.
- **Markdown Support**: Reviews and content powered by [MDX](https://mdxjs.com) using `next-mdx-remote`.
- **Image Optimization**: Handled via [next/image](https://nextjs.org/docs/api-reference/next/image) for responsive performance.
- **UI Components**: Uses [shadcn/ui](https://ui.shadcn.com) and [lucide-react](https://lucide.dev) for accessible, modern UI.
- **Animation**: Leveraged [Framer Motion](https://www.framer.com/motion/) for subtle UI motion.
- **Live Chat (Optional)**: Built with [Supabase](https://supabase.com) for real-time messaging integration.

## Project Structure (Reviews/Blog)

```
/src
  ├── app/
  │   ├── home/                     # Home route
  │   ├── reviews/                  # MDX dynamic route
  ├── components/
  │   ├── FilmReviewLayout.jsx     # Layout for each MDX review
  │   ├── ClientReviewPage.jsx     # Client wrapper for MDX
  │   ├── MDXContent.jsx           # Renders MDX content
  │   └── ChatBox.jsx              # Optional Supabase live chat
  ├── lib/
  │   ├── mdx.js                    # MDX loading & serialization
  │   └── getReviews.ts            # Frontmatter parser
/public
  └── posters/                     # Local image assets
/content
  └── reviews/                     # MDX review files
```

## Installation

1. Clone the repository:  
    ```bash
    git clone https://github.com/your-username/portfolio-template.git
    ```

2. Navigate into the project directory:  
    ```bash
    cd portfolio-template
    ```

3. Install dependencies:  
    ```bash
    npm install
    ```

4. Start the development server:  
    ```bash
    npm run dev
    ```

5. Open `http://localhost:3000` in your browser.

## Deployment

### Vercel

This project works out of the box with Vercel.

- Push the repo to GitHub.
- Import into [vercel.com](https://vercel.com).
- Set build command: `npm run build`
- Vercel will handle everything else (build, deploy, domain, SSL).

### Cloudflare Pages

If deploying on Cloudflare Pages:

- Set the **build command** to:
  ```bash
  npm run build
  ```

- Set the **output directory** to:
  ```
  .next
  ```

- Use the Cloudflare adapter if using advanced Workers or SSR.

## Writing Reviews in MDX

Place `.mdx` files inside `content/reviews/`. Example structure:

```mdx
---
title: "HIT: The First Case"
date: "2025-06-15"
author: "Krishna"
poster: "/posters/Hit1.jpg"
rating: 8.5
---

This film redefines how thrillers are told in Telugu cinema.

## Highlights

- Strong writing
- Slick cinematography
- Engaging performances
```

## License

This project is licensed under the MIT License.

---

Check out the deployed project at: [your-site.com](https://srikar.xyz/)
