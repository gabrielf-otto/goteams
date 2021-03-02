'use strict';

const User = use('App/Models/User');

const Role = use('Role');
const Permission = use('Permission');


class DatabaseSeeder {
	async run() 
	{
		const createTeams = await Permission.create({
			slug: 'create_teams',
			name: 'Criar times'
		});

		const createInvite = await Permission.create({
			slug: 'create_invites',
			name: 'Criar convites'
		});

		const createProject = await Permission.create({
			slug: 'create_projects',
			name: 'Criar projetos'
		});

		const admin = await Role.create({
			slug: 'administrator',
			name: 'Administrador'
		});

		const moderator = await Role.create({
			slug: 'moderator',
			name: 'Moderador'
		});

		const visitor = await Role.create({
			slug: 'visitor',
			name: 'Visitante'
		});

		await admin.permissions().attach([createTeams.id, createInvite.id, createProject.id]);
		await moderator.permissions().attach([createProject.id]);


		const gabriel = await User.create({
			name: 'Gabriel',
			email: 'gabrielf.otto@hotmail.com',
			password: '223600'
		});

		//const pedro = await User.create({
		//	name: 'Pedro',
		//	email: 'pedro.gobbi@mail.com',
		//	password: 'afro-nigga'
		//});

		const team = await gabriel.teams().create({
			name: 'Rocketseat',
			user_id: gabriel.id
		});


		const gabrielTeamJoin = await gabriel.teamJoins()
			.where('team_id', team.id)
			.first();

		//const pedroTeamJoin = await pedro.teamJoins()
		//	.where('team_id', team.id)
		//	.first();

		await gabrielTeamJoin.roles().attach([admin.id]);
		//await pedroTeamJoin.roles().attach([moderator.id]);

	}
}


module.exports = DatabaseSeeder;
