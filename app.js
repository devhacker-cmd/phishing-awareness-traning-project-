const MODULES = [
  {
    id: 'm1',
    title: 'Advanced red flags',
    sub: 'Spotting sophisticated attacks'
  },
  ...
];
const SIMS = [
  {
    from: 'security@paypa1-verify.net',
    subject: 'Your PayPal account is limited',
    safe: false
  },
  ...
];
let state = {
  name: '',
  completed: {},
  simDone: 0,
  simScore: 0,
  openMod: null
};
function goIntro() {
  const n = document.getElementById('userName').value.trim();
  if (n.length < 2) return;

  state.name = n;
  document.getElementById('pg-landing').style.display = 'none';
  document.getElementById('pg-intro').style.display = 'block';
}
function goApp() {
  document.getElementById('pg-intro').style.display = 'none';
  document.getElementById('pg-app').style.display = 'block';
}
function updateProgress() {
  const pct = Math.round(...);
  document.getElementById('topPct').textContent =
      pct + '% complete';
}
function completeMod(id) {
  state.completed[id] = true;
  updateProgress();
}
function simAnswer(choice) {
  if (correct)
      state.simScore++;

  state.simDone++;
}
function renderCert() {
  const today =
      new Date().toLocaleDateString('en-IN');
}
function showTab(id) {
  document.querySelectorAll('.pg')
      .forEach(p => p.classList.remove('active'));

  document.getElementById('pg-' + id)
      .classList.add('active');
}
