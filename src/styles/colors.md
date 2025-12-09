# Semantic Color System - Ghid de utilizare

Acest proiect folosește un sistem de culori semantic bazat pe **rol**, nu pe nuanță. Acest lucru face codul mai ușor de întreținut și permite schimbarea temei în viitor.

## Variabile CSS

Toate culorile sunt definite în `src/styles/index.css` în `:root`:

### Primary (Brand & Accents)
- `--color-primary`: #6366f1 (Indigo) - culoarea principală de brand
- `--color-primary-light`: #818cf8 (Indigo-400) - pentru hover states
- `--color-primary-dark`: #4f46e5 (Indigo-600) - pentru active states

### Secondary (Actions & Links)
- `--color-secondary`: #007AFF (Blue) - pentru acțiuni și link-uri
- `--color-secondary-light`: #0a84ff - pentru hover
- `--color-secondary-dark`: #0051d5 - pentru active

### Background
- `--color-background`: #000000 (Black) - fundal principal
- `--color-background-alt`: #0a0a0a - pentru variații

### Surface (Cards & Elevated Elements)
- `--color-surface`: #161617 (Dark Grey) - pentru carduri și elemente elevate
- `--color-surface-light`: #1f1f20 - pentru hover
- `--color-surface-border`: rgba(255, 255, 255, 0.1) - border pentru surface

### Text
- `--color-text-main`: #ffffff (White) - text principal
- `--color-text-muted`: #9ca3af (Gray-400) - text secundar/muted
- `--color-text-subtle`: #6b7280 (Gray-500) - text foarte subtil
- `--color-text-inverse`: #000000 (Black) - text pe fundal deschis

### Status Colors
- `--color-success`: #10b981 (Green-500)
- `--color-warning`: #f59e0b (Amber-500)
- `--color-error`: #ef4444 (Red-500)
- `--color-info`: #3b82f6 (Blue-500)

### Accent Colors
- `--color-accent-yellow`: #eab308 (Yellow-500)
- `--color-accent-purple`: #a855f7 (Purple-500)

## Utilizare în Tailwind

### Background
```jsx
<div className="bg-background">Fundal principal</div>
<div className="bg-background-alt">Fundal alternativ</div>
<div className="bg-surface">Card sau element elevat</div>
<div className="bg-surface-light">Surface cu hover</div>
```

### Text
```jsx
<p className="text-text-main">Text principal</p>
<p className="text-text-muted">Text secundar</p>
<p className="text-text-subtle">Text foarte subtil</p>
<p className="text-text-inverse">Text pe fundal deschis</p>
```

### Primary & Secondary
```jsx
<button className="bg-primary text-white">Buton principal</button>
<button className="bg-primary-light">Buton hover</button>
<a href="#" className="text-secondary hover:text-secondary-light">Link</a>
```

### Borders
```jsx
<div className="border border-surface-border">Border pentru surface</div>
```

### Status
```jsx
<div className="bg-success text-white">Succes</div>
<div className="bg-warning text-white">Avertisment</div>
<div className="bg-error text-white">Eroare</div>
<div className="bg-info text-white">Informație</div>
```

## Exemple de migrare

### Înainte:
```jsx
<div className="bg-black text-white">
  <p className="text-gray-400">Text secundar</p>
  <button className="bg-indigo-500">Buton</button>
</div>
```

### După (cu sistem semantic):
```jsx
<div className="bg-background text-text-main">
  <p className="text-text-muted">Text secundar</p>
  <button className="bg-primary">Buton</button>
</div>
```

## Beneficii

1. **Mentenabilitate**: Schimbarea culorilor se face într-un singur loc
2. **Consistență**: Toate componentele folosesc aceleași culori
3. **Accesibilitate**: Ușor de implementat dark/light mode în viitor
4. **Claritate**: Numele culorilor descriu rolul, nu nuanța

