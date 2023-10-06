# Astro Transition TypeScript Blog Application Setup

- Create Astro application
- Push to new GitHub repo

```sh
nvm use 20.0.0
npm create astro@latest astro-transition-typescript -- --template blog --install --typescript strict --git
cd astro-transition-typescript
git add .
git commit -m "Create Astro Transition TypeScript application"
git remote add origin git@github.com:ibbrett/astro-transition-typescript.git
git branch -M master
git push -u origin master
```
