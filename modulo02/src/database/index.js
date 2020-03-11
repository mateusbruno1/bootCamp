import Sequelize from 'sequelize';
import user from '../app/models/User'
import databaseConfig from '../config/database';

const models = [user];

class Database{

  constructor(){
    this.init();
  }

    init(){
      this.connection = new Sequelize(databaseConfig);
      models.map(model =>model.init(this.connection));
    }
}

export default new Database();