# 合并两个有序数组

num1,nums2   有序
nums1 [1,2,,3,0,0,0]   m=3
nums2 [2,5,6]          n
[1,2,2,3,5,6]



- 蛮力
    排序算法？冒泡
    1.nums2 放到nums1后面，
    2.冒泡排序
    [1,2,3,2,5,6]
    [1,2,2,3,5,6]
    3.冒泡排序 o(n2)
    减少一下？
    [1,2,3,0,0,0]
    [2,5,6]

- GO 静态类型语言
    JS 动态类型 变量类型是由值来决定的