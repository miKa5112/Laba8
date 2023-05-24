function array(arr) {
    var max = 0;
    var min = 0;
    var sumPos = 0;
    var prodNeg = 1;
    var numPos = 0;
    var numNeg = 0;

    for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i];
    }
    if (arr[i] < min) {
    min = arr[i];
    }
    if (arr[i] > 0) {
        sumPos += arr[i];
        numPos++;
    }
    if (arr[i] < 0) {
        prodNeg *= arr[i];
        numNeg++;
    }
    }

    return {
        max,
        min,
        sumPos,
        prodNeg,
        numPos,
        numNeg,
    }
}
