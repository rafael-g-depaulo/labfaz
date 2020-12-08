module.exports = async strapi => {
  const publicRole = await strapi
    .plugins["users-permissions"]
    .models
    .role
    .query()
    .then(roles => roles
      .filter(role => role.type === "public")[0]
    )
  const roleId = publicRole.id

  // this is how to get all of the admin permissions. this might be useful later on
  // console.log(
  //   await
  //   // Object.keys(
  //     strapi
  //       .admin
  //       .models
  //       .role
  //       .query()
  //       .then(roles => roles.filter(role => role.code === 'strapi-editor' || role.code === 'strapi-author'))
  //   // )
  // )

  // allow findOne for all collections
  const permissionsFindOne = strapi
    .query("permission", "users-permissions")
    .find({ type: "application", action: "findone", role: roleId });

  // allow find for all collections
  const permissionsFind = strapi
    .query("permission", "users-permissions")
    .find({ type: "application", action: "find", role: roleId });

  return Promise
    .all([permissionsFindOne, permissionsFind])
    .then(permissions => permissions.flat())
    .then(permissions => permissions
      .map(permission => strapi
        .query("permission", "users-permissions")
        .update({ id: permission.id }, { enabled: true })
      )
    )
}
