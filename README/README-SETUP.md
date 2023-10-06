# Astro Transition TypeScript Blog Setup

- Create Astro application
- Push to new GitHub repo

## create GitHub repo

- create repo: do not include .gittignore, readme or license
- [https://github.com/ibbrett/astro-transition-typescript](https://github.com/ibbrett/astro-transition-typescript)

## create Astro application, push to repo

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
