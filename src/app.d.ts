import PocketBase from "pocketbase";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			pb: PocketBase
		}
	}
}