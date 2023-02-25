import { env } from "$env/dynamic/private";
import PocketBase from "pocketbase";

export const pb = new PocketBase(env.POCKETBASE_URL);