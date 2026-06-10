/* =============================================
   RASP Automação — Form Validation & WhatsApp
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initForm();
  initPhoneMask();
});

function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: { required: true, minLength: 3, message: 'Nome deve ter pelo menos 3 caracteres' },
    company: { required: false },
    phone: { required: true, pattern: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, message: 'Telefone inválido. Use (11) 99999-9999' },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
    message: { required: true, minLength: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
  };

  Object.keys(fields).forEach(name => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) return;

    input.addEventListener('blur', () => validateField(input, fields[name]));
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        validateField(input, fields[name]);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    Object.keys(fields).forEach(name => {
      const input = form.querySelector(`[name="${name}"]`);
      if (input && !validateField(input, fields[name])) {
        isValid = false;
      }
    });

    if (!isValid) return;

    const data = new FormData(form);
    const name = data.get('name');
    const company = data.get('company');
    const phone = data.get('phone');
    const email = data.get('email');
    const message = data.get('message');

    const whatsappMessage = encodeURIComponent(
      `*Novo contato via site*\n\n` +
      `*Nome:* ${name}\n` +
      `${company ? `*Empresa:* ${company}\n` : ''}` +
      `*Telefone:* ${phone}\n` +
      `*E-mail:* ${email}\n\n` +
      `*Mensagem:*\n${message}`
    );

    const whatsappUrl = `https://wa.me/5511963987438?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    showFormSuccess(form);
  });
}

function validateField(input, rules) {
  const value = input.value.trim();
  const errorEl = input.parentElement.querySelector('.form-error');

  input.classList.remove('valid', 'invalid');

  if (rules.required && !value) {
    input.classList.add('invalid');
    if (errorEl) {
      errorEl.textContent = 'Este campo é obrigatório';
      errorEl.style.display = 'block';
    }
    return false;
  }

  if (rules.minLength && value.length < rules.minLength) {
    input.classList.add('invalid');
    if (errorEl) {
      errorEl.textContent = rules.message;
      errorEl.style.display = 'block';
    }
    return false;
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    input.classList.add('invalid');
    if (errorEl) {
      errorEl.textContent = rules.message;
      errorEl.style.display = 'block';
    }
    return false;
  }

  if (value) {
    input.classList.add('valid');
  }

  if (errorEl) {
    errorEl.style.display = 'none';
  }

  return true;
}

function showFormSuccess(form) {
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Enviado com Sucesso!
  `;
  btn.style.background = '#22c55e';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.classList.remove('valid', 'invalid');
    });
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}

/* Phone Mask */
function initPhoneMask() {
  const phone = document.querySelector('input[name="phone"]');
  if (!phone) return;

  phone.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    e.target.value = value;
  });
}
