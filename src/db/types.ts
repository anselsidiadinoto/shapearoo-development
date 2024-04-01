import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable
} from 'kysely'

export interface Database {
  Account: Account
  Session: Session;
  User: User;
  VerificationToken: VerificationToken;
};

export interface Account {
  id: Generated<string>;
  userId: String;
  type: String;
  provider: String;
  providerAccountId: String;
  refresh_token: String | null;
  access_token: String | null;
  expires_at: number | null;
  token_type: String | null;
  scope: String | null;
  id_token: String | null;
  session_state: String | null;
};

export interface Session {
  id: Generated<string>;
  sessionToken: String;
  userId: String;
  expires: Date;
};

export interface User {
  id: Generated<string>;
  name: String | null;
  email: String | null;
  emailVerified: Date | null;
  image: String | null;
};

export interface VerificationToken {
  identifier: String;
  token: String;
  expires: Date;
};


