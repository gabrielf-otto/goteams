'use strict'

const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.create('permission_team_user', table => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('team_user_id').unsigned().index()
      table.foreign('team_user_id').references('id').on('team_users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_team_user')
  }
}

module.exports = PermissionUserTableSchema
