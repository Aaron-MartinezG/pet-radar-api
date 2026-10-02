import { envs } from "../config/envs"
import { LostPet } from "../lost-pets/entities/lost-pet.entity";
import { DataSource, DataSourceOptions } from "typeorm";
import { PendingEmail } from "../email/entities/pending-email.entity";
import { User } from "../users/entities/user.entity";

export const dataSourceOptions : DataSourceOptions = {
    host: envs.DB_HOST,
    type: 'postgres',
    database: envs.DB_NAME,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    port: envs.DB_PORT,
    entities: [LostPet, PendingEmail, User],
    synchronize: false,
    migrations: ['dist/db/migrations/[0-9]*-*.js']
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
// REGEX: Expresiones Regulares