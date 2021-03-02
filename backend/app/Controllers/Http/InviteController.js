'use strict';

const Invite = use('App/Models/Invite');


class InviteController {
	async store({ request, auth }) {
		const email = request.input('email');

		await Invite.create({
			email,
			user_id: auth.user.id,
			team_id: request.team.id
		});
	}
}


module.exports = InviteController;
