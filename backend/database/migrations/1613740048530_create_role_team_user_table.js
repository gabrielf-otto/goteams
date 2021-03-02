'use strict'

const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up () {
    this.create('role_team_user', table => {
      table.increments()
      table.integer('role_id').unsigned().index()
      table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.integer('team_user_id').unsigned().index()
      table.foreign('team_user_id').references('id').on('team_users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_team_user')
  }
}

module.exports = RoleUserTableSchema
