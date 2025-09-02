import { createContext, useState, type ReactNode } from "react";
interface AuthContextType {
    count: number | null,
    setCount: React.Dispatch<React.SetStateAction<number | null>>
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState<number | null>(null)
    return <AuthContext.Provider value={{ count, setCount }}>
        {children}
    </AuthContext.Provider>
}