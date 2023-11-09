export interface UserAuth {
    logged: boolean;
    user: { [key: string]: string } | null;
}