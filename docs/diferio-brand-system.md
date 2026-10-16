# Sistema de marca DIFERIO

## Filosofía

**Ordinary isn't enough.** DIFERIO combina diseño, software y comercio para hacer que la tecnología se sienta distinta, resuelva problemas y mejore la operación de un negocio. La identidad es precisa y expresiva: el contenido y los sistemas visuales llevan el peso, no los adornos.

## Voz

- Directa, inteligente y concreta. Explica qué se construye y qué problema aborda.
- Segura sin prometer resultados que no estén medidos.
- Cercana y profesional, en español mexicano claro.
- El manifiesto inglés se mantiene como firma identitaria; el resto del sitio usa español.
- Evitar “innovador”, “disruptivo”, “de clase mundial” y estadísticas sin verificar.

## Wordmark

El wordmark tipográfico se escribe **DIFERIO**, en mayúsculas, con espaciado amplio. El símbolo provisional **D.** vive en un cuadro de proporción 1:1 y puede usarse como avatar pequeño. Mantener contraste y área libre equivalente a la altura de la D. No inclinar, estirar, delinear ni añadir efectos. La marca es tipográfica y provisional; una futura versión vectorial debe conservar estas proporciones y legibilidad.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| Carbon | `#151515` | Texto, fondos oscuros, wordmark |
| Canvas | `#F5F3EE` | Fondo principal y superficies claras |
| Signal | `#D8FF60` | Acento, foco, pequeños indicadores y CTA |
| Graphite | `#858585` | Texto secundario, líneas y metadatos |

Signal no debe convertirse en un fondo dominante. Mantener contraste de texto con WCAG AA; usar Carbon sobre Signal.

## Tipografía

La implementación actual usa Arial/Helvetica del sistema para evitar carga de fuentes remotas y mantener una experiencia rápida. Los titulares usan peso medio, tracking negativo y escala fluida; los metadatos emplean caja alta y tracking amplio. Si se licencia una familia propia, servir archivos WOFF2 locales con subconjuntos y `font-display: swap`.

## Espaciado y composición

- Retícula base de 12 columnas en escritorio, con gutters fluidos de 22–88 px.
- Contenedor máximo de 1500 px. Alinear encabezados, texto y acciones a la misma retícula.
- Secciones amplias con ritmo vertical cercano al 10vw; comprimir en móvil sin perder separación entre temas.
- Usar líneas finas, áreas negativas deliberadas y composiciones editoriales. Evitar paneles decorativos sin contenido.

## Componentes

- **Navegación:** wordmark compacto, enlaces a secciones reales, CTA delineado; menú móvil operable por teclado con estado anunciado.
- **Botones:** alto mínimo 48 px, etiqueta concreta, flecha opcional; Carbon para acción principal y Signal en contexto oscuro.
- **Tarjetas de trabajo:** título, industria, servicios y descripción. Marcar cada concepto como conceptual y no presentarlo como cliente.
- **Servicios:** identificador secuencial, explicación del valor, capacidades relacionadas y enlace al contacto.
- **Formulario:** etiquetas persistentes, campos requeridos señalados, errores junto al campo, foco visible y estado anunciado. Sin integración configurada, preparar correo en el dispositivo; no afirmar envío ni almacenamiento.

## Movimiento

Entradas de scroll breves con opacidad y desplazamiento vertical pequeño. Interacciones hover solo refuerzan feedback o destino. Mantener contenido legible sin JavaScript y desactivar desplazamiento y transiciones para `prefers-reduced-motion`. Evitar animar dimensiones, filtros costosos y efectos continuos.

## Responsive

Priorizar lectura y controles táctiles. En móvil, apilar proyectos, servicios y formulario; reducir encabezados con `clamp()` y conservar longitud legible. El menú colapsa a botón con `aria-expanded`. Revisar especialmente el titular, tablas/grillas visuales y campos a 320–390 px.

## Muestras de proyecto

Los elementos Norte y Trama del sitio son demostraciones conceptuales, no clientes ni proyectos entregados. No añadir métricas, testimonios o logotipos hasta contar con evidencia y autorización de publicación.
