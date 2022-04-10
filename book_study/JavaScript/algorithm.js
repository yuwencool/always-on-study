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

//另一种写法
function quickSort1 (arr, left, right) {
    var len = arr.length;
    var partitionIndex;
    var left = typeof left == 'number' ? left : 0;
    var right = typeof right == 'number' ? right : len - 1;
    if (left < right) {
        partitionIndex = partition (arr, left, right);
        quickSort1 (arr, left, partitionIndex - 1);
        quickSort1 (arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition (arr, left, right) {
    var markPointIndex = left;
    var count = markPointIndex + 1;
    for (let i = count; i < right; i++) {
    var markPointIndex = left;
        if (arr[i] < arr[markPointIndex]) {
            swap(arr, i, markPointIndex);
            count++;
        }
    }
    return count - 1;
} 

function swap (arr, i, j) {
    tempValue = arr[i];
    arr[i] = arr[j];
    arr[j] = tempValue;
}

/*
算法名称：选择排序
算法思路：
1. 首先从数组中识别出最大或者最小的数，放在排序数组的首要位置
2. 在剩余的数组中，再次识别出最大或者最小的数，放在排序数组的末尾
3. 重复步骤2，直到所有的数值都完成排序
*/
function selectionSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        tempValue = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tempValue;
    }
    return arr;
}

/*
算法名称：希尔排序，也称为递减增量（步长）排序算法
算法思路：
1. 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序
2. 待整个序列中的记录基本有序之后，再对全体记录进行依次直接插入排序
*/
function shellSort (arr)  {
    var len = arr.length;
    var gap = 1; //给步长一个初始值
    while (gap < (len / 3)) {
        gap = gap * 3 + 1;
    }//这里将步长设置为序列长度的1/3，这个值的设定并不固定，也可以使用1/2
    for (gap; gap > 0; Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

/*
算法名称：插入排序
算法思路：
1. 将待排序序列的第一个元素作为有序序列，把第二个元素到最后一个元素作为未排序序列
2. 从头到尾依次扫描未排序序列，将扫描到的每一个元素插入有序序列的适当位置
*/
function insertionSort (arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        current = arr[i];
        preIndex = i - 1;
        while (preIndex <= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}