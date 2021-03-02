'use strict';

const Model = use('Model');


class Project extends Model {
   team() {
      return this.belongsTo('App/Models/Team');
   }
}


module.exports = Project;
