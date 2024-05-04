import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
};
export type DeliveryAddress = {
    id: Generated<string>;
    first_name: string | null;
    last_name: string | null;
    address_line_1: string | null;
    address_line_2: string | null;
    address_city: string | null;
    address_state: string | null;
    address_zip: string | null;
    user_generalId: string;
};
export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Timestamp;
};
export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Timestamp | null;
    image: string | null;
};
export type User_general = {
    id: Generated<string>;
    email: string;
    name: string;
    userId: string;
};
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Timestamp;
};
export type DB = {
    Account: Account;
    DeliveryAddress: DeliveryAddress;
    Session: Session;
    User: User;
    User_general: User_general;
    VerificationToken: VerificationToken;
};
