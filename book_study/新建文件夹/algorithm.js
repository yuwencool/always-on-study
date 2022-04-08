/*
算法名称：快速排序算法
算法思路：
1. 先随机找到一个基准点
2. 将比这个基准大的数字放在数字的右边，比这个基准小的数字放在基准的左边
3. 再对左右区间重复第二步，直到所有的区间都只有一个数值
*/
function quickSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var markPointIndex = Math.floor(arr.length / 2);//先设定一个基准点，理论上这个值可以随机设定
    var markPointValue = arr.splice(markPointIndex, 1)[0];//基准点的值
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= markPointValue) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([markPointValue], quickSort(right));
}