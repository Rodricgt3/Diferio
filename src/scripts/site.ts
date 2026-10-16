const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const menu = document.querySelector<HTMLElement>('#primary-nav');
document.documentElement.classList.add('js-menu');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu?.classList.toggle('open', open);
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}));
const form = document.querySelector<HTMLFormElement>('#project-form');
const formStatus = document.querySelector<HTMLElement>('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea')];
  let firstInvalid: HTMLElement | undefined;
  for (const field of fields) {
    const error = field.parentElement?.querySelector<HTMLElement>('.field-error');
    const minLength = 'minLength' in field ? field.minLength : 0;
    const message = field.validity.valid ? '' : field.validity.valueMissing ? 'Este campo es obligatorio.' : field.validity.typeMismatch ? 'Escribe un correo válido.' : field.validity.tooShort ? `Escribe al menos ${minLength} caracteres.` : 'Revisa este campo.';
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    if (message && !firstInvalid) firstInvalid = field;
  }
  if (firstInvalid) {
    if (formStatus) formStatus.textContent = 'Revisa los campos marcados para continuar.';
    firstInvalid.focus();
    return;
  }
  const data = new FormData(form);
  const body = [
    `Tipo de proyecto: ${data.get('type')}`,
    `Empresa o marca: ${data.get('business')}`,
    `Descripción: ${data.get('description')}`,
    `Presupuesto: ${data.get('budget') || 'Por definir'}`,
    `Plazo: ${data.get('timeline') || 'Por definir'}`,
    `Nombre: ${data.get('name')}`,
    `Correo: ${data.get('email')}`,
  ].join('\n\n');
  const subject = encodeURIComponent(`Nuevo proyecto DIFERIO — ${data.get('business')}`);
  if (formStatus) formStatus.textContent = 'Se abrirá tu aplicación de correo con un borrador. El sitio no ha enviado ni guardado tus datos.';
  window.location.href = `mailto:rodricgt3@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
});
form?.querySelectorAll('input, select, textarea').forEach(field => field.addEventListener('input', () => {
  field.removeAttribute('aria-invalid');
  const error = field.parentElement?.querySelector<HTMLElement>('.field-error');
  if (error) error.textContent = '';
}));
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
  elements.forEach(element => observer.observe(element));
  document.documentElement.classList.add('js-ready');
}
