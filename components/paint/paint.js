Component({
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },
  
  data: {   // 私有数据，可用于模板渲染
    navList: [
      {
        id: 0,
        name: '撤回',
        img: '/images/icon/return.png',
        tap: '_return'
      },
      {
        id: 1,
        name: '清空',
        img: '/images/icon/clear.png',
        tap: '_clear'
      },
      {
        id: 2,
        name: '保存',
        img: '/images/icon/save.png',
        tap: '_save'
      },
      {
        id: 3,
        name: '调色板',
        img: '/images/icon/color.png',
        tap: '_color'
      }
    ],
    colorList: [
      {
        name: 'red'
      },
      {
        name: 'black'
      },
      {
        name: 'green'
      },
      {
        name: 'gold'
      }
    ],
    isColor: false, // 是否展示调色板
  }, 

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  methods: {
    _return() {
      console.log(11111)
    },
    _clear() {
      console.log(22222)
    },
    _save() {
      console.log(33333)
    },
    _color() {
      this.setData({
        isColor: !this.data.isColor
      })
    }
  },

})