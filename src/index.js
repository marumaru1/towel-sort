
// You should implement your task here.



module.exports = function towelSort (matrix) {
    let array = [];
    if (matrix == undefined || matrix == [] || matrix == null ){
        return [];
    }
    matrix.map(function (element, i) {
        array = i % 2 == 0?array.concat(element):array.concat(element.reverse());
});
    return array;
}
