Page({
  data:{
    name:"首页",
    age:18,
    students:[
      {id:110,name:"curry",age:30},
      {id: 112, name:"cur33", age:32}
    ],
    counter:0

  },

  //增加数字
  handleAdd(){
    //1.错误 页面不会刷新
   // console.log("点击了按钮")
   //this.data.counter +=1

   //2 this.setData()
   this.setData({
     counter:this.data.counter+1
   })

  },

//减少
    handleReduce() {
      this.setData({
      counter:this.data.counter-1
      })
  }

})