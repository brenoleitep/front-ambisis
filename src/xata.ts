import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord
} from "@xata.io/client";
import { buildClient } from "@xata.io/client";

const tables = [
  {
    name: "folders",
    columns: [{name: "name", type: "string", unique: true}],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Folders = InferredTypes["folders"];
export type FoldersRecords = Folders & XataRecord;

export type DatabaseSchema = {
  folders: FoldersRecords;
}

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Breno-Leite-s-workspace-7r6lem.us-east-1.xata.sh/db/auth-ambisis",
}

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({...defaultOptions, ...options}, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};

