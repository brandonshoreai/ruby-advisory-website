import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = new URL('..', import.meta.url)
const appRoot = new URL('react-app/', projectRoot)

const pages = [
  {
    source: 'https://www.varickagents.com/',
    output: new URL('index.html', appRoot),
    includeRubyOpener: true,
  },
  {
    source: 'https://www.varickagents.com/careers',
    output: new URL('careers/index.html', appRoot),
    includeRubyOpener: false,
  },
  {
    source: 'https://www.varickagents.com/case-studies-finance',
    output: new URL('case-studies-finance/index.html', appRoot),
    includeRubyOpener: false,
  },
  {
    source: 'https://www.varickagents.com/case-studies-sales',
    output: new URL('case-studies-sales/index.html', appRoot),
    includeRubyOpener: false,
  },
  {
    source: 'https://www.varickagents.com/case-studies-operations',
    output: new URL('case-studies-operations/index.html', appRoot),
    includeRubyOpener: false,
  },
]

const rubyHeader = String.raw`
<header class="ruby-runtime-header" aria-label="Ruby Advisory primary navigation">
  <a class="ruby-runtime-brand" href="/#ruby-ascii-opener">
    RUBY ADVISORY
  </a>
  <div class="ruby-runtime-actions">
    <nav class="ruby-runtime-links" aria-label="Primary">
      <a href="/#features">About</a>
      <a href="/#case-studies">Work</a>
      <a href="/#features">Process</a>
      <a href="/#book">Request a free audit</a>
    </nav>
    <button class="ruby-runtime-theme" type="button" aria-label="Theme">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.75v2.1M12 17.15v2.1M6.85 6.85l1.48 1.48M15.67 15.67l1.48 1.48M4.75 12h2.1M17.15 12h2.1M6.85 17.15l1.48-1.48M15.67 8.33l1.48-1.48M12 9.35a2.65 2.65 0 1 1 0 5.3 2.65 2.65 0 0 1 0-5.3Z" />
      </svg>
    </button>
  </div>
</header>`

const rubyOpener = String.raw`
<section id="ruby-ascii-opener" class="ruby-ascii-opener" aria-label="Ruby Advisory opening animation">
  <iframe src="/ruby-ascii-static.html" title="Ruby ASCII animation"></iframe>
</section>`

const routeGuardScript = String.raw`
<script id="ruby-runtime-route-guard">
  (() => {
    const mirroredRoutes = new Set([
      "/careers",
      "/case-studies-finance",
      "/case-studies-sales",
      "/case-studies-operations",
    ]);

    if (mirroredRoutes.has(location.pathname)) {
      location.replace(location.pathname + "/" + location.search + location.hash);
    }
  })();
</script>`

const runtimeCss = String.raw`
<style id="ruby-runtime-mirror-css">
  @import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap");

  html {
    scroll-behavior: smooth;
  }

  body {
    --token-020e80d3-f92a-4023-adf9-84d3d978c768: #c76a7d !important;
    --token-0c4e7c2d-f172-4a6c-871b-64a2a9b694e8: #b01030 !important;
    --token-b4e55c03-2981-425c-90c7-32eddb02ef4b: #2f0610 !important;
    --token-e77d9f36-cbe3-4193-b280-860891e5d752: #5c081591 !important;
    --token-940de45d-85e4-405c-8955-3c691b4627cd: #8f0d2882 !important;
    --token-48d8edbe-3fc8-4df7-83ca-9009713b3aa2: #7a0b20 !important;
    --token-9458de5a-c286-4502-a824-b0b2c6dd15df: #e64059 !important;
  }

  .ruby-ascii-opener {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 700px;
    overflow: hidden;
    background: #ffffff;
  }

  .ruby-ascii-opener iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
    background: #ffffff;
  }

  .ruby-runtime-header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 2147483000;
    height: 132px;
    padding: 0 38px 0 28px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background: #ffffff;
    border: 0;
    box-shadow: none;
    color: #0a0a0a;
    font-family: "Geist Mono", "SF Mono", "Courier New", monospace;
    font-size: 18px;
    line-height: 1.45;
    letter-spacing: 0.18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translateY(-100px);
    opacity: 0;
    animation: rubyRuntimeHeaderFall 1s ease-out 2s forwards;
    will-change: transform, opacity;
  }

  @keyframes rubyRuntimeHeaderFall {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ruby-runtime-brand {
    display: inline-flex;
    align-items: center;
    margin-top: 43px;
    color: #0a0a0a;
    font-size: 16.2px;
    font-weight: 400;
    line-height: 26.1px;
    letter-spacing: 0.648px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .ruby-runtime-actions {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 42px;
  }

  .ruby-runtime-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    line-height: 26.1px;
    letter-spacing: 0.18px;
    text-transform: uppercase;
  }

  .ruby-runtime-links a {
    color: #0a0a0a;
    font-size: 16.2px;
    line-height: 26.1px;
    letter-spacing: 0.648px;
    font-weight: 400;
    text-decoration: none;
    transition: color 160ms ease;
  }

  .ruby-runtime-links a:hover {
    color: #b01030;
  }

  .ruby-runtime-theme {
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border: 1px solid #eaeaea;
    border-radius: 999px;
    padding: 0;
    background: #ffffff;
    color: #5c5c5c;
    opacity: 0.7;
  }

  .ruby-runtime-theme svg {
    width: 16px;
    height: 16px;
    display: block;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.1;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  body > #main [data-framer-name="Desktop"],
  body > #main [data-framer-name="Mobile - Closed"],
  body > #main [data-framer-name="Mobile - Open"] {
    visibility: hidden !important;
    pointer-events: none !important;
  }

  .ruby-particle-card {
    isolation: isolate;
    background: #bd7b7f !important;
  }

  .ruby-particle-card > .ruby-particle-hidden-source {
    position: absolute !important;
    inset: 0 !important;
    z-index: 0 !important;
    opacity: 0.68 !important;
    visibility: visible !important;
    pointer-events: none !important;
    filter: grayscale(1) contrast(0.88) brightness(0.88) sepia(0.3) saturate(0.98) hue-rotate(310deg) !important;
    mix-blend-mode: luminosity;
  }

  .ruby-particle-card > .ruby-particle-hidden-source img {
    filter: grayscale(1) contrast(0.96) brightness(0.94) !important;
  }

  .ruby-particle-card > .ruby-particle-muted-overlay {
    background: transparent !important;
    opacity: 0 !important;
  }

  .ruby-particle-field {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    pointer-events: none;
    background: rgba(174, 82, 91, 0.36);
  }

  .ruby-particle-field::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    display: block;
    background: rgba(126, 54, 62, 0.1);
  }

  .ruby-particle-field::after {
    display: none;
  }

  .ruby-particle-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 0.96;
  }

  .ruby-particle-card > :not(.ruby-particle-field):not(.ruby-particle-hidden-source):not(.ruby-particle-muted-overlay) {
    position: relative;
    z-index: 2;
  }

  .ruby-optimization-card {
    position: relative;
    background: #bd7b7f !important;
  }

  .ruby-optimization-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: rgba(174, 82, 91, 0.22);
  }

  .ruby-optimization-copy {
    position: relative;
    z-index: 2;
  }

  .ruby-optimization-copy [data-framer-component-type="RichTextContainer"],
  .ruby-optimization-copy .framer-text {
    color: #f8f8f8 !important;
    opacity: 1 !important;
    text-shadow: none !important;
  }

  .ruby-optimization-copy [data-framer-name="Heading"] .framer-text,
  .ruby-optimization-copy [data-framer-name="Heading"] h1,
  .ruby-optimization-copy [data-framer-name="Heading"] h2,
  .ruby-optimization-copy [data-framer-name="Heading"] h3 {
    font-weight: 500 !important;
  }

  .ruby-optimization-copy [data-framer-name="pill-container"],
  .ruby-optimization-copy [data-framer-name="pill-container"] *,
  .ruby-optimization-copy [data-framer-name="pill-container"] .framer-text {
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 12px !important;
    letter-spacing: 0 !important;
    text-shadow: none !important;
  }

  .ruby-optimization-copy [data-framer-name="Text"] .framer-text,
  .ruby-optimization-copy [data-framer-name="Text"] p {
    font-weight: 400 !important;
  }

  .ruby-optimization-copy [data-framer-name="Heading"] .framer-text,
  .ruby-optimization-copy [data-framer-name="Heading"] h1,
  .ruby-optimization-copy [data-framer-name="Heading"] h2,
  .ruby-optimization-copy [data-framer-name="Heading"] h3 {
    font-weight: 500 !important;
  }

  .ruby-optimization-copy a [data-framer-component-type="RichTextContainer"],
  .ruby-optimization-copy a .framer-text {
    color: #b01030 !important;
    text-shadow: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .ruby-particle-canvas {
      opacity: 0.72;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ruby-runtime-header {
      transform: translateY(0);
      opacity: 1;
      animation: none;
    }
  }

  @media (max-width: 960px) {
    .ruby-runtime-header {
      font-size: 16px;
    }

    .ruby-runtime-brand,
    .ruby-runtime-links a {
      font-size: 12.48px;
      line-height: 23.2px;
      letter-spacing: 0.4992px;
    }

    .ruby-runtime-links {
      gap: 1.1rem;
    }
  }

  @media (max-width: 809.98px) {
    .ruby-runtime-header {
      height: 88px;
      padding: 0 18px;
    }

    .ruby-runtime-brand {
      margin-top: 31px;
    }

    .ruby-runtime-actions {
      margin-top: 25px;
    }

    .ruby-runtime-links {
      display: none;
    }

    .ruby-runtime-theme {
      width: 24px;
      height: 24px;
    }
  }
</style>`

const runtimeScript = String.raw`
<script id="ruby-runtime-mirror-script">
  (() => {
    const rubyTitle = "Ruby Advisory - Transforming the Enterprise with AI";
    const replacements = [
      [/Varick Agents/g, "Ruby Advisory"],
      [/Varick/g, "Ruby"],
      [/@varickagents/g, "@rubyadvisory"],
      [/@VARICKAGENTS/g, "@RUBYADVISORY"],
    ];

    const replaceText = (root = document.body) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
          return /Varick|varick|VARICK/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });

      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        let value = node.nodeValue;
        for (const [pattern, replacement] of replacements) value = value.replace(pattern, replacement);
        node.nodeValue = value;
      }
    };

    const setRubyTitle = () => {
      if (document.title !== rubyTitle) document.title = rubyTitle;
    };

    const patchLinks = () => {
      document.querySelectorAll('a[href="./"], a[href="https://www.varickagents.com/"]').forEach((link) => {
        link.setAttribute("href", "/");
      });
      document.querySelectorAll('a[href="./careers"], a[href="/careers"]').forEach((link) => link.setAttribute("href", "/careers/"));
      document.querySelectorAll('a[href^="./careers#"], a[href^="/careers#"]').forEach((link) => {
        link.setAttribute("href", "/careers/" + link.getAttribute("href").split("careers")[1]);
      });
      document.querySelectorAll('a[href="./case-studies-finance"], a[href="/case-studies-finance"]').forEach((link) => link.setAttribute("href", "/case-studies-finance/"));
      document.querySelectorAll('a[href="./case-studies-sales"], a[href="/case-studies-sales"]').forEach((link) => link.setAttribute("href", "/case-studies-sales/"));
      document.querySelectorAll('a[href="./case-studies-operations"], a[href="/case-studies-operations"]').forEach((link) => link.setAttribute("href", "/case-studies-operations/"));
      document.querySelectorAll('a[href^="./#"]').forEach((link) => {
        link.setAttribute("href", "/" + link.getAttribute("href").slice(1));
      });
    };

    const particleRuntime = window.__rubyParticleRuntime || (window.__rubyParticleRuntime = {
      states: [],
      frame: 0,
      reducedMotion: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    const findParticleHeading = (text) => {
      const candidates = document.querySelectorAll('[data-framer-name="Heading"], [data-framer-component-type="RichTextContainer"], h1, h2, h3, p, div');
      for (const candidate of candidates) {
        const value = candidate.textContent ? candidate.textContent.trim().replace(/\s+/g, " ") : "";
        if (value.includes(text) && value.length < 180) return candidate;
      }
      return null;
    };

    const resizeParticleCanvas = (state) => {
      const rect = state.canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (state.canvas.width !== width || state.canvas.height !== height) {
        state.canvas.width = width;
        state.canvas.height = height;
        state.width = width;
        state.height = height;
        state.dpr = dpr;
        seedParticles(state);
      }
    };

    const seedParticles = (state) => {
      const baseCount = [120, 155, 190][state.variant - 1] || 140;
      const scale = Math.min(1.35, Math.max(0.7, (state.width || 805) / ((state.dpr || 1) * 805)));
      const count = Math.round(baseCount * scale);
      state.particles = Array.from({ length: count }, (_, index) => {
        const lane = index % 7;
        const seed = (index + 1) * (state.variant + 7);
        return {
          x: Math.random(),
          y: Math.random(),
          baseY: (lane + 0.5) / 7 + (Math.random() - 0.5) * 0.08,
          size: Math.random() < 0.14 ? 2.2 : 1 + Math.random() * 1.4,
          alpha: 0.36 + Math.random() * 0.58,
          speed: 0.000028 + Math.random() * 0.00006 + state.variant * 0.000006,
          drift: (Math.random() - 0.5) * 0.00005,
          phase: seed * 0.618,
          radius: 0.08 + Math.random() * 0.42,
          angle: Math.random() * Math.PI * 2,
        };
      });
    };

    const drawParticleState = (state, time) => {
      resizeParticleCanvas(state);
      const ctx = state.context;
      const width = state.width;
      const height = state.height;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.scale(state.dpr || 1, state.dpr || 1);
      const cssWidth = width / (state.dpr || 1);
      const cssHeight = height / (state.dpr || 1);
      const now = time || 0;
      const points = [];
      const pointer = state.pointer;

      if (pointer) {
        pointer.intensity = pointer.active
          ? Math.min(1, pointer.intensity + 0.1)
          : pointer.intensity * 0.88;
      }

      for (const particle of state.particles) {
        let x;
        let y;
        let interaction = 0;

        if (!particleRuntime.reducedMotion) {
          if (state.variant === 1) {
            particle.x += particle.speed * 0.72;
            particle.y += particle.drift + Math.sin(now * 0.001 + particle.phase) * 0.00008;
            if (particle.x > 1.08) particle.x = -0.08;
            if (particle.y > 1.08) particle.y = -0.08;
            if (particle.y < -0.08) particle.y = 1.08;
          } else if (state.variant === 2) {
            particle.x += particle.speed * 1.05;
            if (particle.x > 1.08) particle.x = -0.08;
          } else {
            particle.angle += particle.speed * 14;
            particle.x += Math.cos(now * 0.00028 + particle.phase) * 0.00008;
            particle.y += Math.sin(now * 0.00022 + particle.phase) * 0.00007;
          }
        }

        if (state.variant === 1) {
          x = particle.x * cssWidth;
          y = (particle.y + Math.sin(now * 0.0007 + particle.phase) * 0.025) * cssHeight;
        } else if (state.variant === 2) {
          x = particle.x * cssWidth;
          y = (particle.baseY + Math.sin(particle.x * 9 + now * 0.00075 + particle.phase) * 0.12) * cssHeight;
        } else {
          const cx = cssWidth * 0.66;
          const cy = cssHeight * 0.45;
          const radiusX = particle.radius * cssWidth * 0.72;
          const radiusY = particle.radius * cssHeight * 0.54;
          x = cx + Math.cos(particle.angle + particle.phase) * radiusX + (particle.x - 0.5) * cssWidth * 0.2;
          y = cy + Math.sin(particle.angle * 0.84 + particle.phase) * radiusY + (particle.y - 0.5) * cssHeight * 0.18;
        }

        if (pointer && pointer.intensity > 0.001 && !particleRuntime.reducedMotion) {
          const targetX = pointer.x * cssWidth;
          const targetY = pointer.y * cssHeight;
          const dx = targetX - x;
          const dy = targetY - y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const influence = Math.min(cssWidth, cssHeight) * 0.78;

          if (distance < influence) {
            const falloff = 1 - distance / influence;
            const pull = Math.pow(falloff, 1.34) * 0.72 * pointer.intensity;
            x += dx * pull;
            y += dy * pull;
            interaction = falloff * pointer.intensity;
          }
        }

        points.push([x, y, particle, interaction]);
      }

      ctx.lineWidth = 0.55;
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < Math.min(points.length, i + 28); j += 1) {
          const dx = points[i][0] - points[j][0];
          const dy = points[i][1] - points[j][1];
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = state.variant === 2 ? 76 : 62;
          if (distance < maxDistance) {
            const interaction = Math.max(points[i][3], points[j][3]);
            const alpha = (1 - distance / maxDistance) * (0.12 + interaction * 0.18);
            ctx.strokeStyle = "rgba(255,255,255," + alpha.toFixed(3) + ")";
            ctx.beginPath();
            ctx.moveTo(points[i][0], points[i][1]);
            ctx.lineTo(points[j][0], points[j][1]);
            ctx.stroke();
          }
        }
      }

      for (const [x, y, particle, interaction] of points) {
        const twinkle = 0.72 + Math.sin(now * 0.002 + particle.phase) * 0.28;
        const alpha = Math.min(0.98, Math.max(0.18, particle.alpha * twinkle + interaction * 0.38));
        const size = particle.size + interaction * 1.85;
        ctx.fillStyle = "rgba(255,255,255," + alpha.toFixed(3) + ")";
        ctx.fillRect(Math.round(x), Math.round(y), size, size);
      }

      ctx.restore();
    };

    const bindParticlePointer = (card, state) => {
      const updatePointer = (event) => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        state.pointer.x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        state.pointer.y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        state.pointer.active = true;
        ensureParticleLoop();
      };

      const releasePointer = () => {
        state.pointer.active = false;
        ensureParticleLoop();
      };

      card.addEventListener("pointerenter", updatePointer);
      card.addEventListener("pointermove", updatePointer);
      card.addEventListener("pointerleave", releasePointer);
      card.addEventListener("pointercancel", releasePointer);
    };

    const tickParticles = (time) => {
      particleRuntime.frame = 0;
      for (const state of particleRuntime.states) drawParticleState(state, time);
      if (!particleRuntime.reducedMotion && particleRuntime.states.length) {
        particleRuntime.frame = window.requestAnimationFrame(tickParticles);
      }
    };

    const ensureParticleLoop = () => {
      if (particleRuntime.frame || particleRuntime.reducedMotion) {
        for (const state of particleRuntime.states) drawParticleState(state, 0);
        return;
      }
      particleRuntime.frame = window.requestAnimationFrame(tickParticles);
    };

    const decorateParticleCard = (card, variant) => {
      if (!card || card.dataset.rubyParticleReady === "true") return;
      card.dataset.rubyParticleReady = "true";
      card.dataset.rubyParticleVariant = String(variant);
      card.classList.add("ruby-particle-card");

      const cardRect = card.getBoundingClientRect();
      for (const child of Array.from(card.children)) {
        const childRect = child.getBoundingClientRect();
        const fillsCard = childRect.width >= cardRect.width * 0.72 && childRect.height >= cardRect.height * 0.72;
        if (child.querySelector("img") && fillsCard && child.getAttribute("data-framer-name") !== "Image") {
          child.classList.add("ruby-particle-hidden-source");
        }
        if (child.getAttribute("data-framer-name") === "Overlay") {
          child.classList.add("ruby-particle-muted-overlay");
        }
      }

      const field = document.createElement("div");
      field.className = "ruby-particle-field";
      field.setAttribute("aria-hidden", "true");
      const canvas = document.createElement("canvas");
      canvas.className = "ruby-particle-canvas";
      field.appendChild(canvas);
      card.insertBefore(field, card.firstChild);

      const context = canvas.getContext("2d", { alpha: true });
      if (!context) return;
      const state = {
        canvas,
        context,
        variant,
        particles: [],
        width: 0,
        height: 0,
        dpr: 1,
        pointer: { active: false, x: 0.5, y: 0.5, intensity: 0 },
      };
      particleRuntime.states.push(state);
      bindParticlePointer(card, state);
      resizeParticleCanvas(state);
      drawParticleState(state, 0);
      ensureParticleLoop();
    };

    const patchParticleCards = () => {
      [
        ["AI Opportunity Audit", 1],
        ["Process Architecture", 2],
        ["Production Deployment", 3],
      ].forEach(([title, variant]) => {
        const heading = findParticleHeading(title);
        const card = heading && heading.closest('[data-framer-name^="Feature Card"]');
        decorateParticleCard(card, variant);
      });
    };

    const patchOptimizationCard = () => {
      const heading = findParticleHeading("Agent System Optimization");
      const card = heading && heading.closest('[data-framer-name="Feature Card 4"]');
      if (card) {
        card.classList.add("ruby-optimization-card");
        const copy = card.querySelector('[data-framer-name="Container"]');
        if (copy) copy.classList.add("ruby-optimization-copy");
      }
    };

    const run = () => {
      setRubyTitle();
      replaceText();
      patchLinks();
      patchParticleCards();
      patchOptimizationCard();
    };

    const observer = new MutationObserver((mutations) => {
      setRubyTitle();
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) replaceText(node);
          if (node.nodeType === Node.TEXT_NODE) replaceText(node.parentElement || document.body);
        }
      }
      patchLinks();
      patchParticleCards();
      patchOptimizationCard();
    });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run, { once: true });
    } else {
      run();
    }

    window.addEventListener("load", () => {
      run();
      observer.observe(document.body, { childList: true, subtree: true });
    }, { once: true });

    for (let i = 1; i <= 12; i += 1) {
      window.setTimeout(run, i * 500);
    }

    document.addEventListener("visibilitychange", run);
    window.addEventListener("resize", () => {
      for (const state of particleRuntime.states) resizeParticleCanvas(state);
      ensureParticleLoop();
    });
  })();
</script>`

function patchHtml(html, { includeRubyOpener }) {
  let patched = html
    .replace(/<title>.*?<\/title>/, '<title>Ruby Advisory - Transforming the Enterprise with AI</title>')
    .replace(/content="Varick Agents([^"]*)"/g, 'content="Ruby Advisory$1"')
    .replaceAll('content="Varick Agents - Transforming the Enterprise with AI"', 'content="Ruby Advisory - Transforming the Enterprise with AI"')
    .replaceAll('content="Varick Agents brings AI to your business enabling faster, smarter moves with real time data and market intelligence. Automate your business today."', 'content="Ruby Advisory brings AI to your business enabling faster, smarter moves with real time data and market intelligence. Automate your business today."')
    .replaceAll('href="./careers#', 'href="/careers/#')
    .replaceAll('href="./careers"', 'href="/careers/"')
    .replaceAll('href="./case-studies-finance"', 'href="/case-studies-finance/"')
    .replaceAll('href="./case-studies-sales"', 'href="/case-studies-sales/"')
    .replaceAll('href="./case-studies-operations"', 'href="/case-studies-operations/"')

  patched = patched.replace('</head>', `${routeGuardScript}\n${runtimeCss}\n</head>`)
  patched = patched.replace('<body>', `<body>\n${rubyHeader}\n${includeRubyOpener ? rubyOpener : ''}`)
  patched = patched.replace('</body>', `${runtimeScript}\n</body>`)
  return patched
}

for (const page of pages) {
  const response = await fetch(page.source)
  if (!response.ok) throw new Error(`Failed to fetch ${page.source}: ${response.status}`)

  const html = await response.text()
  const patched = patchHtml(html, page)
  await mkdir(path.dirname(page.output.pathname), { recursive: true })
  await writeFile(page.output, patched)
  console.log(`Wrote ${page.output.pathname}`)
}
