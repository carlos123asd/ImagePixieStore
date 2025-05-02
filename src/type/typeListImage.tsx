export type typeListImage = {
    data: [];
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null;
    total: number;
    per_page: number;
    tag: string;
    user: boolean;
    current_page: number;
    links:{
        next: string,
        prev: string,
        first: string,
        last: string
    }
}