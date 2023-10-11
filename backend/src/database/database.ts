import { Sequelize } from "sequelize";

const db:string = 'rdsqa'
const db_user:string = 'postgres'
const db_pwd:string = 'falcon546A'
const db_host:string = 'localhost'

const sqlDB = new Sequelize(db, db_user, db_pwd, {
    host: db_host,
    dialect: 'postgres'
})

export default sqlDB