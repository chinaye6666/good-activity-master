Page({
  data: {
    num : true
  },
  deng: function (event) {
    if(event.target.id != ""){
      return false;
    }
    this.data.num = !this.data.num
    this.setData({
      num: this.data.num
    })
  }
})