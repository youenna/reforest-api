'use strict';

/**
 * Tree.js controller
 *
 * @description: A set of functions called "actions" for managing `Tree`.
 */

module.exports = {

  /**
   * Retrieve tree records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tree.search(ctx.query);
    } else {
      return strapi.services.tree.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tree record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tree.fetch(ctx.params);
  },

  /**
   * Count tree records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tree.count(ctx.query);
  },

  /**
   * Create a/an tree record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tree.add(ctx.request.body);
  },

  /**
   * Update a/an tree record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tree.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tree record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tree.remove(ctx.params);
  }
};
