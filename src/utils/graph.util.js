import {curry} from 'ramda';

export const getLinkColor = curry((link, node) => (isNeighborLink(link, node) ? 'green' : '#E5E5E5'));

export const getNeighbors = curry((links, node) =>
    links.reduce(
        (neighbors, link) => {
            if (link.target.id === node.id) {
                neighbors.push(link.source.id)
            } else if (link.source.id === node.id) {
                neighbors.push(link.target.id)
            }
            return neighbors
        },
        [node.id]
    ));

export const getNodeColor = curry((neighbors, node) => {
    if (neighbors.indexOf(node.id)) {
        return node.level === 1 ? 'blue' : 'green'
    }
    return node.level === 1 ? 'red' : 'gray'
});

export const getTextColor = curry((neighbors, node) => (neighbors.indexOf(node.id) ? 'green' : 'black'));

export const isNeighborLink = curry((link, node) => link.target.id === node.id || link.source.id === node.id);
