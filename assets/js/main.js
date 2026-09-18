/**
 * QÓculos Outlet São Vicente - Scripts Principais
 * Manipulação de DOM modular, acessibilidade e conversão WhatsApp
 * Paleta Oficial: Teal (#00A7B9) e Roxo (#704797)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCatalog();
  initAppointmentModal();
  initSmoothScroll();
});

// Configurações Oficiais da Unidade
const STORE_CONFIG = {
  phone: "13997113701",
  formattedPhone: "(13) 99711-3701",
  address: "R. Jacob Emmerich, 380 - Loja 02, Centro, São Vicente - SP",
  instagram: "qoculosoutletsaovicente"
};

/**
 * 1. Gerenciamento do Menu Mobile com Acessibilidade ARIA
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : menuBtn.getAttribute('aria-expanded') === 'true';
    const newState = !isOpen;

    menuBtn.setAttribute('aria-expanded', String(newState));
    mobileMenu.classList.toggle('hidden', !newState);
    
    // Altera o ícone hambúrguer / fechar
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', newState ? 'x' : 'menu');
      if (window.lucide) lucide.createIcons();
    }
  }

  menuBtn.addEventListener('click', () => toggleMenu());

  // Fecha o menu ao clicar em qualquer link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/**
 * 2. Catálogo Interativo com Filtros por Categoria e Layout Anti-CLS
 */
function initCatalog() {
  const grid = document.getElementById('products-grid');
  const filterButtons = document.querySelectorAll('.catalog-filter-btn');

  if (!grid || typeof CATALOG_DATA === 'undefined') return;

  // Renderiza produtos no Grid
  function renderProducts(category = 'all') {
    grid.innerHTML = '';
    
    const filtered = category === 'all' 
      ? CATALOG_DATA 
      : CATALOG_DATA.filter(item => item.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-500">
          <p class="text-lg">Nenhum modelo encontrado nesta categoria no momento.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'product-card bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group';
      
      const whatsappMsg = encodeURIComponent(
        `Olá! Vi o modelo "${item.name}" por ${item.outletPrice} no site da QÓculos Outlet São Vicente e gostaria de saber se está disponível para experimentar na loja!`
      );
      const whatsappUrl = `https://wa.me/55${STORE_CONFIG.phone}?text=${whatsappMsg}`;

      card.innerHTML = `
        <div class="img-aspect-frame relative bg-slate-100">
          <img 
            src="${item.image}" 
            srcset="${item.image} 600w, ${item.imageWebp} 800w" 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            alt="${item.alt}" 
            loading="lazy" 
            decoding="async" 
            width="600"
            height="450"
            class="transition-transform duration-500 group-hover:scale-105"
          />
          <span class="absolute top-3 left-3 badge-outlet text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            ${item.badge}
          </span>
          <span class="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
            ${item.tag}
          </span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-[#704797] mb-1">
              ${item.brand}
            </div>
            <h3 class="font-bold text-slate-900 text-lg group-hover:text-[#00A7B9] transition-colors line-clamp-1">
              ${item.name}
            </h3>
            <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>

          <div class="mt-4 pt-4 border-t border-slate-100">
            <div class="flex items-baseline gap-2">
              <span class="text-xs text-slate-400 line-through">${item.originalPrice}</span>
              <span class="text-xl font-extrabold text-slate-900">${item.outletPrice}</span>
            </div>
            <p class="text-[11px] text-emerald-700 font-semibold mt-0.5">
              ${item.installments}
            </p>

            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Experimentar ${item.name} na loja via WhatsApp"
              class="mt-4 w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#00A7B9] text-white font-semibold text-xs tracking-wide py-2.5 px-4 rounded-xl transition-all duration-200 group-hover:shadow-md"
            >
              <i data-lucide="message-circle" class="w-4 h-4 text-emerald-400"></i>
              Experimentar na Loja
            </a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Inicializa com todos
  renderProducts('all');

  // Adiciona evento de clique nos filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#00A7B9]', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      btn.classList.add('bg-[#00A7B9]', 'text-white', 'shadow-md');
      btn.setAttribute('aria-pressed', 'true');

      const category = btn.getAttribute('data-category');
      renderProducts(category);
    });
  });
}

/**
 * 3. Modal Interativo de Agendamento do Exame de Vista
 */
function initAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  const openButtons = document.querySelectorAll('.open-appointment-modal');
  const closeButtons = document.querySelectorAll('.close-appointment-modal');
  const form = document.getElementById('appointment-form');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Envio do Formulário direcionando para WhatsApp Oficial da Loja
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('appt-name').value.trim();
      const phone = document.getElementById('appt-phone').value.trim();
      const date = document.getElementById('appt-date').value;
      const period = document.getElementById('appt-period').value;
      const notes = document.getElementById('appt-notes').value.trim();

      const message = 
        `👋 *Olá! Gostaria de agendar um Exame de Vista na QÓculos Outlet São Vicente:*\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📱 *Contato:* ${phone}\n` +
        `📅 *Data de Preferência:* ${date || 'A combinar'}\n` +
        `⏰ *Período:* ${period || 'Indiferente'}\n` +
        (notes ? `📝 *Observação:* ${notes}\n\n` : `\n`) +
        `_Enviado pelo formulário do site oficial da loja._`;

      const whatsappUrl = `https://wa.me/55${STORE_CONFIG.phone}?text=${encodeURIComponent(message)}`;
      
      closeModal();
      form.reset();
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
}

/**
 * 4. Rolagem suave para âncoras internas
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
