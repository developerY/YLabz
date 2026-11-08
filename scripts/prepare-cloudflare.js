const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, '..', 'dist', 'app', 'browser');
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(browserDir)) {
  console.error('[Cloudflare Prep] Error: dist/app/browser not found!');
  process.exit(1);
}

const rootIndex = path.join(browserDir, 'index.html');
if (!fs.existsSync(rootIndex)) {
  console.error('[Cloudflare Prep] Error: dist/app/browser/index.html not found!');
  process.exit(1);
}

// Ensure no conflicting _redirects exists that triggers Cloudflare code 100324 loop error
const browserRedirects = path.join(browserDir, '_redirects');
if (fs.existsSync(browserRedirects)) {
  fs.unlinkSync(browserRedirects);
}
const distRedirects = path.join(distDir, '_redirects');
if (fs.existsSync(distRedirects)) {
  fs.unlinkSync(distRedirects);
}

// Copy browser static assets to root of dist as well to support standard "dist" or "dist/app/browser" Cloudflare settings
try {
  const entries = fs.readdirSync(browserDir, { withFileTypes: true });
  for (const entry of entries) {
    // Skip 'app' directory and any _redirects
    if (entry.name === 'app' || entry.name === '_redirects') continue;
    const srcPath = path.join(browserDir, entry.name);
    const destPath = path.join(distDir, entry.name);
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  }
  console.log('[Cloudflare Prep] Successfully prepared static deployment:');
  console.log('  ✓ dist/app/browser/index.html (Primary for wrangler.jsonc)');
  console.log('  ✓ dist/index.html (Fallback for standard Cloudflare Pages default)');
  console.log('  ✓ Clean: No conflicting _redirects rules (html_handling auto-trailing-slash active)');
} catch (err) {
  console.warn('[Cloudflare Prep] Note while copying dist root:', err.message);
}
