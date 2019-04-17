'use strict';

/**
 * Geodata.js controller
 *
 * @description: A set of functions called "actions" for managing `Geodata`.
 */

module.exports = {

  /**
   * Retrieve geodata records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.geodata.search(ctx.query);
    } else {
      return strapi.services.geodata.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a geodata record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.geodata.fetch(ctx.params);
  },

  /**
   * Count geodata records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.geodata.count(ctx.query);
  },

  /**
   * Create a/an geodata record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.geodata.add(ctx.request.body);
  },

  /**
   * Update a/an geodata record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.geodata.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an geodata record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.geodata.remove(ctx.params);
  }
};
