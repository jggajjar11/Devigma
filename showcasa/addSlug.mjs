import fs from "fs";
import path from "path";
import profiles from "./src/data/profiles.json" assert { type: "json" }; // Ensure JSON module import works

const generateUniqueSlugs = (profiles) => {
  const slugSet = new Set();

  return profiles.map((profile) => {
    let slug = profile.name.toLowerCase().replace(/\s+/g, "-");
    let uniqueSlug = slug;
    let counter = 1;

    // Ensure uniqueness
    while (slugSet.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }

    slugSet.add(uniqueSlug);
    return { ...profile, slug: uniqueSlug };
  });
};

// Add slugs to profiles
const updatedProfiles = generateUniqueSlugs(profiles);

// Write updated profiles back to JSON file
const filePath = path.resolve("./src/data/profiles.json");
fs.writeFileSync(filePath, JSON.stringify(updatedProfiles, null, 2), "utf-8");

console.log("Slugs added successfully!");
