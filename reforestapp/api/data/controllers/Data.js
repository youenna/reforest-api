'use strict';

/**
 * Data.js controller
 *
 * @description: A set of functions called "actions" for managing `Data`.
 */

module.exports = {

  /**
   * Retrieve data records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.data.search(ctx.query);
    } else {
      return strapi.services.data.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a data record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.data.fetch(ctx.params);
  },

  /**
   * Count data records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.data.count(ctx.query);
  },

  /**
   * Create a/an data record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.data.add(ctx.request.body);
  },

  /**
   * Update a/an data record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.data.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an data record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.data.remove(ctx.params);
  }
};
