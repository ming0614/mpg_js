const twoSum =(nums,target) =>{
    // console.log('两数相加')
    let map= {}; //JSON Object  HashMap
    let res=[];
    //编写你功能 一个函数完成一个功能
    //callback
    //for +执行功能
    nums.forEach((e,i) =>map[e]=i); //0(n) 以空间换时间
    // console.log(map);
     for(let i=0;i<nums.length;i++){ //O(n)
         let j=map[target-nums[i]]; //undefined
         if(j && j !=i){
             res=[i,j];
             break;
         }
     }
    return res;
 }
 
 console.log(twoSum([2,7,11,15],9));