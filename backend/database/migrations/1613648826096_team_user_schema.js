'use strict';

const Schema = use('Schema');


class TeamUserSchema extends Schema {
   up () {
     this.create('team_users', (table) => {
      table.increments();

		table
			.integer('user_id')
			.unsigned()
			.notNullable()
			.references('users.id')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

		table
			.integer('team_id')
			.unsigned()
			.notNullable()
			.references('teams.id')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');

      table.timestamps();
     });
   }

   down () {
     this.drop('team_users');
   }
}


module.exports = TeamUserSchema;
