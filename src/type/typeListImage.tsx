export type typeListImage = {
    data: [];
    status: 'idle' | 'fulfilled' | 'pending' | 'rejected';
    error: string | null;
    total: number;
    total_pages: number;
    tag: string;
    user: boolean
}