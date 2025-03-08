import fs from "fs";
import path from "path";
import profiles from "./src/data/profiles.json" assert { type: "json" }; // Ensure JSON module import works

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const generateUniqueSlugs = (profiles) => {
  const slugSet = new Set();

  return profiles.map((profile) => {
    let slug = generateSlug(profile.name);
    let uniqueSlug = slug;
    let counter = 1;

    while (slugSet.has(uniqueSlug)) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }

    slugSet.add(uniqueSlug);

    const updatedPortfolio = profile.portfolio.map((work) => ({
      ...work,
      workSlug: `${generateSlug(work.title)}-${uniqueSlug}`,
    }));

    return { ...profile, slug: uniqueSlug, portfolio: updatedPortfolio };
  });
};

const updatedProfiles = generateUniqueSlugs(profiles);

const filePath = path.resolve("./src/data/profiles.json");
fs.writeFileSync(filePath, JSON.stringify(updatedProfiles, null, 2), "utf-8");

console.log("Slugs and work slugs added successfully!");
