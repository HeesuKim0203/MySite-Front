require("babel-register")({
    presets: ["es2015", "react"]
});
const { getContents } = require("./src/Util/api");
const router = require("./sitemapRoutes").default; 
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
  const { data : { result } }=  await getContents() ;

  new Sitemap(router(result.map(content => content.id)))
      .build("https://blog.heesu99.site") 
      .save("./public/sitemap.xml")
}

generateSitemap(); 