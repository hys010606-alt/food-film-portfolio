// 프로젝트의 제목, 설명, 순서는 이 목록에서 수정합니다.
const pages = (stem, count) => Array.from({length: count}, (_, i) => `assets/${stem}-${i + 1}.jpg`);
const portfolio = {
  projects: [
    {id:'story', food:true, category:'planning', categoryLabel:'유튜브 영상 기획/제작', title:'스토리 퀴진 — 이야기 한 그릇', video:'assets/story-intro.mp4', poster:'assets/story-intro-poster.jpg', videoLabel:'첫 영상 인트로 열기', previewHeading:'채널 기획서', images:pages('story-slide',14), document:'assets/story-cuisine.pptx', documentLabel:'채널 기획서 PPTX 다운로드', tools:['인트로 영상','채널 콘셉트','콘텐츠 기획','브랜드 방향'], description:'세계 음식의 유래와 사연을 에피소드로 풀어내는 유튜브 채널 기획입니다. 첫 영상 인트로와 함께 시청 대상, 에피소드 구성, 채널의 시각적 방향을 담은 기획서를 볼 수 있습니다.'},
    {id:'kfc', food:true, category:'design', title:'KFC 웹사이트 리디자인', href:'kfc/index.html'},
    {id:'cg', food:true, category:'web', title:'혼밥일지 — 웹앱 개발', href:'https://hys010606-alt.github.io/food-film-portfolio/honbap/'},
    {id:'honbap-promo', food:true, category:'video', categoryLabel:'홍보 영상 제작', title:'혼밥일지 — 웹앱 홍보 영상', video:'assets/cg.mp4', poster:'assets/honbap-promo.jpg', videoLabel:'홍보 영상 원본 열기', tools:['홍보 영상 제작','영상 편집'], description:'직접 개발한 혼밥일지를 소개하기 위해 제작한 홍보 영상입니다. 일상에서 한 끼를 준비하는 장면과 웹앱의 사용 화면을 이어, 혼자서도 한 끼를 챙기고 기록하는 흐름을 보여줍니다.'},
    {id:'bose', category:'video', categoryLabel:'광고 제작 · 브랜드 영상', title:'BOSE — 세상의 소음을 끄다', video:'assets/bose.mp4', tools:['광고 제작','콘셉트 기획','콘티'], description:'BOSE 이어버드를 소재로 콘셉트 기획과 콘티부터 영상으로 구현한 광고 제작 작품입니다. 소음이 가득한 일상에서 나만의 고요와 몰입을 되찾는 순간을 담은 완성 영상과 제작기획서를 소개합니다.', document:'assets/bose-plan-design.pdf', documentLabel:'광고 제작기획서 PDF 열기', images:pages('bose-plan-design',12)},
    {id:'detail', category:'design', categoryLabel:'소셜커머스 상세페이지 제작', title:'boboni — 이불 수납 파우치', images:['assets/boboni-detail-v2.webp'], imageSize:[860,9287], document:'assets/boboni-detail-v2.png', documentLabel:'상세페이지 전체 이미지 열기', tools:['소셜커머스','상세페이지 제작','제품 정보 구성','비주얼 디자인'], description:'보보니 이불 수납 파우치를 소개하는 소셜커머스 상세페이지 제작 작품입니다. 제품의 장점을 쉽게 이해하고 구매에 필요한 정보를 확인할 수 있도록 사용 장면, 여섯 가지 수납 포인트, 압축 전후 비교, 컬러와 사이즈를 구성했습니다.'},
    {id:'illustration', category:'design', categoryLabel:'2D 그래픽 · 일러스트레이션', title:'하나투어 여행 프로모션', images:['assets/mockup-hana-street-flyer-v1.webp','assets/illustration-6.jpg',...pages('illustration',5),'assets/illustration-7.jpg'], imageSizes:[[1536,1024]], document:'assets/illustration.pdf', documentLabel:'일러스트레이션 PDF 열기', tools:['일러스트레이션','포스터','목업'], description:'여러 나라의 랜드마크를 일러스트로 표현한 여행 프로모션 포스터입니다. 디자인 콘셉트와 타깃 분석에서 스케치, 시안, 목업까지 제작 과정을 소개합니다.'},
  ]
};
const grid = document.querySelector('#projects');
const galleryCovers = {
  cg: { src: 'assets/gallery-cg.jpg', role: '웹앱 개발' },
  'honbap-promo': { src: 'assets/honbap-promo.jpg', role: '홍보 영상 제작' },
  bose: { src: 'assets/mockup-bose-street-screen-v1.webp', role: '광고 제작 · 브랜드 영상' },
  detail: { src: 'assets/mockup-boboni-imac-v2.png', role: '소셜커머스 상세페이지 제작' },
  kfc: { src: 'assets/mockup-kfc-imac-v2.png' },
  illustration: { src: 'assets/mockup-hana-street-flyer-v1.webp' },
  story: { src: 'assets/mockup-story-youtube-v1.webp', role: '유튜브 영상 기획/제작' }
};
portfolio.projects.forEach(project => {
  const article = document.createElement('article');
  article.className = 'project';
  const tile = document.createElement(project.href ? 'a' : 'button');
  tile.className = `project-button gallery-${project.id}`;
  if (project.href) {
    tile.href = project.href;
    tile.target = '_blank';
    tile.rel = 'noopener';
  } else {
    tile.type = 'button';
    tile.setAttribute('aria-label', `${project.title} 프로젝트 자세히 보기`);
    tile.setAttribute('aria-haspopup', 'dialog');
    tile.addEventListener('click', () => openProject(project));
  }
  const cover = galleryCovers[project.id];
  tile.innerHTML = `<span class="gallery-art"><img src="${cover.src}" alt="" loading="lazy" width="800" height="800"></span><span class="gallery-caption"><span class="gallery-name">${project.title}</span></span>`;
  if (cover.role) {
    const role = document.createElement('span'); role.className = 'gallery-role'; role.textContent = cover.role;
    tile.querySelector('.gallery-caption').prepend(role);
  }
  article.append(tile); grid.append(article);
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    [...grid.children].forEach((card, index) => {
      const project = portfolio.projects[index];
      const filter = button.dataset.filter;
      const matches = filter === 'all' || filter === project.category
        || (filter === 'food' && project.food) || (filter === 'video' && project.category === 'planning');
      card.hidden = !matches;
    });
  });
});
const dialog = document.querySelector('#project-dialog');
const videoArea = document.querySelector('#video-area');
function addVideo(src, poster) {
  const video = document.createElement('video');
  video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.src = src;
  if (poster) video.poster = poster;
  video.textContent = '이 브라우저는 영상 재생을 지원하지 않습니다.'; videoArea.append(video);
  video.addEventListener('error', () => {
    const note = document.createElement('p'); note.textContent = '영상을 재생하지 못했습니다. 아래 원본 링크로 열어보세요.'; videoArea.append(note);
  });
}
function openProject(project) {
  document.querySelector('#dialog-category').textContent = project.categoryLabel;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-tags').replaceChildren(...project.tools.map(tool => {
    const span = document.createElement('span'); span.textContent = tool; return span;
  }));
  videoArea.replaceChildren();
  const links = document.createElement('div'); links.className = 'document-links';
  const link = (url, label) => {
    const a = document.createElement('a'); a.href = url; a.textContent = label + ' ↗';
    a.target = '_blank'; a.rel = 'noopener';
    return a;
  };
  if (project.video) {
    addVideo(project.video, project.poster);
    links.append(link(project.video, project.videoLabel || '영상 원본 열기'));
  }
  if (project.document) links.append(link(project.document, project.documentLabel));
  if (links.childElementCount) videoArea.append(links);
  if (project.images) {
    const section = document.createElement('section'); section.className = 'document-preview';
    const heading = document.createElement('h3'); heading.textContent = project.previewHeading || (project.video ? '함께 보는 제작기획서' : '작업 미리 보기'); section.append(heading);
    project.images.forEach((src, index) => {
      const [width, height] = project.imageSizes?.[index] || project.imageSize || [1600, 900];
      const page = document.createElement('img');
      page.className = 'document-page';
      page.src = src;
      page.alt = `${project.title} ${index + 1} / ${project.images.length} 페이지`;
      page.width = width;
      page.height = height;
      page.loading = index === 0 ? 'eager' : 'lazy';
      page.decoding = 'async';
      section.append(page);
    });
    videoArea.append(section);
  }
  dialog.showModal(); dialog.scrollTop = 0; document.body.style.overflow = 'hidden';
}
document.querySelector('#showreel').addEventListener('click', () => openProject(portfolio.projects.find(project => project.id === 'story')));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  videoArea.querySelector('video')?.pause(); videoArea.replaceChildren(); document.body.style.overflow = '';
});
document.querySelector('#year').textContent = new Date().getFullYear();
