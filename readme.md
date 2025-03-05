Passo a passo para iniciação do projeto em React

Criar o projeto comm o Vite
```bash
npm create vite@5.5.2 .
```

freamework: React
variante: JavaScript

Instalar os pacotes
```bash
npm install
```

Iniciar o projeto
```bash
npm run dev
```

```bash
npm install -D tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
```

```bash
npx tailwindcss init -p
```

Colar no tailwind.config.js:
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Colar no index.css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;    
```