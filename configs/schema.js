import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE=pgTable('users',{
    id:serial().primaryKey(),
    username:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false),
})