import { v4 as uuid } from 'uuid';

export const setIds = (list = []) => {
    const listWithIds = []
    if (list.length > 0) list.forEach(item => listWithIds.push({ ...item, _id: uuid() }))
    return listWithIds
}