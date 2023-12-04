const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert() {
    return this.database.query(`insert into ${this.table} () values ()`);
  }
  // insert(user) {
  //   return this.database.query(
  //     `INSERT INTO ${this.table} (email, hashedPassword, firstname, lastname, company_name, phone_number, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  //     [
  //       user.email,
  //       user.hashedPassword,
  //       user.firstname,
  //       user.lastname,
  //       user.company_name,
  //       user.phone_number,
  //       user.is_admin,
  //     ]
  //   );
  // }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  find(id) {
    return this.database.query(
      `select id, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `select id, email, firstname, lastname, company_name, phone_number, is_admin from  ${this.table}`
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email= ?, company_name= ?, hashedPassword = ?, firstname = ?, lastname = ?, phone_number = ? where id = ?`,
      [
        user.email,
        user.company_name,
        user.hashedPassword,
        user.firstname,
        user.lastname,
        user.phone_number,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
