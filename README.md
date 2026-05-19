# Portafolio Personal - Isaac Aburto

![Demo del Portafolio](./public/portfolio_demo.webp)

Este es el repositorio de mi portafolio personal, construido con tecnologías web modernas, destacando mi perfil como desarrollador Full Stack y Mobile (Android/Kotlin).

## 🚀 Tecnologías Principales

*   **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Temas:** Soporte para Dark/Light Mode a través de `next-themes`.

## 📦 Características

*   **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tablets y escritorios, con un menú de navegación intuitivo.
*   **Accesibilidad y SEO:** Uso de etiquetas semánticas, OpenGraph (metadata) adaptado y seguridad de rutas con headers HTTP pre-configurados.
*   **Animaciones Fluidas:** Transiciones suaves de componentes al entrar en el viewport o al alternar pestañas gracias a *Framer Motion*.
*   **Modo Oscuro (Dark Mode):** Alternancia del tema persistente y estético compatible con las configuraciones del sistema del usuario.

## 🛠️ Desarrollo Local

Para correr el portafolio en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/IsaacAburto1548/Portafolio-Personal.git
   cd Portafolio-Personal
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. El entorno de desarrollo soportará "Hot Reload", lo que significa que el sitio se actualizará al guardar cambios en el código.

## 🚢 Despliegue (Deploy)

El proyecto está diseñado para funcionar perfectamente en plataformas de *Serverless edge*, especialmente **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIsaacAburto1548%2FPortafolio-Personal)

Para desplegar:
1. Crea una cuenta en [Vercel](https://vercel.com).
2. Conecta tu cuenta de GitHub.
3. Importa el repositorio `IsaacAburto1548/Portafolio-Personal`.
4. Vercel detectará automáticamente que es un proyecto de Next.js, por lo que no necesitarás hacer configuración adicional.
5. Haz clic en **Deploy**.

## 🛡️ Seguridad y Buenas Prácticas

El proyecto incluye las siguientes precauciones en la configuración base (`next.config.ts`):
*   `Strict-Transport-Security` (HSTS)
*   `X-Frame-Options` bloqueado (`SAMEORIGIN`) para prevenir Clickjacking.
*   Políticas de `Referrer-Policy` y `X-Content-Type-Options`.
*   Uso de `rel="noopener noreferrer"` en todos los enlaces salientes de la aplicación.

---

> Hecho con ☕ y **Next.js**.
