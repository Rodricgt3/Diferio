# Evolución comercial de DIFERIO

Se conservan el hero, sidebar, tipografía, galería animada y breakpoints existentes. Las cuatro divisiones enlazan a Commerce, Experiences, Software y Motion. Software agrupa los MVP de producto. Se eliminaron la sección de experiencia que duplicaba servicios y los bloques repetidos de archivo e ideas.

## Portafolio

Los casos visibles se clasifican como conceptos. No hay evidencia local de clientes ni productos propios publicados. CaseStudy.astro presenta reto, solución y entregables de prototipo. Se retiraron de las tarjetas visibles cifras de rendimiento y afirmaciones de infraestructura no acreditadas. Las demos existentes son interfaces de muestra, no sistemas comerciales conectados.

## Video

No existe carpeta de videos ni material audiovisual autorizado en el repositorio. `VideoPreview.astro` renderiza un reproductor HTML nativo cuando recibe `src`; sin él presenta un espacio explícitamente reservado, sin botón de reproducción falso. Para publicar el showreel, crear `public/media/showreel.mp4` y configurar `PUBLIC_SHOWREEL_PATH=/media/showreel.mp4` en el entorno de build. Usar MP4 H.264 optimizado, audio AAC y permiso de publicación. El componente usa preload=none y controles nativos, sin autoplay. Para las comparaciones, pasar rutas autorizadas a los dos componentes de motion.astro. La animación de texto es una demostración original, no un video de cliente.

## Consultas

El formulario existente valida datos, permite copiar el resumen y abre un borrador de correo. Nunca afirma entrega. `PUBLIC_CONTACT_EMAIL` permite definir el buzón en build; usa rodricgt3@gmail.com como destinatario predeterminado, confirmado por el propietario. La apertura de un borrador no acredita su envío ni recepción. GitHub Pages no proporciona backend. No se añadió un servicio externo ni se enviaron datos durante las pruebas.

## Comprobación

Se ejecuta Astro check y build con GITHUB_PAGES=true. No se han medido Lighthouse ni tiempos de recepción de correo. La página pública no fue accesible mediante el lector web de esta sesión; la auditoría se basa en el repositorio. No hay comparación visual automatizada realizada.
