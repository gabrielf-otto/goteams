'use strict';

const Model = use('Model');

// Member
class TeamUser extends Model {
   static get traits() {
      return [
        '@provider:Adonis/Acl/HasRole',
        '@provider:Adonis/Acl/HasPermission'
      ]
   }

   roles() {
      return this.belongsToMany('Adonis/Acl/Role');
   }

   permissions() {
      return this.belongsToMany('Adonis/Acl/Permission');
   }

   user() {
      return this.belongsTo('App/Models/User');
   }
}


module.exports = TeamUser;
