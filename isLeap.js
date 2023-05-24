function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function leap() {
    var year = document.getElementById("input_year").value;
    if (isLeap(year) == true) {
        document.getElementById("result").textContent = year + " - є високосним роком!";
    } else {
        document.getElementById("result").textContent = year + " - не є високосним роком!";
    }
}