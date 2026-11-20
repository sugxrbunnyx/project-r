import './style.css';

const state = {
  page: 'Discover',
  rux: 1250,
  avatar: { hair: 'Midnight', outfit: 'Academy', face: 'Classic', effect: 'None' },
  notice: 'Welcome to Project R — your world, your avatar, your rules.'
};

const games = [
  { title: 'Brookside Living', genre: 'Roleplay', players: '2.4k playing', color: 'rose', icon: '🏡', description: 'Move into a neighbourhood, decorate your home and make stories.' },
  { title: 'Runway Rivals', genre: 'Fashion', players: '1.8k playing', color: 'violet', icon: '👗', description: 'Create outfits, walk the runway and vote on themed looks.' },
  { title: 'Pet Haven', genre: 'Collection', players: '960 playing', color: 'blue', icon: '🐾', description: 'Meet original pets, explore habitats and complete quests.' },
  { title: 'Skyline Obby', genre: 'Obby', players: '740 playing', color: 'gold', icon: '🧱', description: 'A colourful obstacle course above the city.' }
];

const nav = ['Discover', 'Avatar', 'Create', 'Wallet', 'Safety'];
const app = document.querySelector('#app');

function avatarMarkup() {
  const hair = state.avatar.hair === 'Midnight' ? '#211b2c' : state.avatar.hair === 'Rose' ? '#b85e8e' : '#8a6548';
  const outfit = state.avatar.outfit === 'Academy' ? '#252337' : state.avatar.outfit === 'Streetwear' ? '#242b3b' : '#8a4b83';
  return `<div class="avatar-stage" aria-label="Blocky original game avatar preview">
    <div class="avatar-shadow"></div>
    <div class="avatar-figure">
      <div class="avatar-hair" style="background:${hair}"></div>
      <div class="avatar-head"><span class="eye left"></span><span class="eye right"></span><span class="mouth"></span></div>
      <div class="avatar-body" style="background:${outfit}"><span class="shirt-mark">R</span></div>
      <div class="avatar-arm arm-left" style="background:${outfit}"></div><div class="avatar-arm arm-right" style="background:${outfit}"></div>
      <div class="avatar-leg leg-left"></div><div class="avatar-leg leg-right"></div>
      ${state.avatar.effect !== 'None' ? '<div class="avatar-effect">✦</div>' : ''}
    </div>
    <div class="stage-caption">YOUR AVATAR · LIVE PREVIEW</div>
  </div>`;
}

function shell(content) {
  app.innerHTML = `<div class="layout">
    <aside class="sidebar">
      <div class="brand"><span class="brand-mark">R</span><span>PROJECT <b>R</b></span></div>
      <div class="side-label">PLATFORM</div>
      <nav>${nav.map(n => `<button class="nav-item ${state.page === n ? 'active' : ''}" data-page="${n}"><span>${({Discover:'◈',Avatar:'◉',Create:'＋',Wallet:'◇',Safety:'⬡'})[n]}</span>${n}</button>`).join('')}</nav>
      <div class="sidebar-bottom"><div class="online-dot"></div><div><b>Community status</b><small>Safety tools active</small></div></div>
    </aside>
    <main class="main">
      <header class="topbar"><div><span class="eyebrow">THE NEXT GENERATION OF PLAY</span><h1>${state.page}</h1></div><div class="top-actions"><div class="wallet-pill">✦ <b>${state.rux.toLocaleString()} RUX</b></div><div class="profile-chip"><span class="profile-icon">A</span><span><b>Guest Player</b><small>Starter profile</small></span></div></div></header>
      <div class="notice">${state.notice}</div>
      ${content}
      <footer>PROJECT R <span>•</span> Original worlds. Original items. Safer play.</footer>
    </main>
  </div>`;
  document.querySelectorAll('[data-page]').forEach(b => b.addEventListener('click', () => { state.page = b.dataset.page; render(); }));
  document.querySelectorAll('[data-action]').forEach(b => b.addEventListener('click', () => action(b.dataset.action, b.dataset.value)));
}

function discover() {
  return `<section class="hero">
    <div class="hero-copy"><span class="tag">PLAY · CREATE · BE YOU</span><h2>A whole universe<br>to make your own.</h2><p>Discover experiences, build your avatar and create worlds with your own ideas.</p><button class="primary" data-action="page" data-value="Avatar">Customise your avatar <span>→</span></button></div>
    <div class="hero-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-cube cube-one"></div><div class="hero-cube cube-two"></div>${avatarMarkup()}</div>
  </section>
  <div class="section-heading"><div><span class="eyebrow">FIND YOUR NEXT OBSESSION</span><h2>Featured experiences</h2></div><span class="muted">Demo catalogue</span></div>
  <section class="game-grid">${games.map(g => `<article class="game-card"><div class="game-art ${g.color}"><span class="game-icon">${g.icon}</span><span class="game-live">● ${g.players}</span></div><div class="game-info"><div><span class="genre">${g.genre}</span><h3>${g.title}</h3><p>${g.description}</p></div><button class="play-button" data-action="play" data-value="${g.title}">Play ↗</button></div></article>`).join('')}</section>
  <section class="creator-banner"><div><span class="eyebrow">YOUR IDEAS, YOUR RULES</span><h2>Make a world of your own.</h2><p>Start with a template, build a map and publish when it's ready.</p></div><button class="secondary" data-action="page" data-value="Create">Open Creator Studio →</button></section>`;
}

function avatarPage() {
  const options = (label, key, values) => `<div class="option-group"><div class="option-title">${label}</div><div class="option-row">${values.map(v => `<button class="option ${state.avatar[key] === v ? 'selected' : ''}" data-action="avatar" data-value="${key}:${v}">${v}</button>`).join('')}</div></div>`;
  return `<section class="avatar-layout"><div class="panel avatar-panel">${avatarMarkup()}<div class="avatar-actions"><button class="secondary" data-action="random">Randomise look</button><button class="primary" data-action="save-avatar">Save avatar</button></div></div><div class="panel editor-panel"><span class="eyebrow">CHARACTER EDITOR</span><h2>Make it yours.</h2><p class="muted">Mix original styles and accessories. More items will be added as the platform grows.</p>
    ${options('HAIRSTYLE','hair',['Midnight','Rose','Chestnut'])}
    ${options('OUTFIT','outfit',['Academy','Streetwear','Stage'])}
    ${options('FACE','face',['Classic','Smiley','Cool'])}
    ${options('SPECIAL EFFECT','effect',['None','Sparkle'])}
    <div class="info-note">Korblox-inspired and headless-style effects can be added as original, distinct Project R avatar items.</div>
  </div></section>`;
}

function createPage() {
  return `<section class="creator-layout"><div class="creator-preview"><div class="build-grid"><div class="build-platform"></div><div class="build-block b1"></div><div class="build-block b2"></div><div class="build-block b3"></div><div class="build-block b4"></div></div><span class="stage-caption">WORLD PREVIEW · TEMPLATE MODE</span></div><div class="panel editor-panel"><span class="eyebrow">CREATOR STUDIO</span><h2>Build something brilliant.</h2><p class="muted">This starter version previews the creator flow. A real 3D editor and publishing backend come next.</p><label>World name<input id="world-name" value="My First World" maxlength="32"></label><label>Starting template<select id="template"><option>Social plaza</option><option>Obby course</option><option>Roleplay home</option><option>Pet world</option></select></label><button class="primary full" data-action="create-world">Create project</button><div class="info-note">Publishing will require moderation checks before a world becomes public.</div></div></section>`;
}

function walletPage() {
  return `<section class="wallet-hero"><span class="eyebrow">PROJECT R VIRTUAL CURRENCY</span><h2>Your RUX wallet</h2><div class="balance">${state.rux.toLocaleString()} <small>RUX</small></div><p>Earn RUX through approved gameplay and creator contributions.</p></section><section class="earn-grid"><article class="panel"><span class="feature-icon">🎮</span><h3>Play approved games</h3><p>Earn rewards for meaningful play, quests and achievements — not endless AFK farming.</p><span class="reward">Gameplay rewards</span></article><article class="panel"><span class="feature-icon">🏆</span><h3>Complete challenges</h3><p>Take part in daily goals, events and community competitions.</p><span class="reward">Challenge rewards</span></article><article class="panel"><span class="feature-icon">🛠</span><h3>Create experiences</h3><p>Eligible creators can earn a share when people enjoy their games.</p><span class="reward">Creator earnings</span></article></section><div class="info-note">RUX is demo-only in this prototype. It has no cash value and cannot be purchased or withdrawn. A real economy needs anti-fraud rules, transparent reward rates and age-appropriate payment controls.</div>`;
}

function safetyPage() {
  return `<section class="safety-hero"><div class="safety-symbol">⬡</div><div><span class="eyebrow">SAFETY BY DESIGN</span><h2>Play should feel safe.</h2><p>Project R is being designed with protective defaults, strong reporting and active moderation.</p></div></section><section class="safety-grid">${[['No open DMs','Private messaging is off by default.'],['Filtered communication','Age-appropriate chat controls and filters.'],['Block and report','Easy tools to stop contact and flag concerns.'],['Moderated publishing','Experiences are checked before public release.'],['Privacy first','No public sharing of personal contact details.'],['Human review','Serious reports are escalated for trained review.']].map(([a,b])=>`<article class="panel safety-card"><span>✓</span><div><h3>${a}</h3><p>${b}</p></div></article>`).join('')}</section><p class="muted small">No online service can promise zero risk. These are planned safeguards; they must be implemented, tested and staffed before public launch.</p>`;
}

function render() {
  const pages = { Discover: discover, Avatar: avatarPage, Create: createPage, Wallet: walletPage, Safety: safetyPage };
  shell(pages[state.page]());
  document.querySelectorAll('[data-action="page"]').forEach(b => b.addEventListener('click', () => { state.page = b.dataset.value; render(); }));
}

function action(type, value) {
  if (type === 'page') { state.page = value; render(); return; }
  if (type === 'avatar') { const [k,v] = value.split(':'); state.avatar[k] = v; render(); return; }
  if (type === 'random') {
    state.avatar = { hair: ['Midnight','Rose','Chestnut'][Math.floor(Math.random()*3)], outfit: ['Academy','Streetwear','Stage'][Math.floor(Math.random()*3)], face: 'Classic', effect: Math.random() > .5 ? 'Sparkle' : 'None' };
    state.notice = 'New look generated. Make it yours.'; render(); return;
  }
  if (type === 'save-avatar') { state.notice = 'Avatar saved in this demo session.'; render(); return; }
  if (type === 'play') { state.notice = `${value} selected — game servers are the next development milestone.`; render(); return; }
  if (type === 'create-world') {
    const name = document.querySelector('#world-name')?.value.trim() || 'Untitled World';
    state.notice = `Project created: ${name}. It is saved as a local demo concept.`; render(); return;
  }
}

render();
