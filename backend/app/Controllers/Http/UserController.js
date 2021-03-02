'use strict';

const User = use('App/Models/User');
const Invite = use('App/Models/Invite');


class UserController {
   async store({ request, response, auth }) {
      const { name, email, password } = request.all();

      const invites = Invite.query().where({ email });
      const teams = await invites.pluck('team_id');

      //if (teams.length === 0) {
      //   return response.status(401).send({
      //      message: 'You are not invited to any team'
      //   });
      //}

      const user = await User.create({
         name,
         email,
         password
      });

      await user.teams().attach(teams);
      await invites.delete();

      const token = await auth.attempt(email, password);
      return token;
   }
}


module.exports = UserController;
