Page({
  data: {
    focus: false,
    inputValue: '',
    panel_data:{"IDH1":["panel203", "panel88", "panel509"],
                "EGFR":["panel68"]}

  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    // this.setData({
    //   inputValue: e.detail.value
    // })
    // if (e.detail.value == 'IDH1'){
    //   this.setData({
    //     output:"panel203"
    //   })
    // }
    var genes = this.data.panel_data
    for (var xx in  genes){
      console.log(xx)
      if (e.detail.value == xx) {
        this.setData({
          output: genes[xx]
        })
        return e.detail.value;
      }
      else{
        this.setData({
          output: ""
        })
      }
    }
  }
 
})

