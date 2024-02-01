import * as csstree from 'css-tree';
import remixicon from 'remixicon/fonts/remixicon.css';

/**
 * return unuse the remixicon rules.
 * @param {Array<string>} used the used remixicon class-name
 * @returns
 */
const reduceRemixicon = (used: Array<string>): Array<string> => {
    const ast = csstree.parse(remixicon, { parseValue: false });
    const usedSet = new Set<string>(used);
    const ret = new Set<string>();

    csstree.walk(ast, {
        visit: 'ClassSelector',
        enter: node => {
            if (usedSet.has(node.name)) return csstree.walk.skip;

            ret.add(node.name);
        },
    });

    return [...ret];
};

export default reduceRemixicon;
