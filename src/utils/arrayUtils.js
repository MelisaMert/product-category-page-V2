export const compare = (arr1,arr2) => arr1.filter(item => arr2.includes(item)).length;

export const sortedAsc = (array, field) =>  {
    if(!array) return ;
    return array.sort((itema,itemb) => itema[field] - itemb[field]);
}

export const sortedDesc = (array, field) => {
    if(!array) return;
    return array.sort((itema,itemb) => itemb[field] - itema[field]);
}
