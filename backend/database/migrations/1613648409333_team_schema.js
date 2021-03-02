'use strict';

const Schema = use('Schema');


class TeamSchema extends Schema {
   up() {
      this.create('teams', (table) => {
         table.increments();
			table.string('name').notNullable();
			table.string('slug').notNullable();
			
			table
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('users.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

         table.timestamps();
     });
   }

   down() {
     this.drop('teams');
   }
}


module.exports = TeamSchema;
