"use strict";
console.log("jsonFile");

const jsonFilePath = "./diary.json";
const jsonFile = require(jsonFilePath);
console.log("jsonFile", jsonFile);

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
  console.log("jsonFile");
  jsonFile.diaryEntries.forEach((item) => {
    strapi.query("shredden-pieces").create({
      ...item,
    });
  });
};
