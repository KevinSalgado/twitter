class UserView {
  static createUser(payload) {
    return new UserView(payload);
  }

  get error() {
    if (this.payload == null) {
      return "payload no existe";
    }
    return this.payload;
  }
}

module.exports = UserView;
