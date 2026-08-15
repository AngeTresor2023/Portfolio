import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/claude-1000/-home-angelo/ae57d007-3bfa-4642-97a8-648b57794d30/scratchpad/hero-nophoto.png' });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: '/tmp/claude-1000/-home-angelo/ae57d007-3bfa-4642-97a8-648b57794d30/scratchpad/hero-nophoto-mobile.png' });
await browser.close();
