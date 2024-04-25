var removeDuplicates = function(nums) {
    let count = 0;
    for (let num of nums) {
        if (count < 2 || num > nums[count - 2]) {
            nums[count++] = num;
        }
    }
    return count;
};
