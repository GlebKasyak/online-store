
export const maxLengthTitle = title => {
    if(title.length > 30) return title.substr(0, 23) + " ...";
    return title
};