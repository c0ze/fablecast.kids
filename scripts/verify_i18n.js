import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locales = ['en', 'ja', 'tr'];
const pathsToCheck = [
    'pricing.free.features',
    'pricing.squire.features',
    'pricing.knight.features',
    'pricing.emperor.features',
    'privacy.s2.items',
    'privacy.s3.items',
    'privacy.s5.items',
    'privacy.s8.allUsers.items',
    'privacy.s8.euEea.items',
    'privacy.s8.japan.items',
    'privacy.s8.us.items',
    'terms.s3.items',
    'terms.s4.plans.items',
    'terms.s4.billing.items',
    'terms.s5.items',
    'terms.s6.items',
    'terms.s7.items',
    'terms.s8.items',
    'terms.s10.items'
];

// Helper to get value at path
function getValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

let hasError = false;

locales.forEach(locale => {
    const filePath = path.join(__dirname, `../src/locales/${locale}.json`);
    console.log(`Checking ${locale}.json...`);

    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(content);

        // Check specific paths
        pathsToCheck.forEach(p => {
            const val = getValue(json, p);
            if (!Array.isArray(val)) {
                console.error(`❌ [${locale}] ${p} is NOT an array. Type: ${typeof val}`);
                hasError = true;
            } else {
                // console.log(`✅ [${locale}] ${p} is an array.`);
            }
        });

        // Check blog posts highlights specifically as they are dynamic keys
        const posts = json.blog?.posts;
        if (posts) {
            Object.keys(posts).forEach(key => {
                const highlights = posts[key].highlights;
                if (!Array.isArray(highlights)) {
                    console.error(`❌ [${locale}] blog.posts.${key}.highlights is NOT an array. Type: ${typeof highlights}`);
                    hasError = true;
                }
            });
        }

    } catch (e) {
        console.error(`❌ Error parsing or reading ${locale}.json:`, e.message);
        hasError = true;
    }
});

if (hasError) {
    console.error("Verification FAILED.");
    process.exit(1);
} else {
    console.log("Verification PASSED: All checked paths are arrays.");
    process.exit(0);
}
