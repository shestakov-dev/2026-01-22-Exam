class Singleton {
	static #instance: Singleton;

	// Prevent creating new instances from outside
	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.#instance) {
			Singleton.#instance = new Singleton();
		}

		return Singleton.#instance;
	}

	// ... other logic
}
