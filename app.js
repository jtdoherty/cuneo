/* ─────────────────────────────────────────
   DATA — hardcoded to match backend contract
   Replace with ws.onmessage to go live
───────────────────────────────────────── */
const PAYLOADS = {
  AAPL: {
    ticker:'AAPL', forecast_quarter:'Q2 2025', selected_model_mode:'hybrid',
    selected_anchor:'trailing_4q', macro_weight:0.3,
    forecast_revenue_yoy:0.062, forecast_revenue:97.8e9,
    macro_only_forecast_yoy:0.091, macro_signal_label:'Modest Upside',
    confidence:'High', walk_forward_mae:0.018, walk_forward_r2:0.61,
    selected_features:['Consumer Sentiment (U Mich)','Retail Sales ex-Auto','PCE Services','10Y Treasury Yield'],
    selected_lags:[4,4,2,3], anchor_yoy:0.051,
    revenue_history:[
      {q:'Q2 22',v:82.96e9},{q:'Q3 22',v:90.15e9},{q:'Q4 22',v:117.15e9},
      {q:'Q1 23',v:94.84e9},{q:'Q2 23',v:81.80e9},{q:'Q3 23',v:89.50e9},
      {q:'Q4 23',v:119.58e9},{q:'Q1 24',v:90.75e9},{q:'Q2 24',v:85.78e9},
      {q:'Q3 24',v:94.93e9},{q:'Q4 24',v:124.30e9},{q:'Q1 25',v:95.36e9}
    ],
    current_price:196.40, shares:15.2e9,
    valuation_band:{bear:155,base:198,bull:248,trustworthy_bear:148,trustworthy_base:198,trustworthy_bull:255}
  },
  MSFT: {
    ticker:'MSFT', forecast_quarter:'Q2 2025', selected_model_mode:'level',
    selected_anchor:'trailing_4q', macro_weight:0.2,
    forecast_revenue_yoy:0.138, forecast_revenue:70.1e9,
    macro_only_forecast_yoy:0.152, macro_signal_label:'Strong Upside',
    confidence:'High', walk_forward_mae:0.012, walk_forward_r2:0.74,
    selected_features:['ISM Services','PCE Services','10Y Treasury Yield','Corporate Credit Spreads'],
    selected_lags:[2,2,4,3], anchor_yoy:0.128,
    revenue_history:[
      {q:'Q2 22',v:49.36e9},{q:'Q3 22',v:50.12e9},{q:'Q4 22',v:52.75e9},
      {q:'Q1 23',v:56.19e9},{q:'Q2 23',v:56.19e9},{q:'Q3 23',v:56.52e9},
      {q:'Q4 23',v:62.02e9},{q:'Q1 24',v:61.86e9},{q:'Q2 24',v:64.73e9},
      {q:'Q3 24',v:65.59e9},{q:'Q4 24',v:69.63e9},{q:'Q1 25',v:70.07e9}
    ],
    current_price:427.80, shares:7.44e9,
    valuation_band:{bear:340,base:428,bull:520,trustworthy_bear:328,trustworthy_base:428,trustworthy_bull:538}
  },
  AMZN: {
    ticker:'AMZN', forecast_quarter:'Q2 2025', selected_model_mode:'hybrid',
    selected_anchor:'trailing_8q', macro_weight:0.5,
    forecast_revenue_yoy:0.092, forecast_revenue:162.4e9,
    macro_only_forecast_yoy:0.104, macro_signal_label:'Modest Upside',
    confidence:'Medium', walk_forward_mae:0.031, walk_forward_r2:0.38,
    selected_features:['Retail Sales','Consumer Confidence','ISM Manufacturing','Housing Starts'],
    selected_lags:[1,2,3,5], anchor_yoy:0.083,
    revenue_history:[
      {q:'Q2 22',v:121.2e9},{q:'Q3 22',v:127.1e9},{q:'Q4 22',v:149.2e9},
      {q:'Q1 23',v:127.4e9},{q:'Q2 23',v:134.4e9},{q:'Q3 23',v:143.1e9},
      {q:'Q4 23',v:169.9e9},{q:'Q1 24',v:143.3e9},{q:'Q2 24',v:148.1e9},
      {q:'Q3 24',v:158.9e9},{q:'Q4 24',v:187.8e9},{q:'Q1 25',v:155.7e9}
    ],
    current_price:212.50, shares:10.56e9,
    valuation_band:{bear:168,base:218,bull:276,trustworthy_bear:155,trustworthy_base:218,trustworthy_bull:290}
  },
  NKE: {
    ticker:'NKE', forecast_quarter:'Q2 2025', selected_model_mode:'delta',
    selected_anchor:'last_yoy', macro_weight:0.1,
    forecast_revenue_yoy:-0.041, forecast_revenue:11.7e9,
    macro_only_forecast_yoy:-0.067, macro_signal_label:'Modest Downside',
    confidence:'Medium', walk_forward_mae:0.028, walk_forward_r2:0.29,
    selected_features:['Consumer Sentiment (U Mich)','Retail Sales ex-Auto','China PMI','USD Index'],
    selected_lags:[3,2,4,4], anchor_yoy:-0.038,
    revenue_history:[
      {q:'Q2 22',v:12.23e9},{q:'Q3 22',v:12.69e9},{q:'Q4 22',v:13.32e9},
      {q:'Q1 23',v:12.39e9},{q:'Q2 23',v:12.83e9},{q:'Q3 23',v:13.39e9},
      {q:'Q4 23',v:13.39e9},{q:'Q1 24',v:12.61e9},{q:'Q2 24',v:12.61e9},
      {q:'Q3 24',v:11.59e9},{q:'Q4 24',v:12.35e9},{q:'Q1 25',v:11.27e9}
    ],
    current_price:74.20, shares:1.49e9,
    valuation_band:{bear:58,base:76,bull:94,trustworthy_bear:52,trustworthy_base:76,trustworthy_bull:100}
  },
  F: {
    ticker:'F', forecast_quarter:'Q2 2025', selected_model_mode:'hybrid',
    selected_anchor:'trailing_4q', macro_weight:0.6,
    forecast_revenue_yoy:0.028, forecast_revenue:45.3e9,
    macro_only_forecast_yoy:0.044, macro_signal_label:'Neutral',
    confidence:'Low', walk_forward_mae:0.058, walk_forward_r2:0.11,
    selected_features:['Auto Sales SAAR','10Y Treasury Yield','Consumer Credit','Gasoline Prices'],
    selected_lags:[1,3,2,4], anchor_yoy:0.021,
    revenue_history:[
      {q:'Q2 22',v:40.19e9},{q:'Q3 22',v:37.19e9},{q:'Q4 22',v:44.02e9},
      {q:'Q1 23',v:41.47e9},{q:'Q2 23',v:44.95e9},{q:'Q3 23',v:43.80e9},
      {q:'Q4 23',v:46.23e9},{q:'Q1 24',v:42.78e9},{q:'Q2 24',v:47.81e9},
      {q:'Q3 24',v:46.20e9},{q:'Q4 24',v:48.15e9},{q:'Q1 25',v:40.66e9}
    ],
    current_price:10.40, shares:3.93e9,
    valuation_band:{bear:8,base:11,bull:15,trustworthy_bear:7,trustworthy_base:11,trustworthy_bull:17}
  }
};

/* ── helpers ── */
const fmt = v => {
  const a = Math.abs(v);
  if (a >= 1e9) return '$' + (v/1e9).toFixed(1) + 'B';
  if (a >= 1e6) return '$' + (v/1e6).toFixed(0) + 'M';
  return '$' + v.toFixed(2);
};
const pct = (v, d=1) => (v >= 0 ? '+' : '') + (v * 100).toFixed(d) + '%';
const anchorLabel = a => ({last_yoy:'Last YoY',trailing_4q:'Trailing 4Q avg',trailing_8q:'Trailing 8Q avg'}[a]||a);
const confClass = c => ({High:'badge-high',Medium:'badge-medium',Low:'badge-low',Unreliable:'badge-unreliable'}[c]||'badge-unreliable');
const signalClass = s => s.includes('Upside') ? 'badge-upside' : s.includes('Downside') ? 'badge-downside' : 'badge-neutral';
const yoyClass = v => v > 0.004 ? 'up' : v < -0.004 ? 'down' : 'neutral';

/* ── state ── */
let currentTicker = 'AAPL';
let revChart = null;

/* ── build ticker buttons ── */
function buildTickers() {
  const row = document.getElementById('ticker-row');
  Object.values(PAYLOADS).forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'ticker-btn' + (d.ticker === currentTicker ? ' active' : '');
    btn.innerHTML = `${d.ticker}<span class="change-badge ${yoyClass(d.forecast_revenue_yoy)}">${pct(d.forecast_revenue_yoy)}</span>`;
    btn.onclick = () => {
      document.querySelectorAll('.ticker-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTicker = d.ticker;
      render();
    };
    row.appendChild(btn);
  });
}

/* ── main render ── */
function render() {
  const d = PAYLOADS[currentTicker];
  document.getElementById('quarter-display').textContent = d.forecast_quarter;
  const el = document.getElementById('main-content');
  el.innerHTML = buildHTML(d);
  renderChart(d);
  renderBands(d);
}

function buildHTML(d) {
  const anchorRev = d.forecast_revenue * (1 + d.anchor_yoy) / (1 + d.forecast_revenue_yoy);
  const macroOnlyRev = d.forecast_revenue * (1 + d.macro_only_forecast_yoy) / (1 + d.forecast_revenue_yoy);

  return `
  <!-- metrics -->
  <div class="metrics-grid">
    <div class="metric-card highlight">
      <div class="m-label">forecast revenue</div>
      <div class="m-value animate-in">${fmt(d.forecast_revenue)}</div>
      <div class="m-sub">${d.forecast_quarter} · macro-adjusted</div>
    </div>
    <div class="metric-card">
      <div class="m-label">YoY growth</div>
      <div class="m-value animate-in ${yoyClass(d.forecast_revenue_yoy)}">${pct(d.forecast_revenue_yoy)}</div>
      <div class="m-sub">blend: ${Math.round((1-d.macro_weight)*100)}% anchor + ${Math.round(d.macro_weight*100)}% macro</div>
    </div>
    <div class="metric-card">
      <div class="m-label">confidence</div>
      <div class="m-value" style="font-size:14px;padding-top:6px">
        <span class="badge ${confClass(d.confidence)}">${d.confidence}</span>
      </div>
      <div class="m-sub">${d.selected_model_mode} model · ${anchorLabel(d.selected_anchor)}</div>
    </div>
    <div class="metric-card">
      <div class="m-label">macro signal</div>
      <div class="m-value" style="font-size:14px;padding-top:6px">
        <span class="badge ${signalClass(d.macro_signal_label)}">${d.macro_signal_label}</span>
      </div>
      <div class="m-sub">macro-only: ${pct(d.macro_only_forecast_yoy)}</div>
    </div>
  </div>

  <!-- 3-layer forecast -->
  <div class="section-label">three-layer forecast — ${d.forecast_quarter}</div>
  <div class="forecast-grid">
    <div class="forecast-card">
      <div class="fc-type">conservative anchor</div>
      <div class="fc-yoy ${yoyClass(d.anchor_yoy)}">${pct(d.anchor_yoy)}</div>
      <div class="fc-rev">${fmt(anchorRev)}</div>
      <div class="fc-divider"></div>
      <div class="fc-detail">
        Anchor: <span>${anchorLabel(d.selected_anchor)}</span><br>
        No macro adjustment<br>
        Baseline trend-only view
      </div>
    </div>
    <div class="forecast-card">
      <div class="fc-type">macro signal only</div>
      <div class="fc-yoy ${yoyClass(d.macro_only_forecast_yoy)}">${pct(d.macro_only_forecast_yoy)}</div>
      <div class="fc-rev">${fmt(macroOnlyRev)}</div>
      <div class="fc-divider"></div>
      <div class="fc-detail">
        Model: <span>${d.selected_model_mode}</span><br>
        Lags: <span>${d.selected_lags.join(', ')}Q</span><br>
        100% macro weight
      </div>
    </div>
    <div class="forecast-card selected">
      <div class="fc-type">macro-adjusted blend <span class="fc-selected-tag">SELECTED</span></div>
      <div class="fc-yoy ${yoyClass(d.forecast_revenue_yoy)}">${pct(d.forecast_revenue_yoy)}</div>
      <div class="fc-rev">${fmt(d.forecast_revenue)}</div>
      <div class="fc-divider"></div>
      <div class="fc-detail">
        Anchor <span>${Math.round((1-d.macro_weight)*100)}%</span> + macro <span>${Math.round(d.macro_weight*100)}%</span><br>
        Walk-forward selected<br>
        MAE <span>${(d.walk_forward_mae*100).toFixed(1)}pp</span> · R² <span>${d.walk_forward_r2.toFixed(2)}</span>
      </div>
    </div>
  </div>

  <!-- revenue chart -->
  <div class="chart-card">
    <div class="chart-header">
      <div class="chart-title">Quarterly revenue — history & forecast</div>
      <div class="legend">
        <span class="leg-item"><span class="leg-sq" style="background:#4da6ff"></span>Actual</span>
        <span class="leg-item"><span class="leg-sq" style="background:#00e5a0"></span>Macro-adj</span>
        <span class="leg-item">
          <svg width="18" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="18" y2="5" stroke="#8892a4" stroke-width="2" stroke-dasharray="4,3"/></svg>
          Anchor only
        </span>
      </div>
    </div>
    <div style="position:relative;height:240px">
      <canvas id="revChart" role="img" aria-label="Revenue history and forecast for ${d.ticker}">Revenue chart from ${d.revenue_history[0].q} to forecast ${d.forecast_quarter}.</canvas>
    </div>
  </div>

  <!-- valuation band -->
  <div class="section-label">valuation band — price per share</div>
  <div class="chart-card val-section">
    <div id="val-bands"></div>
  </div>

  <!-- walk forward -->
  <div class="section-label">walk-forward validation</div>
  <div class="wf-grid">
    <div class="wf-card">
      <div class="wf-label">MAE — revenue YoY</div>
      <div class="wf-value ${d.walk_forward_mae < 0.025 ? 'up' : d.walk_forward_mae < 0.04 ? 'neutral' : 'down'}">${(d.walk_forward_mae*100).toFixed(1)}pp</div>
    </div>
    <div class="wf-card">
      <div class="wf-label">R² out-of-sample</div>
      <div class="wf-value ${d.walk_forward_r2 > 0.5 ? 'up' : d.walk_forward_r2 > 0.2 ? 'neutral' : 'down'}">${d.walk_forward_r2.toFixed(2)}</div>
    </div>
    <div class="wf-card">
      <div class="wf-label">Macro weight selected</div>
      <div class="wf-value">${Math.round(d.macro_weight*100)}%</div>
    </div>
  </div>

  <!-- macro features -->
  <div class="section-label">selected macro drivers</div>
  <div class="features-card">
    ${d.selected_features.map((f,i) => `
      <span class="feature-tag">
        ${f}
        <span class="feature-lag">lag ${d.selected_lags[i]}Q</span>
      </span>
    `).join('')}
    <div style="margin-top:12px;font-size:10px;color:var(--text3);line-height:1.8">
      Model mode: <span style="color:var(--text2)">${d.selected_model_mode}</span>
      &nbsp;·&nbsp; Anchor: <span style="color:var(--text2)">${anchorLabel(d.selected_anchor)}</span>
    </div>
  </div>
  `;
}

/* ── Chart.js revenue chart ── */
function renderChart(d) {
  if (revChart) { revChart.destroy(); revChart = null; }
  const hist = d.revenue_history;
  const anchorRev = d.forecast_revenue * (1 + d.anchor_yoy) / (1 + d.forecast_revenue_yoy);
  const labels = [...hist.map(h => h.q), 'F·' + d.forecast_quarter];
  const actuals = hist.map(h => h.v / 1e9);
  const blendLine = [...Array(hist.length - 1).fill(null), actuals[actuals.length-1], d.forecast_revenue / 1e9];
  const anchorLine = [...Array(hist.length - 1).fill(null), actuals[actuals.length-1], anchorRev / 1e9];

  const ctx = document.getElementById('revChart');
  revChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Actual',
          data: [...actuals, null],
          backgroundColor: 'rgba(77,166,255,0.25)',
          borderColor: '#4da6ff',
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
        },
        {
          label: 'Macro-adj forecast',
          data: blendLine,
          type: 'line',
          borderColor: '#00e5a0',
          backgroundColor: 'rgba(0,229,160,0.08)',
          borderWidth: 2.5,
          pointRadius: [...Array(hist.length - 1).fill(0), 5, 8],
          pointBackgroundColor: '#00e5a0',
          pointBorderColor: '#080a0f',
          pointBorderWidth: 2,
          fill: false,
          tension: 0.3,
        },
        {
          label: 'Anchor only',
          data: anchorLine,
          type: 'line',
          borderColor: '#8892a4',
          borderWidth: 1.5,
          borderDash: [5, 4],
          pointRadius: [...Array(hist.length - 1).fill(0), 4, 6],
          pointBackgroundColor: '#8892a4',
          pointBorderColor: '#080a0f',
          pointBorderWidth: 2,
          fill: false,
          tension: 0.3,
        },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 400, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index', intersect: false,
          backgroundColor: '#141824',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#8892a4',
          bodyColor: '#e8eaf0',
          padding: 12,
          callbacks: {
            label: c => c.parsed.y != null ? `${c.dataset.label}: $${c.parsed.y.toFixed(1)}B` : null,
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#4a5568', font: { family: 'DM Mono', size: 10 }, maxRotation: 45, autoSkip: false },
          grid: { color: 'rgba(255,255,255,0.04)' },
          border: { color: 'rgba(255,255,255,0.08)' }
        },
        y: {
          ticks: {
            color: '#4a5568',
            font: { family: 'DM Mono', size: 10 },
            callback: v => '$' + v.toFixed(0) + 'B'
          },
          grid: { color: 'rgba(255,255,255,0.04)' },
          border: { color: 'rgba(255,255,255,0.08)' }
        }
      }
    }
  });
}

/* ── valuation bands ── */
function renderBands(d) {
  const b = d.valuation_band;
  const cp = d.current_price;
  const container = document.getElementById('val-bands');
  if (!container) return;

  const allVals = [b.trustworthy_bear, b.bear, b.base, b.bull, b.trustworthy_bull, cp];
  const mn = Math.min(...allVals) * 0.85;
  const mx = Math.max(...allVals) * 1.10;
  const pos = v => ((v - mn) / (mx - mn) * 100).toFixed(2);

  function buildBar(label, lo, hi, bgColor, textColor) {
    const left = pos(lo);
    const width = (pos(hi) - pos(lo));
    const markerLeft = pos(cp);
    return `
      <div class="band-row">
        <div class="band-label">${label}</div>
        <div class="band-track">
          <div class="band-fill" style="left:${left}%;width:${width}%;background:${bgColor}">
            <span style="color:${textColor}">$${lo}</span>
            <span style="color:${textColor}">$${hi}</span>
          </div>
          <div class="band-price-marker" style="left:${markerLeft}%" data-price="$${cp.toFixed(2)}"></div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    ${buildBar('Raw P/S band', b.bear, b.bull, 'rgba(77,166,255,0.3)', '#a8d4ff')}
    ${buildBar('Trust-adjusted', b.trustworthy_bear, b.trustworthy_bull, 'rgba(77,166,255,0.12)', '#6ab4ff')}
    <div class="band-summary">
      <div class="band-summary-item">
        <span class="bs-label">Bear</span>
        <span class="bs-val down">$${b.trustworthy_bear}</span>
      </div>
      <div class="band-summary-item">
        <span class="bs-label">Base</span>
        <span class="bs-val neutral">$${b.trustworthy_base}</span>
      </div>
      <div class="band-summary-item">
        <span class="bs-label">Bull</span>
        <span class="bs-val up">$${b.trustworthy_bull}</span>
      </div>
      <div class="band-summary-item">
        <span class="bs-label">Current price</span>
        <span class="bs-val" style="color:var(--text)">$${cp.toFixed(2)}</span>
      </div>
      <div class="band-summary-item">
        <span class="bs-label">vs base</span>
        <span class="bs-val ${cp < b.trustworthy_base ? 'up' : 'down'}">${pct((b.trustworthy_base - cp) / cp)}</span>
      </div>
    </div>
  `;
}

/* ── init ── */
buildTickers();
render();
