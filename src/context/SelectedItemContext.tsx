import {
    createContext,
    useContext,
    useState,
} from "react";

import type { Item } from "../models/item";

interface SelectedItemContextType {

    selectedItem?: Item;

    selectItem: (item?: Item) => void;

}

const SelectedItemContext =
    createContext<SelectedItemContextType | null>(null);

export function SelectedItemProvider({

    children,

}: React.PropsWithChildren) {

    const [

        selectedItem,

        setSelectedItem

    ] = useState<Item>();

    return (

        <SelectedItemContext.Provider

            value={{

                selectedItem,

                selectItem: setSelectedItem,

            }}

        >

            {children}

        </SelectedItemContext.Provider>

    );

}

export function useSelectedItem() {

    const context = useContext(

        SelectedItemContext

    );

    if (!context)

        throw new Error(

            "useSelectedItem must be inside SelectedItemProvider"

        );

    return context;

}