class Singleton {
	public exampleValue: string = "example";

	static #instance: Singleton;

	// Prevent creating new instances from outside
	private constructor() {}

	public static get instance(): Singleton {
		if (!Singleton.#instance) {
			Singleton.#instance = new Singleton();
		}

		return Singleton.#instance;
	}
}

const a = Singleton.instance;
const b = Singleton.instance;

console.log(b.exampleValue);

a.exampleValue = "changed";

console.log(b.exampleValue); // Outputs: "changed"
