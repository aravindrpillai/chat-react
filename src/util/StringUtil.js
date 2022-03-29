export function capitalizeFirstCharacter(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}