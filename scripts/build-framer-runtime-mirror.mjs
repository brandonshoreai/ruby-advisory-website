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

    const run = () => {
      setRubyTitle();
      replaceText();
      patchLinks();
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
