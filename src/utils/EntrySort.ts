import type { CollectionEntry } from 'astro:content';

const entrySort = (entries: Array<CollectionEntry<'blog'>>, ascending: boolean = false) => {
    if (ascending) {
        return entries.toSorted((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => {
            return a.data.date.valueOf() - b.data.date.valueOf();
        });
    } else {
        return entries.toSorted((a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => {
            return b.data.date.valueOf() - a.data.date.valueOf();
        });
    }
};

export default entrySort;
