class LoginResponse {
  constructor(user) {
    this._id = user._id;
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
    this.token = user.token;
  }
}

module.exports = { LoginResponse };
