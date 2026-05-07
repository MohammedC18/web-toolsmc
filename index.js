#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const projectName = process.argv[2] || "web-utils-project";
const base = path.join(process.cwd(), projectName);

// these are YOUR real folders
const folders = [
  "Ajax",
  "analytics",
  "angular",
  "flask",
  "security",
  "typescript"
];

// prevent overwrite
if (fs.existsSync(base)) {
  console.log("❌ Folder already exists:", projectName);
  process.exit(1);
}

// copy real folders
folders.forEach(folder => {
  const src = path.join(__dirname, folder);
  const dest = path.join(base, folder);

  if (fs.existsSync(src)) {
    fs.copySync(src, dest);
  } else {
    console.log(`⚠️ Skipping missing folder: ${folder}`);
  }
});

console.log("✔ Project created successfully!");
console.log("📁 Location:", base);