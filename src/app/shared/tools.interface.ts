export enum Category {
    GenMapper = 'GenMapper',
    Training = 'Training',
}

export interface Tool {
    name: string;
    title: string;
    description: string;
    link: string;
    logoUrl: string;
    category: string;
    comingSoon?: boolean;
    isFeatured?: boolean;
}
