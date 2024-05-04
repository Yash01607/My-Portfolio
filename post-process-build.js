import fs from "fs";
import path from "path";

function adjustPaths(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      adjustPaths(filePath);
    } else if (
      filePath.endsWith(".js") ||
      filePath.endsWith(".html") ||
      filePath.endsWith(".css")
    ) {
      console.log(`${filePath}`);
      let content = fs.readFileSync(filePath, "utf-8");
      content = content.replace(/(?<!\.)\/assets\//g, "./assets/");
      fs.writeFileSync(filePath, content, "utf-8");
    }
  });
}

console.log(
  "Updating absolute path to relative path ('/assets' to './assets) in dist folder, in the following files:"
);
adjustPaths("dist");
