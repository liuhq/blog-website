import type { CollectionEntry } from 'astro:content';

export const getCategories = (entries: Array<CollectionEntry<'blog'>>, uncate: string) => {
    const names = [
        ...new Set(entries.filter(entry => entry.data.category !== undefined).map(entry => entry.data.category)),
    ].toSorted() as Array<string>;

    names.push(uncate);

    const cates = new Array<{ name: string; count: number; update: Date }>();

    for (const name of names) {
        const filter = entries.filter(entry => {
            if (name === uncate) return entry.data.category === undefined;
            else return entry.data.category === name;
        });

        // if the uncategorized blog doesn't exists, skip it.
        if (filter.length === 0) continue;

        cates.push({
            name: name,
            count: filter.length,
            update: filter[0].data.date,
        });
    }

    return cates;
};

export const getTags = (entries: Array<CollectionEntry<'blog'>>) => {
    return [
        ...new Set(
            entries.filter(entry => entry.data.tags && entry.data.tags.length > 0).flatMap(entry => entry.data.tags)
        ),
    ].toSorted();
};
