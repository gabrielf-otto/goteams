'use strict';

const User = use('App/Models/User');
const TeamUser = use('App/Models/TeamUser');


class MemberController {
   async index({ request }) {
      const members = await TeamUser
         .query()
         .where('team_id', request.team.id)
         .with('user')
         .with('roles')
         .fetch();

      return members;
   }

   async update({ params, request }) {
      const roles = request.input('roles');
      const teamJoin = await TeamUser.find(params.id);
      await teamJoin.roles().sync(roles);
   }

   async destroy({ params }) {
      const teamJoin = await TeamUser.find(params.id);
      await teamJoin.delete();

      const teams = await TeamUser.query()
         .where({ user_id: teamJoin.user_id })
         .pluck('team_id');

      if (teams.length === 0) {
         const user = await User.find(teamJoin.user_id);
         await user.delete();
      }
   }
}


module.exports = MemberController;
