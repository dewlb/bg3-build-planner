import { useEffect, useState } from "react";

import { StorageService } from "../services/StorageService";

export function useLocalStorageState<T>(
    key: string,
    initialValue: T,
) {

    const [value, setValue] = useState<T>(() =>
        StorageService.load(
            key,
            initialValue,
        )
    );

    useEffect(() => {

        setValue(
            StorageService.load(
                key,
                initialValue,
            )
        );

    }, [key]);

    useEffect(() => {

        StorageService.save(
            key,
            value,
        );

    }, [key, value]);

    return [value, setValue] as const;

}