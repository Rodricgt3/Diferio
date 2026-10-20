# Diferio · Sitio listo para GitHub Pages

La versión publicada es el rebranding que está en `ChiliCode/`: 19 páginas con planes, precios, módulos, formularios y videos. GitHub Actions coloca su `index.html` en la raíz del sitio. La carpeta `src/` conserva el proyecto Astro anterior y no se utiliza en este despliegue.

## Publicar con GitHub Desktop (la app morada)

### 1. Abrir el repositorio

1. Abre GitHub Desktop.
2. Pulsa **File → Add local repository**.
3. En **Local path**, selecciona `C:\Users\lrodr\OneDrive\Documentos\github gt3\Diferio`.
4. Pulsa **Add repository**. Si ya aparece, selecciónalo en **Current repository**.
5. Comprueba que **Current branch** indique `main`.

### 2. Activar Pages una sola vez

1. Abre https://github.com/Rodricgt3/Diferio/settings/pages en tu navegador.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. No necesitas pegar código ni elegir una plantilla.

### 3. Subir tus cambios

1. Regresa a GitHub Desktop, pestaña **Changes**.
2. Revisa los archivos marcados. Incluye `.github/workflows/deploy.yml`, `scripts/build-pages.cjs` y todos los archivos de `ChiliCode/`.
3. En **Summary**, escribe `Publicar rebranding Diferio`.
4. Pulsa **Commit to main**.
5. Pulsa **Push origin**. El commit guarda en tu computadora; Push lo sube a GitHub.

### 4. Comprobar la publicación

1. Abre https://github.com/Rodricgt3/Diferio/actions.
2. Abre **Publicar Diferio en GitHub Pages** y espera a que termine con una marca verde.
3. Abre https://rodricgt3.github.io/Diferio/.
4. Si ves una versión anterior, pulsa **Ctrl + F5**.

Cada actualización futura requiere los pasos **Commit to main → Push origin**. GitHub vuelve a publicar automáticamente. Si activaste Pages después del push, entra en **Actions → Publicar Diferio en GitHub Pages → Run workflow → main → Run workflow**.

## Qué se publica

El workflow prepara `_site/` sin instalar dependencias y solo incluye los HTML, CSS, imágenes, videos y scripts que usa la web. Excluye respaldos, documentación, scripts de mantenimiento y el proyecto Astro. No necesitas instalar Node ni ejecutar comandos para publicar desde GitHub Desktop.

Los nombres de archivo originales, como `artesanias.html`, se conservan para mantener los enlaces. Los enlaces de fidelización se generan con el dominio y la carpeta donde se aloje la web, sin depender de la dirección antigua de ChiliCode.

## Vista previa opcional para desarrollo

Con Node instalado, ejecuta `npm run preview:pages` y abre http://127.0.0.1:4322. Para comprobar el paquete de publicación ejecuta `npm run build:pages`.

## Servicios conectados

GitHub Pages aloja la web estática mediante HTTPS. Fidelización sigue usando el Firebase existente; los formularios usan sus servicios externos existentes. El despliegue no migra esas cuentas ni configura sus reglas de acceso. La publicación está preparada y el paquete fue validado localmente; no se han probado envíos reales de formularios ni escrituras en Firebase.

## Originales y documentación

- `backups/chilicode-original-2026-10-20.zip`: respaldo local anterior al rebranding, excluido de Git para no publicarlo.
- `ChiliCode/REBRANDING.md`: cambios de identidad.
- `docs/astro-original-readme.md`: documentación del proyecto Astro conservado.

Referencia oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
