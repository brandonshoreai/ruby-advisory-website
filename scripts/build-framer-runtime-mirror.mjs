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
    <span class="ruby-runtime-mark">R</span>
    <span>Ruby Advisory</span>
  </a>
  <nav class="ruby-runtime-links" aria-label="Primary">
    <a href="/#features">About</a>
    <a href="/#agents">Services</a>
    <a href="/#case-studies">Work</a>
    <a href="/careers/">Careers</a>
    <a href="/#book">Contact</a>
  </nav>
  <button class="ruby-runtime-menu" type="button" aria-label="Menu">
    <span></span>
    <span></span>
  </button>
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
    height: 72px;
    padding: 0 clamp(24px, 8.333vw, 120px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(248, 248, 248, 0.96);
    color: #202020;
    font-family: "Switzer", "Inter", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    backdrop-filter: blur(12px);
  }

  .ruby-runtime-brand {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    color: #202020;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.05em;
    text-decoration: none;
  }

  .ruby-runtime-mark {
    width: 22px;
    height: 22px;
    display: inline-grid;
    place-items: center;
    border-radius: 2.12px;
    background: linear-gradient(134deg, #e64059 2.88%, #b01030 33.65%, #5c0815 59.13%, #1b0207 87.02%);
    color: #ffffff;
    font-family: "Source Serif Pro", Georgia, serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0;
  }

  .ruby-runtime-links {
    display: flex;
    align-items: center;
    gap: clamp(26px, 2.4vw, 43px);
    font-family: "Chivo Mono", monospace;
    font-size: 12px;
    text-transform: uppercase;
  }

  .ruby-runtime-links a {
    color: rgba(32, 32, 32, 0.7);
    text-decoration: none;
    transition: color 180ms ease;
  }

  .ruby-runtime-links a:hover {
    color: #b01030;
  }

  .ruby-runtime-menu {
    display: none;
  }

  body > #main [data-framer-name="Desktop"],
  body > #main [data-framer-name="Mobile - Closed"],
  body > #main [data-framer-name="Mobile - Open"] {
    visibility: hidden !important;
    pointer-events: none !important;
  }

  @media (max-width: 809.98px) {
    .ruby-runtime-header {
      height: 56px;
      padding: 0 16px;
      justify-content: center;
    }

    .ruby-runtime-brand {
      font-size: 20px;
    }

    .ruby-runtime-mark {
      position: absolute;
      left: 16px;
    }

    .ruby-runtime-links {
      display: none;
    }

    .ruby-runtime-menu {
      position: absolute;
      right: 16px;
      width: 24px;
      height: 20px;
      display: grid;
      gap: 7px;
      place-content: center;
      border: 0;
      padding: 0;
      background: transparent;
    }

    .ruby-runtime-menu span {
      display: block;
      width: 24px;
      height: 2px;
      background: #a5a5a5;
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
