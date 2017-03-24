var currentId = 2;

export function newId() {
    currentId++;
    return currentId;
}