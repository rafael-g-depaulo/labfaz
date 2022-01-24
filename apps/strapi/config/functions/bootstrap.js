'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup"
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

module.exports = async () => {

  // setup public role
  require("./setDefaultPermissions")(strapi)

  // if is first fun
  if (await isFirstRun() || true) {

    // seed database (only if in development)
    if (process.env.NODE_ENV === "development" || process.env.STRAPI_SEED_DB === "true") {
      require("./seeds")(strapi)
    }
  }
}
