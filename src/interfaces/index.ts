export interface INews {
    author: string;
    category: TypeCategories[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface INewsApiRes {
    news: INews[];
    page: number;
    status: string;
}

export type TypeSkeleton = 'banner' | 'item'

export type TypeDirection = 'row' | 'column'

export interface ICategoriesApiRes {
    categories: TypeCategories[];
    description: string;
    status: string;
}

export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
    handlePageClick: (page: number) => void;
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: TypeCategories | null;
    keywords: string;
}

export type TypeParams = Partial<IFilters>

export interface IBanner {
    description: string;
    id: string;
    image: string;
    title: string;
    url: string;
}

export type TypeCategories =
    | "regional"
    | "technology"
    | "lifestyle"
    | "business"
    | "general"
    | "programming"
    | "science"
    | "entertainment"
    | "world"
    | "sports"
    | "finance"
    | "academia"
    | "politics"
    | "health"
    | "opinion"
    | "food"
    | "game"
    | "fashion"
    | "academic"
    | "crap"
    | "travel"
    | "culture"
    | "economy"
    | "environment"
    | "art"
    | "music"
    | "notsure"
    | "cs"
    | "education"
    | "redundant"
    | "television"
    | "commodity"
    | "movie"
    | "entrepreneur"
    | "review"
    | "auto"
    | "energy"
    | "celebrity"
    | "medical"
    | "gadgets"
    | "design"
    | "ee"
    | "security"
    | "mobile"
    | "estate"
    | "funny";