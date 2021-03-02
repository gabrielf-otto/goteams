'use strict';


class PermissionController {
   async show({ request, auth }) {
      const teamJoin = await auth.user.teamJoins()
         .where({ team_id: request.team.id })
         .first();

      return {
         roles: await teamJoin.getRoles(),
         permissions: await teamJoin.getPermissions()
      };
   }
}


module.exports = PermissionController;
