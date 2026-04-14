// ============================================================
// PROMO — countdown timer untuk hero banner flash sale
// ============================================================

function setupPromo() {
  createCountdown("heroTimer1", 5);
}

function createCountdown(elementId, targetHours) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const key        = "zenlora-timer-" + elementId;
  let   targetTime = parseInt(sessionStorage.getItem(key));

  if (!targetTime || targetTime < Date.now()) {
    targetTime = Date.now() + targetHours * 3600000;
    sessionStorage.setItem(key, targetTime);
  }

  function tick() {
    const diff = targetTime - Date.now();
    if (diff <= 0) { el.textContent = "00:00:00"; return; }

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    el.textContent = [h, m, s].map(n => String(n).padStart(2, "0")).join(":");
  }

  tick();
  setInterval(tick, 1000);
}