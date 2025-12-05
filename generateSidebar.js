const fs = require('fs');
const path = require('path');

// === CONFIG ===
const docsDir = path.resolve('./docs'); 
const rootFolders = ['Applications', 'Tables']; // top-level folders

// Helper: recursively scan folder
function scanFolder(folderPath) {
  const items = [];
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);
    if (entry.name.startsWith('.')) continue;

    // Skip index.md / README.md in children
    if (entry.isFile() && /^(index|README)\.md$/i.test(entry.name)) continue;

    if (entry.isDirectory()) {
      const children = scanFolder(fullPath);
      const linkPath = '/' + path.relative(docsDir, fullPath).replace(/\\/g, '/');
      items.push({
        text: entry.name,
        collapsed: true, // collapsed for all subfolders
        link: linkPath + '/',
        items: children
      });
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const nameWithoutExt = entry.name.replace(/\.md$/, '');
      const linkPath = '/' + path.relative(docsDir, fullPath).replace(/\\/g, '/').replace(/\.md$/, '');
      items.push({
        text: nameWithoutExt,
        link: linkPath
      });
    }
  }

  return items;
}

// Generate sidebar
const sidebar = rootFolders.map(folder => {
  const fullPath = path.join(docsDir, folder);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Folder not found: ${fullPath}`);
    return null;
  }

  // Look for index.md or README.md to use as parent link
  const parentIndexFile = fs.readdirSync(fullPath).find(f => /^(index|README)\.md$/i.test(f));
  const parentLink = parentIndexFile
    ? '/' + path.relative(docsDir, path.join(fullPath, parentIndexFile)).replace(/\\/g, '/').replace(/\.md$/, '')
    : '/' + folder + '/';

  return {
    text: folder,
    collapsed: false, // top-level root folders not collapsed
    link: parentLink,
    items: scanFolder(fullPath)
  };
}).filter(Boolean);

// Output JSON to console
console.log(JSON.stringify(sidebar, null, 2));
