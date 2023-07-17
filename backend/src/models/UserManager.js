const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert() {
    return this.database.query(`insert into ${this.table} () values ()`);
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email= ?, password = ? where id = ?, set firstname =?, set lastname = ?, set phone_number = ?, set company_name = ?`,
      [
        user.email,
        user.password,
        user.id,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.company_name,
      ]
    );
  }
}

module.exports = UserManager;
