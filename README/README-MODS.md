# Astro Transition TypeScript Blog Modifications

Application modifications to add View Transitions and implement TypeScript ES Version differences

```sh
npm create astro@latest astro-transition-typescript -- --template blog --install --typescript strict --git
cd astro-transition-typescript
git add .
git commit -m "Create Astro Transition TypeScript application"
git remote add origin git@github.com:ibbrett/astro-transition-typescript.git
git branch -M master
git push -u origin master
```
## Add Astro Extension to VSCode 
Astro - Language Support for Astro

## Add ViewTransitions to BaseHead in application
```sh
import { ViewTransitions } from 'astro:transitions';
<ViewTransitions />
```

## Typescript
```sh
$ npm tsc -v
9.6.4
```
