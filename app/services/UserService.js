const User = require("./../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin dato");
  }

  static getInfo(user) {
    return [user.id, user.username, user.name, "sin bio"];
  }
}

module.exports = UserService;
