'use strict';

const Mail = use('Mail');


class InvitationEmail {
	static get concurrency() {
		return 1;
	}

	static get key() {
		return 'InvitationEmail-job';
	}

	async handle({ email, team, user }) {
		console.log('InvitationEmail-job started');

		await Mail.send(
			['email.invitation'], { team: team.name, user: user.name },
			message => {
				message
					.to(email)
					.from(user.email, `${user.name} | ${team.name}`)
					.subject(`Convite para o time ${team.name}`)
			}
		);
	}
}


module.exports = InvitationEmail;
