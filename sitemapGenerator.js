require("babel-register")({
    presets: ["es2015", "react"]
});
const axios = require("./src/Util/api");
const router = require("./sitemapRoutes").default; 
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
  const { data : { contents } }=  await axios.axiosApi.getContents() ;

  new Sitemap(router(contents.map(content => content.id)))
      .build("https://blog.heesu99.site") 
      .save("./public/sitemap.xml")
}

generateSitemap(); 