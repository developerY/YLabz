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

// Copy browser static assets to root of dist as well to support standard "dist" or "dist/app/browser" Cloudflare settings
try {
  const entries = fs.readdirSync(browserDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(browserDir, entry.name);
    const destPath = path.join(distDir, entry.name);
    // Don't overwrite the 'app' directory itself
    if (entry.name === 'app') continue;
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  }
  console.log('[Cloudflare Prep] Successfully prepared static deployment:');
  console.log('  ✓ dist/app/browser/index.html (Primary for wrangler.jsonc)');
  console.log('  ✓ dist/index.html (Fallback for standard Cloudflare Pages default)');
} catch (err) {
  console.warn('[Cloudflare Prep] Note while copying dist root:', err.message);
}
