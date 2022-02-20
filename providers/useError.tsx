import {createContext, useContext, useState} from "react";

const errorCtx = createContext<[string | null, (error: string | null) => void]>(undefined as any);

export default function useError() {
    return useContext(errorCtx);
}

export function ErrorProvider({children}: {children: any}) {
    const error = useState<string | null>(null);

    return <errorCtx.Provider value={error}>{children}</errorCtx.Provider>;
}