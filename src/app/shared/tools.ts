import { Category, Tool } from './tools.interface';

export const TOOLS: Tool[] = [
    {
        name: 'NPLGenMapper',
        title: 'NPL GenMapper',
        description: 'The original genampper at noplaceleft.tools',
        logoUrl: 'assets/npl-tools-logo-2018.png',
        link: 'https://npl.genmapper.com',
        category: Category.GenMapper
    },
    {
        name: 'Pathways GenMapper',
        title: 'Pathways GenMapper',
        description: 'Data collection and assessment tool for coaching church planters',
        logoUrl: 'assets/pathways-genmapper.jpg',
        link: 'https://npl.genmapper.com',
        category: Category.GenMapper
    },
    {
        name: 'SimpleTools',
        title: 'NPL SimpleTools',
        description: 'NO PLACE LEFT simple training tools',
        logoUrl: 'assets/nplsimpletools.png',
        link: 'https://www.nplsimpletools.com/',
        category: Category.Training
    },
    {
        name: 'LivingHope',
        title: 'LivingHope.School',
        description: 'The purpose of this site is to freely give others one easily accessible website with simple, biblical, language specific tools to assist in their obedience to Jesus.',
        logoUrl: 'assets/livinghope.school.jpg',
        link: 'https://www.livinghope.school/',
        category: Category.Training
    }
]
