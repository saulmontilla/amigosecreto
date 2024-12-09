export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends any = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Player {
    id: number,
    name: string
}