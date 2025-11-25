/* ---------------- CONFIG & VIDEO ID ---------------- */
const VIDEO_ID = 'x-adZUaI8hI'; // lyric upload ID (fallback link shown if embedding blocked)
const START_SEC = 30;          // start at 0:30
const END_SEC = 105;          // end at 1:45
const CLIP_LEN = END_SEC - START_SEC;

/* ---------------- SELECTORS ---------------- */
const landing = document.getElementById('landing');
const quiz = document.getElementById('quiz');
const loveInterstitial = document.getElementById('loveInterstitial');
const bigMsg = document.getElementById('bigMsg');
const waiting = document.getElementById('waiting');
const wish = document.getElementById('wish');

const questions = Array.from(document.querySelectorAll('.q'));
const tellBox = document.getElementById('tellBox');
const tellYes = document.getElementById('tellYes');
const tellNo = document.getElementById('tellNo');
const replyArea = document.getElementById('replyArea');
const replyText = document.getElementById('replyText');
const submitReply = document.getElementById('submitReply');
const beautifyReply = document.getElementById('beautifyReply');
const replySaved = document.getElementById('replySaved');

const surpriseBtn = document.getElementById('surpriseBtn');
const letterContainer = document.getElementById('letterContainer');
const playerArea = document.getElementById('playerArea');
const playerFallback = document.getElementById('playerFallback');
const afterMusicNote = document.getElementById('afterMusicNote');

const bgParticles = document.getElementById('bgParticles');
const countdownEl = document.getElementById('countdown');

/* ---------------- DECORATIONS ---------------- */
function spawnBalloons(count = 18) {
  if (!bgParticles) return;
  const colors = ['#ff3b7a','#ff6fa9','#ff2e63','#ff86b7'];
  for (let i=0;i<count;i++){
    const b = document.createElement('div');
    b.className = 'balloon';
    const hue = colors[Math.floor(Math.random()*colors.length)];
    b.style.background = `radial-gradient(circle at 40% 25%, rgba(255,255,255,.2) 0 18%, transparent 19%), ${hue}`;
    b.style.left = (Math.random()*92 + 4) + 'vw';
    b.style.animationDuration = (6 + Math.random()*4) + 's';
    b.style.animationDelay = (Math.random()*1.5) + 's';
    bgParticles.appendChild(b);
    setTimeout(()=> b.remove(), 12000);
  }
}
const miniPool = ['🌸','🌷','🌺','💮','🌼','💐','💗','💖','💝'];
function smallShower(count = 8) {
  if (!bgParticles) return;
  for (let i=0;i<count;i++){
    const e = document.createElement('div');
    e.className = 'mini';
    e.textContent = miniPool[Math.floor(Math.random()*miniPool.length)];
    e.style.left = (Math.random()*92 + 4) + 'vw';
    e.style.fontSize = (Math.random()*8 + 12) + 'px';
    e.style.animationDuration = (3 + Math.random()*4) + 's';
    e.style.animationDelay = (Math.random()*1) + 's';
    bgParticles.appendChild(e);
    setTimeout(()=> e.remove(), (parseFloat(e.style.animationDuration)*1000)+800);
  }
}

/* hearts & petals for interstitial */
function spawnHeartsAndPetals(count = 12) {
  if (!loveInterstitial) return;
  for (let i=0;i<count;i++){
    const el = document.createElement('div');
    const isHeart = Math.random() > 0.45;
    el.className = isHeart ? 'heart' : 'petal';
    el.textContent = isHeart ? '💗' : '🌸';
    el.style.left = (Math.random()*92 + 4) + 'vw';
    el.style.fontSize = (Math.random()*18 + 18) + 'px';
    el.style.animationDuration = (4 + Math.random()*4) + 's';
    el.style.animationDelay = (Math.random()*0.3) + 's';
    loveInterstitial.appendChild(el);
    setTimeout(()=> el.remove(), 7000);
  }
}

/* ---------------- FLOW HELPERS ---------------- */
function showScreen(screenEl) {
  [landing, quiz, loveInterstitial, bigMsg, waiting, wish].forEach(s => {
    if (!s) return;
    if (s === screenEl) { s.classList.add('active'); s.hidden = false; }
    else { s.classList.remove('active'); s.hidden = true; }
  });
}

/* ---------------- START FLOW ---------------- */
function startFlow(){
  spawnBalloons(18); smallShower(8);
  setTimeout(()=> {
    showScreen(quiz);
    showQuestion(0);
  }, 1500);
}
window.addEventListener('load', startFlow);

/* ---------------- QUIZ ---------------- */
let qIndex = 0;
function showQuestion(idx) {
  questions.forEach((q,i) => { if (q) q.hidden = i !== idx; });
}

/* custom messages */
const q2FixedMsg = "See, I know you.";
const defaultGood = "See? You always understand me. 💕";

questions.forEach((q, idx) => {
  if (!q) return;
  const correct = q.dataset.correct;
  const opts = Array.from(q.querySelectorAll('.opt'));
  const inline = q.querySelector('.inline-msg');

  opts.forEach(btn => {
    btn.addEventListener('click', ()=> {
      const chosen = btn.textContent.trim();

      // Q2 fixed message when correct
      if (q.dataset.correct === 'Romantic old songs' && chosen === 'Romantic old songs') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('correct');
        if (inline) { inline.textContent = q2FixedMsg; inline.className = 'inline-msg show good'; }
        spawnBalloons(6); smallShower(4);
        setTimeout(()=> afterCorrect(idx), 1000);
        return;
      }

      // Q4 YES -> show interstitial THEN show tellBox
      if (q.dataset.correct === 'Yes' && chosen === 'Yes') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('correct');
        // show I also Love You interstitial for 3s then show tell box
        showLoveThenTell();
        return;
      }

      // Q4 NO -> soft response then allow tellBox
      if (q.dataset.correct === 'Yes' && chosen === 'No') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('wrong');
        if (inline) { inline.textContent = "That's okay — thank you for being honest."; inline.className = 'inline-msg show bad'; }
        setTimeout(()=> afterCorrect(idx), 1000);
        return;
      }

      // default: other questions
      if (chosen === correct) {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('correct');
        if (inline) { inline.textContent = defaultGood; inline.className = 'inline-msg show good'; }
        spawnBalloons(8); smallShower(6);
        setTimeout(()=> afterCorrect(idx), 1000);
      } else {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('wrong');
        if (inline) { inline.textContent = "Not quite — try again, please. 🥺"; inline.className = 'inline-msg show bad'; }
      }
    });
  });
});

function afterCorrect(idx) {
  const cur = questions[idx];
  if (cur) {
    const inline = cur.querySelector('.inline-msg');
    if (inline) { inline.className = 'inline-msg'; inline.textContent = ''; }
  }
  if (idx < questions.length - 1) {
    qIndex = idx + 1;
    showQuestion(qIndex);
    const first = questions[qIndex].querySelector('.opt');
    if (first) first.focus();
  } else {
    // all questions done -> show tellBox (unless Q4 yes flow will handle tellBox after interstitial)
    if (tellBox) {
      tellBox.style.display = 'block';
      tellBox.setAttribute('aria-hidden','false');
      tellBox.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }
}

/* ---------------- I also Love You flow ---------------- */
function showLoveThenTell() {
  // show interstitial
  if (loveInterstitial) {
    showScreen(loveInterstitial);
    loveInterstitial.setAttribute('aria-hidden','false');
    spawnHeartsAndPetals(18);
    spawnBalloons(12);
    // after 3 seconds -> hide interstitial and show tellBox
    setTimeout(()=> {
      // remove hearts/petals if any left
      if (loveInterstitial) loveInterstitial.querySelectorAll('.heart,.petal').forEach(n=>n.remove());
      if (tellBox) {
        // show tellBox after interstitial
        showScreen(quiz); // bring quiz area as background, show tellBox on top by scrolling to it
        tellBox.style.display = 'block';
        tellBox.setAttribute('aria-hidden','false');
        tellBox.scrollIntoView({behavior:'smooth', block:'center'});
      }
    }, 3000);
  } else {
    // fallback: directly show tell box
    if (tellBox) tellBox.style.display = 'block';
  }
}

/* ---------------- Tell box handlers ---------------- */
if (tellYes) {
  tellYes.addEventListener('click', ()=> {
    if (replyArea) { replyArea.style.display = 'block'; if (replyText) replyText.focus(); }
  });
}
if (tellNo) {
  tellNo.addEventListener('click', ()=> {
    goToBigMessage();
  });
}
if (beautifyReply) {
  beautifyReply.addEventListener('click', ()=> {
    const v = (replyText && replyText.value.trim()) || "Your smile brightens everything.";
    if (replyText) replyText.value = `“${v.replace(/\n/g,' ')}”\n\n— with all my heart 💕`;
  });
}
if (submitReply) {
  submitReply.addEventListener('click', ()=> {
    const v = (replyText && replyText.value.trim()) || '';
    if (replySaved) {
      replySaved.style.display = 'block';
      replySaved.textContent = v ? "Your message was saved. Thank you 💌" : "You didn't write anything — that's okay. ❤️";
    }
    setTimeout(()=> goToBigMessage(), 900);
  });
}

/* ---------------- Big message (countdown) -> waiting -> wish ---------------- */
function goToBigMessage() {
  showScreen(bigMsg);
  spawnBalloons(28); smallShower(20);

  if (countdownEl) {
    let sec = 8;
    countdownEl.textContent = sec;
    const t = setInterval(()=> {
      sec -= 1;
      if (sec >= 0) countdownEl.textContent = sec;
      if (sec < 0) clearInterval(t);
    }, 1000);
  }

  setTimeout(()=> {
    showScreen(waiting);
    spawnBalloons(12); smallShower(8);
    setTimeout(()=> {
      showScreen(wish);
      spawnBalloons(16); smallShower(12);
    }, 1500);
  }, 8000);
}

/* ---------------- Surprise -> letter + youtube ---------------- */
if (surpriseBtn) {
  surpriseBtn.addEventListener('click', ()=> {
    if (letterContainer) letterContainer.style.display = 'block';
    if (letterContainer) letterContainer.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(()=> initYouTubePlayer(), 700);
  });
}

/* ------------- YouTube IFrame API ------------- */
let player = null;
function loadYouTubeAPI() {
  return new Promise(res => {
    if (window.YT && window.YT.Player) return res();
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => res();
    setTimeout(()=> { if (window.YT && window.YT.Player) res(); }, 4000);
  });
}

async function initYouTubePlayer(){
  if (!playerArea) { console.warn('playerArea not found'); return; }
  if (player) { playSegment(player, START_SEC, CLIP_LEN); return; }

  await loadYouTubeAPI();
  playerArea.style.display = 'block';
  playerFallback.style.display = 'none';
  playerArea.innerHTML = '<div id="ytplayer"></div>';

  player = new YT.Player('ytplayer', {
    height: '100%',
    width: '100%',
    videoId: VIDEO_ID,
    playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1, start: START_SEC },
    events: {
      onReady: (e) => {
        playSegment(e.target, START_SEC, CLIP_LEN);
        // show afterMusicNote when clip ends
        setTimeout(()=> { if (afterMusicNote) afterMusicNote.style.display = 'block'; }, (CLIP_LEN * 1000) + 800);
      },
      onError: (ev) => {
        console.warn('YT player error', ev);
        if (playerFallback) {
          playerFallback.style.display = 'block';
          playerFallback.innerHTML = `
            <div>Sorry — this video can't be played inside this page.</div>
            <div style="margin-top:8px"><a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener">Open the song on YouTube</a></div>
          `;
        }
        setTimeout(()=> { if (afterMusicNote) afterMusicNote.style.display = 'block'; }, 2000);
      }
    }
  });
}

function playSegment(p, start, duration){
  try {
    p.seekTo(start, true);
    p.playVideo();
    setTimeout(()=> { try { p.pauseVideo(); } catch(e){} }, (duration*1000) + 600);
  } catch(e) {
    console.warn('YT playback issue', e);
    if (playerFallback) playerFallback.style.display = 'block';
    setTimeout(()=> { if (afterMusicNote) afterMusicNote.style.display = 'block'; }, 2000);
  }
}

/* Accessibility & initial sparkles */
questions.forEach(q => { const opts = q.querySelectorAll('.opt'); if (opts.length) opts[0].setAttribute('tabindex','0'); });
window.addEventListener('load', ()=> smallShower(8));
