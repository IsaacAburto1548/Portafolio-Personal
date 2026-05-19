# Portafolio Personal - Isaac Aburto

Este es el repositorio oficial de mi portafolio web interactivo. El sistema fue desarrollado desde cero con el objetivo principal de demostrar mis habilidades técnicas, destacar mi perfil como desarrollador Full Stack y Mobile (Android/Kotlin), y presentar mis proyectos más relevantes a través de una arquitectura limpia y moderna.

## 🚀 Tecnologías Principales

El proyecto ha sido concebido para garantizar un rendimiento óptimo y una experiencia de usuario fluida, utilizando el ecosistema actual más robusto de React:

*   **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/) para Server-Side Rendering (SSR) y optimización de rutas.
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para proporcionar tipado estático estricto y escalabilidad.
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) enfocado en un diseño utility-first.
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/) para transiciones orgánicas.
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **Temas:** Soporte integral de Dark/Light Mode adaptativo a través de `next-themes`.

## 📦 Características del Sistema

*   **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tablets y escritorios, integrando componentes dinámicos como menús de navegación interactivos para pantallas reducidas.
*   **Accesibilidad y SEO:** Uso riguroso de etiquetas semánticas (`<article>`, `<nav>`, etc.), OpenGraph (metadata) adaptado a mis perfiles profesionales y seguridad de rutas con headers HTTP pre-configurados.
*   **Animaciones Fluidas:** Transiciones suaves de componentes al entrar en el viewport o al cambiar de vistas.
*   **Modo Oscuro Inteligente:** Alternancia de temas persistente compatible con las configuraciones del sistema nativo del usuario.

## 🛡️ Seguridad y Buenas Prácticas Implementadas

La estructura técnica incorpora varias políticas y prevenciones directamente desde la configuración base de Next.js (`next.config.ts`) y la semántica de HTML5:

*   Implementación de `Strict-Transport-Security` (HSTS).
*   Encabezado `X-Frame-Options` en modalidad `SAMEORIGIN` para la contención contra Clickjacking.
*   Políticas estrictas de `Referrer-Policy` y `X-Content-Type-Options`.
*   Sanitización en la apertura de hipervínculos utilizando atributos `rel="noopener noreferrer"` en todos los accesos a repositorios o demos externos.

---

> Arquitectura diseñada y construida por **Isaac Aburto**.
