# Apple Color System (2025) - Documentație

Sistemul de culori Apple implementat cu suport pentru Light Mode și Dark Mode folosind CSS Variables pentru theming.

## Structură

Culorile sunt definite în `src/styles/index.css` folosind:
- `:root` - pentru Light Mode (default)
- `.dark` - pentru Dark Mode

## Schema de Culori

### Light Mode (Default)

| Rol | Culoare | Hex | Variabilă CSS |
|-----|---------|-----|---------------|
| Background | White | `#FFFFFF` | `--color-background` |
| Background Alt | Off-white | `#FAFAFA` | `--color-background-alt` |
| Surface | Apple Light Gray | `#F5F5F7` | `--color-surface` |
| Surface Light | Hover state | `#E8E8ED` | `--color-surface-light` |
| Text Main | Apple Dark Gray | `#1D1D1F` | `--color-text-main` |
| Text Muted | Apple Medium Gray | `#86868B` | `--color-text-muted` |
| Text Subtle | Subtle Gray | `#6E6E73` | `--color-text-subtle` |
| Accent | Apple Blue | `#0066CC` | `--color-accent` |
| Accent Hover | Darker Blue | `#0051A5` | `--color-accent-hover` |

### Dark Mode

| Rol | Culoare | Hex | Variabilă CSS |
|-----|---------|-----|---------------|
| Background | Black | `#000000` | `--color-background` |
| Background Alt | Off-black | `#0A0A0A` | `--color-background-alt` |
| Surface | Apple Dark Gray | `#1D1D1F` | `--color-surface` |
| Surface Light | Hover state | `#2C2C2E` | `--color-surface-light` |
| Text Main | Apple Light Gray | `#F5F5F7` | `--color-text-main` |
| Text Muted | Apple Medium Gray | `#A1A1A6` | `--color-text-muted` |
| Text Subtle | Subtle Gray | `#8E8E93` | `--color-text-subtle` |
| Accent | Apple Blue (High Saturation) | `#2997FF` | `--color-accent` |
| Accent Hover | Lighter Blue | `#4DA6FF` | `--color-accent-hover` |

## Utilizare în Tailwind

### Background
```jsx
<div className="bg-background">Fundal principal</div>
<div className="bg-background-alt">Fundal alternativ</div>
<div className="bg-surface">Card Bento</div>
<div className="bg-surface-light">Surface cu hover</div>
```

### Text
```jsx
<p className="text-text-main">Text principal</p>
<p className="text-text-muted">Text secundar</p>
<p className="text-text-subtle">Text foarte subtil</p>
<p className="text-text-inverse">Text inversat</p>
```

### Accent (Buttons/Links)
```jsx
<button className="bg-accent hover:bg-accent-hover active:bg-accent-active">
  Buton
</button>
<a href="#" className="text-accent hover:text-accent-hover">Link</a>
```

### Borders
```jsx
<div className="border border-surface-border">Border pentru surface</div>
```

## Glassmorphism

Clasa `.glass-navbar` aplică efectul glassmorphism Apple:

```jsx
<nav className="glass-navbar">
  {/* Navbar content */}
</nav>
```

Proprietăți aplicate:
- `backdrop-filter: blur(20px) saturate(180%)`
- `background-color: var(--glass-bg)` (80% opacity)
- `border: 1px solid var(--glass-border)`
- `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)`

## Activare Dark Mode

Pentru a activa Dark Mode, adaugă clasa `dark` la elementul root:

```jsx
// În App.jsx sau index.html
<div className="dark">
  {/* App content */}
</div>
```

Sau folosește JavaScript pentru toggle:
```javascript
document.documentElement.classList.toggle('dark');
```

## Tranziții

Toate culorile au tranziții smooth (0.3s ease) pentru o experiență fluidă la schimbarea temei.

## Note

- Culorile sunt bazate pe Apple Human Interface Guidelines 2025
- Accent color-ul are saturație mai mare în Dark Mode pentru vizibilitate optimă
- Glassmorphism folosește backdrop-filter pentru efectul blur modern

