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
  let count = await strapi.query("shredden-pieces").count();
  if (count < 1) {
    let deleteRes = await strapi.query("shredden-pieces").delete({});
    console.log("jsonFile");
    let prmoises = jsonFile.diaryEntries.map((item) => {
      strapi.query("shredden-pieces").create({
        ...item,
      });
    });
    let responses = await Promise.all(prmoises);
  }
};
