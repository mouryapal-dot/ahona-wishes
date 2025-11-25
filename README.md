# ahona-wishes
whishes for you
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Only for you !!!!💖</title>
  <style>
    :root{
      --bg:#fff6fb; --card:#fff; --accent:#ff2e63; --pink:#ff6fa9; --rose:#ff3b7a;
      --soft:#fff2f7; --muted:#6b4a57; --green:#3ecf8e; --shadow:0 12px 30px rgba(42,20,30,.12);
    }
    html,body{margin:0;height:100%;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;background:linear-gradient(180deg,#fffafc 0%, #fff0f7 60%); color:#3b2c33}
    .screen{min-height:100vh;display:none;align-items:center;justify-content:center;padding:28px;box-sizing:border-box}
    .screen.active{display:flex}
    .card{width:min(980px,96vw);background:var(--card);border-radius:18px;padding:clamp(16px,3.5vw,28px);box-shadow:var(--shadow);position:relative;z-index:6}
    .center{text-align:center}
    .title{font-size:clamp(20px,4vw,36px);color:var(--accent);font-weight:800;text-align:center;margin:6px 0}
    .subtitle{font-size:clamp(13px,3.2vw,16px);color:var(--muted);text-align:center;margin:6px 0 12px}
    .loadingText{font-weight:700;font-size:20px;color:#5a3b47;margin-top:6px}
    .micro{opacity:.9;color:#8a5a6b;font-size:14px;margin-top:8px}
    .bigTitle{font-size:clamp(36px,10vw,86px);margin:0;color:var(--rose);text-align:center;text-shadow:0 6px 18px rgba(255,107,150,.12)}
    .bigSub{margin-top:8px;font-size:clamp(14px,3.6vw,18px);color:#5a3b47}
    .countdown{margin-top:14px;font-weight:900;font-size:24px;color:#9b2a54}
    .waitingNote{font-size:16px;color:#6a4653;text-align:center;padding:36px}
    .cake-wrap{display:flex;justify-content:center;margin-top:12px;margin-bottom:10px}
    .cake{width:min(420px,86vw);filter:drop-shadow(0 12px 28px rgba(0,0,0,.12))}
    .boldText{font-weight:700}
    .smallFoot{color:#6b4a57;font-weight:700}

    /* Love interstitial */
    #loveInterstitial{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:90}
    #loveInterstitial.active{display:flex}
    .fullLove{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:linear-gradient(180deg,#fff0f7,#ffd9e9);position:relative;overflow:hidden}
    .loveText{font-size:clamp(28px,6vw,56px);font-weight:900;color:#7b1636;text-shadow:0 8px 26px rgba(255,110,150,.12)}

    /* hearts & petals animations */
    .heart{position:absolute;opacity:.95;pointer-events:none;animation:rise 6s linear forwards}
    .petal{position:absolute;opacity:.95;pointer-events:none;animation:fall 6s linear forwards}
    @keyframes rise{from{transform:translateY(20vh) scale(.9);opacity:.95}to{transform:translateY(-120vh) scale(1);opacity:0}}
    @keyframes fall{from{transform:translateY(-20vh) rotate(0deg);opacity:.95}to{transform:translateY(120vh) rotate(360deg);opacity:0}}

    /* balloons + mini */
    #bgParticles{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:0}
    .balloon{position:absolute;bottom:-20vh;width:clamp(28px,6.5vw,52px);aspect-ratio:.75/1;border-radius:50% 50% 45% 45%/60% 60% 40% 40%;transform:translateX(-50%);animation:floatUp linear forwards}
    @keyframes floatUp{from{transform:translate(-50%,0) scale(1);opacity:.95}to{transform:translate(-50%,-120vh) scale(1.03);opacity:0}}
    .mini{position:fixed;top:-5vh;font-size:clamp(10px,3.2vw,18px);opacity:.95;pointer-events:none;animation:fallDown linear forwards;z-index:1}
    @keyframes fallDown{to{transform:translateY(115vh) rotate(360deg);opacity:.95}}

    /* Quiz */
    .q{margin:12px 0;padding:12px;border-radius:12px;background:var(--soft)}
    .q h3{margin:0 0 8px;font-size:clamp(15px,3.6vw,20px)}
    .options{display:grid;gap:10px;grid-template-columns:repeat(2,minmax(0,1fr))}
    .options.single-col{grid-template-columns:1fr}
    .opt{background:#fff;padding:12px;border-radius:12px;border:2px solid #ffe6f1;font-weight:700;cursor:pointer;text-align:center;transition:transform .12s,box-shadow .12s}
    .opt:hover{transform:translateY(-4px);box-shadow:0 10px 22px rgba(219,82,140,.08)}
    .opt.correct{border-color:var(--green);box-shadow:0 8px 20px rgba(62,207,142,.12);background:linear-gradient(180deg,#f7fffa,#fff)}
    .opt.wrong{border-color:#ff9bb2;background:#fff4f7}
    .inline-msg{display:none;margin-top:10px;padding:8px 10px;border-radius:10px;text-align:center;font-weight:700}
    .inline-msg.show.good{display:block;color:#0a6f49;background:#e6fff4}
    .inline-msg.show.bad{display:block;color:#8a0b2b;background:#fff0f4}

    /* prompt box */
    .promptBox{margin-top:18px;padding:14px;border-radius:14px;background:linear-gradient(180deg,#fff,#fff7fb);box-shadow:var(--shadow);text-align:center}
    .promptTitle{font-weight:800;font-size:18px;color:#5a2b3c}
    .promptButtons{margin-top:10px}
    .bigChoice{display:inline-block;padding:12px 28px;border-radius:12px;margin:10px;font-weight:800;font-size:18px;cursor:pointer;background:linear-gradient(135deg,#ffd9e9,#ff9bb2);color:white;border:0;box-shadow:0 10px 24px rgba(255,95,142,.12)}
    .bigChoice.no{background:linear-gradient(135deg,#e9eef4,#d6e7ff);color:#264063}
    .replyArea{margin-top:10px}
    textarea{width:100%;min-height:120px;padding:12px;border-radius:10px;border:2px solid #ffe6f1;resize:vertical;margin-top:10px;font-size:15px}
    .smallActions{display:flex;gap:10px;justify-content:center;margin-top:12px}
    .actionBtn{padding:10px 16px;border-radius:10px;border:0;cursor:pointer;font-weight:700}
    .sendBtn{background:linear-gradient(135deg,#ff9bb2,#ff6fa9);color:white}
    .beautifyBtn{background:linear-gradient(135deg,#ffd6ea,#ff9bb2);color:#4a0536}
    .replySaved{margin-top:10px;color:#3e6f4a;font-weight:700}

    /* letter */
    .letter{max-width:860px;margin:12px auto;background:linear-gradient(180deg,#fff,#fff7fb);padding:18px;border-radius:12px;box-shadow:var(--shadow);font-size:16px;line-height:1.6}
    .letterTitle{font-weight:800;margin-bottom:8px}
    .bengaliNote{margin-top:12px;font-style:italic;color:#6b3f4f;font-weight:700}

    .yt-wrap{margin-top:12px;border-radius:12px;overflow:hidden;aspect-ratio:16/9;width:100%;box-shadow:0 12px 30px rgba(0,0,0,.12)}

    /* secret modal */
    #secretModal { position: fixed; inset:0; display:none; align-items:center; justify-content:center; z-index:999; }
    #secretModal .modalCard { width:min(920px,94vw); max-height:86vh; overflow:auto; background:white; border-radius:12px; padding:18px; box-shadow:0 20px 40px rgba(0,0,0,.18); }
    #secretModal pre { white-space:pre-wrap; word-wrap:break-word; font-size:15px; color:#2e2330; }

    @media(max-width:640px){
      .options{grid-template-columns:1fr}
      .bigChoice{font-size:16px;padding:10px 18px}
      .loveText{font-size:34px}
    }
  </style>
</head>
<body>

  <div id="bgParticles" aria-hidden="true"></div>

  <!-- Landing -->
  <section id="landing" class="screen active" aria-label="Loading screen">
    <div class="card center" role="status" aria-live="polite">
      <div class="title">Only for you !!!!💖</div>
      <div class="loadingText">Something special is loading</div>
      <div class="micro">A tiny surprise is being prepared for Ahona…</div>
    </div>
  </section>

  <!-- Quiz -->
  <section id="quiz" class="screen" aria-label="Quiz" hidden>
    <div class="card">
      <div class="title center">Our tiny love quiz 💘</div>
      <p class="subtitle center">Answer each question — the correct choice will gently move you forward.</p>

      <!-- Q1 -->
      <div class="q" data-correct="Kumurtuli">
        <h3>1) If we go on a date <span class="bracket">(After your JEE MAINS)</span> then where will I love to go?</h3>
        <div class="options">
          <button class="opt">Kumurtuli</button>
          <button class="opt">Cafe</button>
          <button class="opt">Cinema</button>
          <button class="opt">Music concert</button>
        </div>
        <div class="inline-msg" role="status" aria-live="polite"></div>
      </div>

      <!-- Q2 -->
      <div class="q" data-correct="Romantic old songs" hidden>
        <h3>2) The type of song you love to listen</h3>
        <div class="options">
          <button class="opt">Old days</button>
          <button class="opt">Romantic old songs</button>
          <button class="opt">Bollywood songs</button>
          <button class="opt">Party song</button>
        </div>
        <div class="inline-msg" role="status" aria-live="polite"></div>
      </div>

      <!-- Q3 -->
      <div class="q" data-correct="Biriyani" hidden>
        <h3>3) My favourite food</h3>
        <div class="options">
          <button class="opt">Biriyani</button>
          <button class="opt">Polau</button>
          <button class="opt">Momo</button>
          <button class="opt">Chinese</button>
        </div>
        <div class="inline-msg" role="status" aria-live="polite"></div>
      </div>

      <!-- Q4 -->
      <div class="q" data-correct="Yes" hidden>
        <h3>4) Will you be my mine ❤️?</h3>
        <div class="options single-col">
          <button class="opt">Yes</button>
          <button class="opt">No</button>
        </div>
        <div class="inline-msg" role="status" aria-live="polite"></div>
      </div>

      <!-- Anything you want to tell me -->
      <div id="tellBox" class="promptBox" style="display:none" aria-hidden="true">
        <div class="promptTitle">Anything you want to tell me?</div>
        <div class="promptButtons">
          <button id="tellYes" class="bigChoice">YES</button>
          <button id="tellNo" class="bigChoice no">NO</button>
        </div>

        <div id="replyArea" class="replyArea" style="display:none">
          <textarea id="replyText" placeholder="Write what you want to say..." aria-label="Your message"></textarea>
          <div class="smallActions">
            <button id="submitReply" class="actionBtn sendBtn">Submit</button>
            <button id="beautifyReply" class="actionBtn beautifyBtn">Make it more beautiful</button>
          </div>
          <div id="replySaved" class="replySaved" style="display:none" aria-live="polite"></div>
        </div>
      </div>

    </div>
  </section>

  <!-- I also Love You interstitial -->
  <section id="loveInterstitial" class="screen" aria-hidden="true" style="display:none">
    <div class="fullLove center">
      <div class="loveText">I also Love You…</div>
    </div>
  </section>

  <!-- Big Birthday message with countdown -->
  <section id="bigMsg" class="screen" aria-label="Birthday message" hidden>
    <div class="card center" id="bigMessageCard" role="status" aria-live="polite">
      <h1 class="bigTitle">Happy Birthday Ahona ♥️</h1>
      <p class="bigSub">May today be gentle and bright — just like you.</p>
      <div id="countdown" class="countdown" aria-live="polite">8</div>
    </div>
  </section>

  <!-- Short waiting note -->
  <section id="waiting" class="screen" aria-label="Short waiting" hidden>
    <div class="card center">
      <p class="waitingNote">Just a small moment more — the celebration continues. ✨</p>
    </div>
  </section>

  <!-- Wish / Cake / Surprise -->
  <section id="wish" class="screen" aria-label="Wish and surprise" hidden>
    <div class="card">
      <div class="title center">Happy Birthday Ahona ♥️♥️🎂🎂</div>
      <p class="subtitle center">Hope this brought a smile to your face. 🎈</p>

      <div class="cake-wrap" aria-hidden="false">
        <!-- cake svg -->
        <svg class="cake" viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" aria-label="Cake for Ahona">
          <ellipse cx="200" cy="310" rx="160" ry="18" fill="#f3d7e6"/>
          <rect x="50" y="220" width="300" height="80" rx="18" fill="#ffb3d1"/>
          <rect x="50" y="248" width="300" height="10" fill="#ff86b7"/>
          <rect x="85" y="160" width="230" height="70" rx="16" fill="#ffd6e8"/>
          <rect x="85" y="190" width="230" height="10" fill="#ffc0dd"/>
          <rect x="140" y="110" width="120" height="60" rx="12" fill="#fff6fb" stroke="#ffd0e9"/>
          <path d="M140 140 Q160 160 175 140 Q190 120 205 140 Q220 160 235 140 Q250 120 260 140 L140 140 Z" fill="#ffeef6"/>
          <rect x="197" y="62" width="6" height="48" rx="3" fill="#ffd36e"/>
          <rect x="196" y="46" width="8" height="16" rx="3" fill="#ff9f4d"/>
          <path d="M200 36 C196 44 204 44 200 60 C206 48 194 48 200 36 Z" fill="#ff944d"/>
          <text x="200" y="150" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#9a2d50" font-weight="700">Ahona</text>
        </svg>
      </div>

      <div class="center" style="margin-top:10px">
        <div class="boldText">Hope you enjoyed it and once again — Happy Birthday 🎈💖</div>
      </div>

      <div class="center" style="margin-top:14px">
        <button id="surpriseBtn" class="bigChoice" aria-controls="letterContainer">A little surprise for you</button>
      </div>

      <div id="letterContainer" style="display:none;margin-top:14px">
        <div class="letter">
          <div class="letterTitle">only for you 💕</div>

          <div id="simpleLetter">
            <p style="margin-top:0">My dear Ahona,</p>
            <p>Happy birthday. I hope today brings quiet smiles and small moments of joy. You mean a lot to me — thank you for being you.</p>
            <p>Always,</p>
            <p><strong>— Mourya</strong></p>
          </div>

          <div class="bengaliNote">ami bhalo gaan korte peri na tor moton tai jei gaan ta toke dedicate korte cha e seita eikhane diye dilam r asha korchi ei website ta dekhar por tor mukhe hasi phuteche.........</div>

          <div id="playerArea" class="yt-wrap" style="display:none"></div>
          <div id="playerFallback" style="display:none;margin-top:12px;text-align:center;color:#8a3b4f"></div>

          <div id="afterMusicNote" style="display:none;margin-top:12px;text-align:center;font-weight:700;color:#5a2b3c">Asha kori bhalo legeche 😊</div>
        </div>
      </div>

      <p class="center smallFoot" style="margin-top:12px">Asha kori eita dekhar por mukhe hasi phuteche 🙂</p>
    </div>
  </section>

  <!-- SECRET storage container (hidden) -->
  <div id="secretBox" style="display:none" aria-hidden="true"></div>

  <!-- Secret reveal modal -->
  <div id="secretModal" style="display:none;align-items:center;justify-content:center">
    <div class="modalCard">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <strong>Secret response (only visible after passphrase)</strong>
        <button id="secretClose" style="background:#efefef;border:0;padding:6px 10px;border-radius:8px;cursor:pointer">Close</button>
      </div>
      <pre id="secretContent">No secret yet.</pre>
    </div>
  </div>

<script>
/* ================== CONFIG ================== */

/* Video config */
const VIDEO_ID = 'x-adZUaI8hI'; // lyrical upload id (replace if needed)
const START_SEC = 30;
const END_SEC = 105;
const CLIP_LEN = END_SEC - START_SEC;

/* Secret reveal passphrase (change this before using) */
const REVEAL_PASSPHRASE = 'mourya-secret'; // <<< change to something only you know

/* ================== SELECTORS ================== */
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

const secretBox = document.getElementById('secretBox');
const secretModal = document.getElementById('secretModal');
const secretContent = document.getElementById('secretContent');
const secretClose = document.getElementById('secretClose');

/* ========== DECORATIVE HELPERS ========== */
function spawnBalloons(count = 14) {
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

/* ========== FLOW HELPERS ========== */
function showScreen(s) {
  [landing, quiz, loveInterstitial, bigMsg, waiting, wish].forEach(el => {
    if (!el) return;
    if (el === s) { el.classList.add('active'); el.hidden = false; el.style.display = ''; }
    else { el.classList.remove('active'); el.hidden = true; el.style.display = 'none'; }
  });
}

/* ========== START ========== */
function startFlow(){
  spawnBalloons(18);
  smallShower(8);
  setTimeout(()=> {
    showScreen(quiz);
    showQuestion(0);
  }, 1500);
}
window.addEventListener('load', startFlow);

/* ========== QUIZ ========== */
let qIndex = 0;
function showQuestion(idx) {
  questions.forEach((q,i)=> { if (q) q.hidden = i !== idx; });
}

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

      // Q2 fixed message
      if (q.dataset.correct === 'Romantic old songs' && chosen === 'Romantic old songs') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('correct');
        if (inline) { inline.textContent = q2FixedMsg; inline.className = 'inline-msg show good'; }
        spawnBalloons(6); smallShower(4);
        setTimeout(()=> afterCorrect(idx), 1000);
        return;
      }

      // Q4 YES special: show interstitial THEN tell box
      if (q.dataset.correct === 'Yes' && chosen === 'Yes') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('correct');
        // show I also Love You interstitial for 3s then tellBox
        showLoveThenTell();
        return;
      }

      // Q4 NO: respectful message then continue to tellBox
      if (q.dataset.correct === 'Yes' && chosen === 'No') {
        opts.forEach(o => o.classList.remove('wrong'));
        btn.classList.add('wrong');
        if (inline) { inline.textContent = "That's okay — thank you for being honest."; inline.className = 'inline-msg show bad'; }
        setTimeout(()=> afterCorrect(idx), 1000);
        return;
      }

      // default correct behavior
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
    // show tellBox (most cases: Q4 No or finished without Q4-Yes path)
    if (tellBox) {
      tellBox.style.display = 'block';
      tellBox.setAttribute('aria-hidden','false');
      tellBox.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }
}

/* ========== I ALSO LOVE YOU flow ========== */
function showLoveThenTell() {
  // show interstitial
  if (loveInterstitial) {
    showScreen(loveInterstitial);
    loveInterstitial.setAttribute('aria-hidden','false');
    // spawn hearts/petals + balloons for 3s
    spawnHeartsAndPetals(18);
    spawnBalloons(12);
    // after 3s hide and show tellBox
    setTimeout(()=> {
      // cleanup hearts/petals
      if (loveInterstitial) loveInterstitial.querySelectorAll('.heart,.petal').forEach(n=>n.remove());
      // show tellBox (we bring back quiz area as background context)
      showScreen(quiz);
      if (tellBox) {
        tellBox.style.display = 'block';
        tellBox.setAttribute('aria-hidden','false');
        tellBox.scrollIntoView({behavior:'smooth', block:'center'});
      }
    }, 3000);
  } else {
    if (tellBox) tellBox.style.display = 'block';
  }
}

/* ========== TELL BOX handlers ========== */
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

    // store secret locally in hidden div (Option B)
    storeSecret({
      timestamp: new Date().toLocaleString(),
      choice: 'Yes',
      message: v
    });

    setTimeout(()=> goToBigMessage(), 900);
  });
}

/* ========== Store secret in hidden div ========== */
function storeSecret(obj) {
  if (!secretBox) return;
  // maintain an array of entries in JSON inside the div
  let current = [];
  try {
    const raw = secretBox.textContent.trim();
    current = raw ? JSON.parse(raw) : [];
  } catch(e) {
    current = [];
  }
  current.push(obj);
  secretBox.textContent = JSON.stringify(current);
  // the div remains hidden from normal page view and not accessible via UI
}

/* ========== Secret reveal: press "M" to open (with passphrase) ========== */
function revealSecretFlow() {
  const pass = prompt('Enter passphrase to reveal secret responses:');
  if (pass === null) return;
  if (pass === REVEAL_PASSPHRASE) {
    // show modal
    const raw = secretBox.textContent.trim();
    let parsed = [];
    try { parsed = raw ? JSON.parse(raw) : []; } catch(e) { parsed = []; }
    if (!parsed.length) {
      secretContent.textContent = 'No secret responses stored yet.';
    } else {
      secretContent.textContent = parsed.map((p,i)=> `#${i+1} — ${p.timestamp}\nChoice: ${p.choice}\nMessage:\n${p.message || '(no message)'}\n\n`).join('\n');
    }
    secretModal.style.display = 'flex';
  } else {
    alert('Wrong passphrase.');
  }
}
document.addEventListener('keydown', (e)=> {
  if (e.key.toLowerCase() === 'm') {
    revealSecretFlow();
  }
});
if (secretClose) secretClose.addEventListener('click', ()=> secretModal.style.display = 'none');

/* ========== Big birthday flow ========== */
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

/* ========== Surprise -> letter + youtube ========== */
if (surpriseBtn) {
  surpriseBtn.addEventListener('click', ()=> {
    if (letterContainer) letterContainer.style.display = 'block';
    if (letterContainer) letterContainer.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(()=> initYouTubePlayer(), 700);
  });
}

/* ========== YouTube IFrame API ========== */
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

/* ========== Accessibility & initial sparkles ========== */
questions.forEach(q => { const opts = q.querySelectorAll('.opt'); if (opts.length) opts[0].setAttribute('tabindex','0'); });
window.addEventListener('load', ()=> smallShower(8));
</script>
</body>
</html>
