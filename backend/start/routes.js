'use strict';

const Route = use('Route');


Route.post('auth', 'AuthController.run').validator('Auth');
Route.post('users', 'UserController.store').validator('User');

Route.group(() => {
   Route.get('/roles', 'RoleController.index');

   Route.resource('/teams', 'TeamController')
      .apiOnly()
      .validator(new Map([[['teams.store', 'teams.update'], ['Team']]]));

}).middleware('auth');

Route.group(() => {
   Route.get('/permissions', 'PermissionController.show');

   Route.post('/invites', 'InviteController.store').validator('Invite').middleware('can:create_invites');

   Route.resource('/projects', 'ProjectController')
      .apiOnly()
      .validator(new Map([[['projects.store', 'projects.update'], ['Project']]]))
      .middleware(new Map([[['projects.store', 'projects.update'], ['can:create_projects']]]));

   Route.get('/members', 'MemberController.index');
   Route.put('/members/:id', 'MemberController.update').middleware('is:administrator');
   Route.delete('/members/:id', 'MemberController.destroy').middleware('is:administrator');

}).middleware(['auth', 'team']);
