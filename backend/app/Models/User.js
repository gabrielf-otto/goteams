'use strict';

const Model = use('Model');
const Hash = use('Hash');


class User extends Model {
	static boot() {
		super.boot();

		this.addHook('beforeSave', async (userInstance) => {
			if (userInstance.dirty.password) {
				userInstance.password = await Hash.make(userInstance.password);
			}
		});
	}

	teams() {
		return this.belongsToMany('App/Models/Team').pivotModel(
			'App/Models/TeamUser'
		);
	}

	teamJoins() {
		return this.hasMany('App/Models/TeamUser');
	}

	tokens() {
		return this.hasMany('App/Models/Token');
	}

	async is(expression) {
		const team = await this.teamJoins()
			.where('team_id', this.currentTeam)
			.first();

		return team.is(expression);
	}

	async can(expression) {
		const team = await this.teamJoins()
			.where('team_id', this.currentTeam)
			.first();
			
		return team.can(expression);
	}

	async scope(required) {
		const team = await this.teamJoins()
			.where('team_id', this.currentTeam)
			.first();
			
		return team.scope(required);
	}
}


module.exports = User;
