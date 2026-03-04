import * as bcrypt from 'bcrypt';

export class User {
  public name: string;
  public email: string;
  private password: string;
  public password_hash: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async hash_password() {
    if (this.password === '') return;

    const round_salts = Number(process.env.BCRYPT_SALT);

    console.log(round_salts, this.password);
    this.password_hash = await bcrypt.hash(this.password, round_salts);
    console.log(this.password_hash);
  }
}
