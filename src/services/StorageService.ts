const PREFIX = "bg3-planner";

export class StorageService {

    static load<T>(
        key: string,
        fallback: T,
    ): T {

        try {

            const value = localStorage.getItem(
                `${PREFIX}:${key}`
            );

            if (!value)
                return fallback;

            return JSON.parse(value);

        } catch {

            return fallback;

        }

    }

    static save<T>(
        key: string,
        value: T,
    ) {

        localStorage.setItem(

            `${PREFIX}:${key}`,

            JSON.stringify(value)

        );

    }

}