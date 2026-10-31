# Ahmad Khan — Angular Developer Portfolio

A multi-page Angular portfolio with a futuristic dark interface, cyan/lime accents, responsive navigation, project filtering, and separate Home, About, Skills, Projects, and Contact pages.

## Requirements

- Node.js 24.15+ (the original project was developed with Node.js 24.19.0)
- npm 11+

## Run locally

```bash
npm install
ng serve -o
```

The development server opens at `http://localhost:4200/`.

## Production build

```bash
ng build
```

## Pages

- `/` — Home
- `/about` — About
- `/skills` — Skills
- `/projects` — Projects (includes category filters)
- `/contact` — Contact

## Personal details to review

- The email address is configured in `src/app/page/contactus/contactus.ts`.
- The GitHub profile link is configured in `src/app/page/contactus/contactus.ts` and the footer.
- Project cards currently use CSS-generated cover artwork rather than screenshots. Add real project screenshots and verified demo/repository URLs as those assets and links are ready.

## Push updates to GitHub

```bash
git status
git add .
git commit -m "Redesign futuristic Angular portfolio"
git push
```
