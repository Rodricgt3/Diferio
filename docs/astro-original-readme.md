# DIFERIO 2.0 — Creative Technology Company

Sitio estático de alta conversión construido con **Astro 5** para GitHub Pages. Preserva el layout editorial inspirado en Lewius, su tipografía y ritmo visual, al tiempo que expande la experiencia con tres demostraciones interactivas de servicios de clase mundial y un embudo de conversión optimizado.

## Arquitectura de Rutas

- `/` — **Homepage Editorial:** Presentación de DIFERIO, galería en movimiento continuo, servicios principales con previsualizaciones interactivas, sistema de casos de estudio técnicos, proceso de 4 etapas, filosofía y preguntas frecuentes.
- `/commerce/` — **Shopify & E-Commerce Lab:** Demostración interactiva de comercio electrónico premium. Incluye catálogo editorial (Colección *Objets*), PDP interactivo con selector de variantes y cálculo de precio dinámico, bolsa deslizable (*slide cart drawer*), medidor de envío gratis, comparador interactivo UX (Tienda Genérica vs DIFERIO) y arquitectura de checkout 1-page.
- `/experiences/` — **Web Design & Digital Experiences:** Laboratorio de ingeniería frontend. Cuenta con selector dual (*Modo Editorial* vs *Modo Blueprint / Inspección Técnica* con retícula activa y telemetría de 60fps), controles cinéticos de tipografía (interletraje, grosor de trazo, escala) y tarjetas de narrativa visual.
- `/software/` — **Custom Software & SaaS:** Demostración interactiva de plataforma de gestión empresarial (*Pulse OS*). Presenta KPIs operativos en vivo, gráfica SVG dinámica con tooltips interactivos, tabla de datos con búsqueda en tiempo real y filtrado por estado de orden.
- `/start/` — **Embudo de Conversión & Diagnóstico:** Formulario de inicio de proyecto con selector interactivo de disciplina (compatible con preselección vía `?service=commerce|experiences|software|product`), chips de presupuesto, validación accesible rigurosa y doble canal de contacto (copia estructurada al portapapeles y borrador directo en `mailto:`).

## Ejecutar en tu computadora

1. Instala Node.js 22 o superior.
2. Abre la terminal en este repositorio.
3. Ejecuta `npm ci` para instalar dependencias.
4. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
5. Ejecuta `npm run build` para validar diagnósticos de TypeScript y compilar la versión de producción estática (`dist/`).

## Publicar con GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica `dist/` automáticamente en cada push a la rama `main`.
La ruta base se resuelve dinámicamente mediante `GITHUB_REPOSITORY` en CI (`https://rodricgt3.github.io/Diferio/`), funcionando sin problemas tanto en despliegue remoto como en local.

## Formulario de contacto y activación en producción

En conformidad con las directrices de honestidad y privacidad de DIFERIO:
- El formulario en `/start/` no almacena datos en bases de datos externas de terceros sin consentimiento explícito.
- Valida los campos en el cliente con accesibilidad completa (`aria-invalid`, `aria-live`) y abre un borrador profesional en el cliente de correo del usuario hacia `rodricgt3@gmail.com`.
- Para conectar un proveedor de formularios en producción (e.g., [Formspree](https://formspree.io/), [Resend](https://resend.com/) o [Basin](https://usebasin.com/)), basta con añadir la URL del endpoint en el atributo `action` de `<form id="inquiry-form">` en `src/pages/start.astro` con método `POST`.

## Documentación y Marca

- [Sistema de marca DIFERIO](docs/diferio-brand-system.md)
- [Auditoría y Plan DIFERIO 2.0](docs/migration-audit.md)
