const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  document.querySelectorAll('[data-category]').forEach(product => {
    product.hidden = button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter;
  });
}));
const dialog = document.querySelector('#product-dialog');
const products = {
  short: ['Everyday Shorts', 'Kategori celana pendek untuk gaya santai, waktu luang, dan aktivitas kasual. Konsep desain sederhana yang mudah dipadukan dengan pakaian sehari-hari.'],
  long: ['Everyday Pants', 'Kategori celana panjang untuk keseharian, dari aktivitas kampus hingga suasana kerja kasual. Arah koleksi mengutamakan tampilan modern dan kenyamanan.']
};
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  const [title, description] = products[button.dataset.product];
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-description').textContent = description;
  dialog.showModal();
}));
document.querySelectorAll('.close, .close-product').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#partnership-form').addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  document.querySelector('#draft').value = `Halo RAVENWEAR, saya tertarik berdiskusi tentang kemitraan.\n\nNama: ${values.get('name').trim()}\nEmail: ${values.get('email').trim()}\nKontak: ${values.get('phone').trim()}\n\n${values.get('message').trim()}`;
  document.querySelector('#draft-result').hidden = false;
  document.querySelector('#form-status').textContent = 'Draf siap disalin. Pesan belum dikirim.';
});
document.querySelector('#copy').addEventListener('click', async () => {
  const draft = document.querySelector('#draft');
  try {
    await navigator.clipboard.writeText(draft.value);
    document.querySelector('#form-status').textContent = 'Draf berhasil disalin. Simpan untuk dikirim ketika kanal resmi tersedia.';
  } catch {
    draft.focus(); draft.select();
    document.querySelector('#form-status').textContent = 'Pilih dan salin draf secara manual.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
