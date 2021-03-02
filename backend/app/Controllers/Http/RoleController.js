'use strict';

const Role = use('Role');


class RoleController {
   async index() {
      return await Role.all();
   }

}


module.exports = RoleController;
