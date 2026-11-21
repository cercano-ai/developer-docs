const base = document.body.dataset.base;
const normalize = (path) => path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
document.querySelectorAll('.sidebar nav a').forEach(a => { if (normalize(new URL(a.href).pathname) === normalize(location.pathname)) a.setAttribute('aria-current', 'page'); });
const toc = document.getElementById('toc-links');
document.querySelectorAll('.prose h2').forEach(h => { if (!h.id) { const anchor = h.previousElementSibling; h.id = anchor?.id || h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''); } const a = document.createElement('a'); a.href = '#' + h.id; a.textContent = h.textContent; toc.append(a); });
const menu = document.getElementById('menu-toggle');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.getElementById('sidebar').classList.toggle('open', open); });
const input = document.getElementById('search'), results = document.getElementById('search-results'), status = document.getElementById('search-status');
let index;
async function search() {
 const query = input.value.trim().toLowerCase(); results.replaceChildren(); results.hidden = !query; if (!query) { status.textContent = ''; return; }
 try { index ||= await fetch(base + 'search-index.json').then(r => { if (!r.ok) throw Error(); return r.json(); });
 if (input.value.trim().toLowerCase() !== query) return;
 const terms = query.split(/\s+/); const matches = index.filter(p => terms.every(t => (p.title + ' ' + p.text).toLowerCase().includes(t))).sort((a,b) => Number(b.title.toLowerCase().includes(query)) - Number(a.title.toLowerCase().includes(query))).slice(0,10);
 status.textContent = matches.length + ' results';
 for (const page of matches) { const li = document.createElement('li'), a = document.createElement('a'); a.href = base + page.path; a.textContent = page.title; li.append(a); results.append(li); }
 if (!matches.length) { const li=document.createElement('li'); li.textContent='No matching pages.'; results.append(li); }
 } catch { status.textContent='Search is unavailable. Browse the navigation below.'; results.textContent=status.textContent; }
}
input.addEventListener('input', search);
document.querySelector('.search-form').addEventListener('submit', e => { e.preventDefault(); search(); });
document.addEventListener('keydown', e => { if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); document.getElementById('sidebar').classList.add('open'); menu.setAttribute('aria-expanded','true'); input.focus(); } if (e.key === 'Escape') { input.value=''; search(); input.blur(); } });
