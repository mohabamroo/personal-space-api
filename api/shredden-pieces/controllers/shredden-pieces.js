"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  search: async (ctx, next) => {
    let pieces = await strapi.query("shredden-pieces").search({ ...ctx.query });

    let count = await strapi
      .query("shredden-pieces")
      .countSearch({ ...ctx.query });
    return ctx.response.send({
      pieces,
      count,
    });
  },
};
