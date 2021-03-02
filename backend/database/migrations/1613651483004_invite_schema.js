'use strict';

const Schema = use('Schema');


class InviteSchema extends Schema {
   up() {
      this.create('invites', (table) => {
         table.increments();
         table.string('email').notNullable();

         table
            .integer('team_id')
            .unsigned()
            .notNullable()
            .references('teams.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

         table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

         table.timestamps();
      })
   }

   down() {
      this.drop('invites');
   }
}

   
module.exports = InviteSchema
