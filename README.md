# 🎨 Portafolio Web Profesional - Ingeniero de Sistemas

Un portafolio web moderno, responsive y completamente funcional creado con **HTML5, CSS3 y JavaScript Vanilla**. Diseñado específicamente para ingenieros de sistemas en búsqueda de oportunidades laborales en el sector tecnológico.

## 📋 Características

### ✨ Características Principales
- **Diseño Responsive** - Mobile-first, se adapta perfectamente a cualquier dispositivo
- **Dark Mode** - Toggle de tema oscuro/claro con persistencia en localStorage
- **Navegación Suave** - Scroll suave y navegación intuitiva con hamburguer menu en móvil
- **Animaciones** - Transiciones suaves, efectos hover y animaciones de scroll
- **Formulario de Contacto** - Validación básica y feedback visual
- **Sin Dependencias Externas** - Solo HTML, CSS y JavaScript puro (FontAwesome CDN para iconos)

### 📱 Secciones Incluidas

1. **Navbar** - Navegación fija con logo, menú responsive y toggle dark mode
2. **Hero Section** - Presentación principal con nombre, título, descripción y botones sociales
3. **Sobre Mí** - Descripción profesional y habilidades técnicas como tags interactivos
4. **Proyectos** - Grid de 3 proyectos destacados con descripción, tech stack y enlaces
5. **Experiencia** - Timeline visual de experiencia laboral y académica
6. **Contacto** - Formulario de contacto con validación y información de contacto
7. **Footer** - Enlaces rápidos y redes sociales

## 🚀 Cómo Usar

### Opción 1: Abrir localmente
1. Descarga los 3 archivos en la misma carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Abre `index.html` en tu navegador (doble click o click derecho → Abrir con navegador)

### Opción 2: Servidor local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# O con Python 2
python -m SimpleHTTPServer 8000

# O con Node.js (si tienes http-server instalado)
npx http-server
```

Luego accede a `http://localhost:8000`

## 🎨 Personalización

### Cambiar Datos Personales
Abre `index.html` y busca las siguientes secciones para actualizar:

**Nombre y descripción (línea ~130)**
```html
<h1 class="hero-title">
    Hola, soy <span class="highlight">TU NOMBRE</span>
</h1>
```

**Información de contacto (línea ~430)**
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>tu-email@ejemplo.com</span>
</div>
```

**Enlaces sociales**
Actualiza las URLs en los botones de LinkedIn, GitHub y Email

### Cambiar Proyectos
Reemplaza el contenido de los `.project-card` (línea ~300+) con tus propios proyectos

### Cambiar Habilidades
Edita los `.skill-tag` en la sección "Sobre Mí" (línea ~260+)

### Cambiar Colores
En `styles.css`, modifica las variables en la raíz:
```css
:root {
    --primary-color: #0066FF;      /* Color principal */
    --accent-color: #00D4FF;       /* Color de acento */
    --secondary-color: #1A1A1A;    /* Gris oscuro */
}
```

## 📐 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Principal | `#0066FF` | Botones, links, acentos |
| Cian Brillante | `#00D4FF` | Gradientes y destaque |
| Gris Oscuro | `#1A1A1A` | Footer y backgrounds |
| Blanco | `#FFFFFF` | Fondo claro |

## 🔧 Estructura de Archivos

```
portfolio/
├── index.html       # Estructura HTML y contenido
├── styles.css       # Estilos CSS con responsive design
├── script.js        # JavaScript para interactividad
└── README.md        # Este archivo
```

## 💻 Compatibilidad

- ✅ Chrome / Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ✅ IE 11+ (con limitaciones en animaciones)

## 🎯 Puntos Clave del Código

### Funcionalidades JavaScript

1. **Dark Mode con Persistencia**
```javascript
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
```

2. **Navegación Responsiva**
- Hamburger menu en dispositivos pequeños
- Auto-cierre al hacer click en link

3. **Scroll Reveal**
- Animación fade-in al hacer scroll
- Intersection Observer para mejor rendimiento

4. **Validación de Formulario**
- Validación de email
- Feedback visual de envío

## 📱 Breakpoints Responsive

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Menos de 768px

## 🎨 Tipografía

- **Headings**: Poppins (700, 600)
- **Body**: Inter (400, 500)

## ⚡ Optimizaciones

- CSS Grid y Flexbox para layouts
- Transiciones suaves con hardware acceleration
- Minimal JavaScript para máximo rendimiento
- Optimizado para lazy loading
- Sin librerías externas (excluye FontAwesome CDN)

## 🔐 Notas de Seguridad

- El formulario es una demostración (no envía realmente)
- Para producción, necesitas un backend
- Los emails no se guardan ni transmiten
- Todo es 100% cliente-side

## 📝 Personalización Avanzada

### Agregar más proyectos
Copia uno de los `.project-card` en la sección de proyectos y actualiza:
- Nombre
- Descripción
- Tecnologías
- Enlaces

### Agregar animaciones personalizadas
Define nuevas keyframes en `styles.css`:
```css
@keyframes miAnimacion {
    from { /* inicio */ }
    to { /* final */ }
}
```

### Cambiar la fuente de iconos
Reemplaza FontAwesome CDN por otra librería como Material Icons:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## 🤝 Consejos para Reclutadores

Este portafolio demuestra:
- ✅ Conocimiento de HTML5 semántico
- ✅ CSS moderno (Grid, Flexbox, CSS Variables)
- ✅ JavaScript vanilla (sin dependencias innecesarias)
- ✅ Responsive design y mobile-first
- ✅ Buenas prácticas de UX/UI
- ✅ Código limpio y bien organizado
- ✅ Manejo de temas (dark mode)

## 📞 Soporte

Si tienes problemas:
1. Verifica que los 3 archivos estén en la misma carpeta
2. Abre la consola del navegador (F12) para ver errores
3. Asegúrate de tener conexión a internet (para CDN de iconos)

## 📄 Licencia

Uso libre para propósitos personales y profesionales.

---

**Creado con ❤️ por Copilot** | Diseño minimalista moderno para ingenieros de sistemas
