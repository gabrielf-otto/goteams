'use strict';

class Invite {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			email: 'required|email'
		}
	}
}


module.exports = Invite;
