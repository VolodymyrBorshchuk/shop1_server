import { sqlConfig } from "./sql.config";
import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
   sql: {
    ...sqlConfig(),
   }
}))