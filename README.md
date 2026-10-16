# DIFERIO — Creative Technology Company

Sitio estático construido con Astro para GitHub Pages. La experiencia usa contenido original en español y conceptos visuales marcados explícitamente como demostraciones.

## Ejecutar en tu computadora

1. Instala Node.js 22 o superior.
2. Abre GitHub Desktop y elige **Repository → Open in Terminal** en este repositorio.
3. Ejecuta `npm ci` una vez para instalar dependencias.
4. Ejecuta `npm run dev` y abre la dirección local que aparece en la terminal.
5. Antes de publicar, ejecuta `npm run build`.

## Publicar con GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica `dist/` cada vez que hay un push a `main`. En GitHub abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**. No selecciones **Deploy from a branch**: esa opción inicia el workflow automático de Jekyll que falla en este repositorio Astro.

En GitHub Desktop, escribe un resumen de commit, selecciona **Commit to main** y después **Push origin**. El push activa el workflow **Deploy static site**. Espera a que compile y despliegue en la pestaña **Actions**.

La ruta base se determina desde `GITHUB_REPOSITORY` en CI, por lo que el repositorio `Rodricgt3/Diferio` publica bajo `/Diferio/`. No se necesita configurar un nombre de repo en el código.

## Formulario de contacto

No existe backend. El formulario valida los campos en el navegador y prepara un borrador `mailto:` dirigido a `hola@diferio.com`; la persona debe enviarlo desde su propio correo. Para producción, reemplaza el destinatario y, si se requiere envío dentro del sitio, configura un proveedor de formularios y documenta su política de privacidad. El sitio nunca muestra un falso mensaje de envío exitoso.

## Guías

- [Sistema de marca DIFERIO](docs/diferio-brand-system.md)
- [Auditoría de migración](docs/migration-audit.md)
