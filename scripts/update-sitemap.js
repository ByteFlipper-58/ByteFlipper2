import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parseStringPromise, Builder } from "xml2js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, "../public/sitemap.xml");
const ROBOTS_PATH = path.join(__dirname, "../public/robots.txt");
const SITEMAP_URL = "https://byteflipper.web.app/sitemap.xml"; // Замени на свой URL

async function updateSitemap() {
    if (!fs.existsSync(SITEMAP_PATH)) {
        console.error("❌ sitemap.xml не найден!");
        return;
    }

    try {
        const xmlData = fs.readFileSync(SITEMAP_PATH, "utf-8");
        const parsedData = await parseStringPromise(xmlData);

        // Формат даты и времени: YYYY-MM-DDTHH:mm:ssZ
        const now = new Date().toISOString();

        if (parsedData.urlset?.url) {
            parsedData.urlset.url.forEach((url) => {
                url.lastmod = [now];
            });
        }

        const builder = new Builder();
        const updatedXml = builder.buildObject(parsedData);
        fs.writeFileSync(SITEMAP_PATH, updatedXml, "utf-8");

        console.log(`✅ sitemap.xml обновлён! Время: ${now}`);
    } catch (error) {
        console.error("❌ Ошибка обновления sitemap.xml:", error);
    }
}

function updateRobots() {
    const robotsContent = `User-agent: *\nAllow: /\nSitemap: ${SITEMAP_URL}\n`;
    fs.writeFileSync(ROBOTS_PATH, robotsContent, "utf-8");
    console.log("✅ robots.txt обновлён!");
}

(async () => {
    await updateSitemap();
    updateRobots();
})();
