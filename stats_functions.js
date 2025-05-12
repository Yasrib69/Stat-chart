function parse_string_into_array_of_ordered_asc_nums(str) {
    let cleanStr = str.replace(/\s+/g, "");
    let arr = cleanStr.split(",").map(Number);
    return arr.sort((a, b) => a - b);
}

function calculate_array_sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function calculate_mean(sum, n) {
    return sum / n;
}

function calculate_median(arr) {
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

function calculate_variance(arr, mean) {
    let sumOfSquares = arr.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0);
    return sumOfSquares / (arr.length - 1);
}

function calculate_stddev(variance) {
    return Math.sqrt(variance);
}

function update_stats() {
    let input = document.getElementById("input_set").value;
    let arr = parse_string_into_array_of_ordered_asc_nums(input);

    let n = arr.length;
    let x_min = arr[0];
    let x_max = arr[arr.length - 1];
    let sum = calculate_array_sum(arr);
    let mean = calculate_mean(sum, n);
    let median = calculate_median(arr);
    let variance = calculate_variance(arr, mean);
    let stddev = calculate_stddev(variance);

    const eqn_RHSs = [arr, n, x_min, x_max, sum, mean, median, variance, stddev];
    const cells = document.getElementsByClassName("tbl_row_data");

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = eqn_RHSs[i];
    }
}
