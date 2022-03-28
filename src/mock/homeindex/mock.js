let Mock = require('mockjs')
let data = [{
        id: 0,
        name: "肖战",
        text: "我是肖战，我最帅！"
    },
    {
        id: 1,
        name: "王琳凯",
        text: "我是王琳凯，我最帅！"
    }, {
        id: 2,
        name: "任嘉伦",
        text: "我是任嘉伦，我最帅！"
    },
    {
        id: 3,
        name: "易烊千玺",
        text: "我是易烊千玺，我最帅！"
    },
    {
        id: 4,
        name: "王一博",
        text: "我是王一博，我最帅！"
    }
]
Mock.mock('/api/homeindex', 'get', (config) => {
    return data
})
Mock.mock(/\/api\/homeindex\/\d/, 'delete', (config) => {
    let arr = config.url.split('/')
    let id = arr.pop()
    data.splice(id, 1)
    data = data.map(function(item, index) {
        return {
            id,
            name: item.name,
            text: item.text
        }
    })
    return data
})
Mock.mock(/\/api\/homeindex\/edit\/\d/, 'put', (config) => {
        let canshu = config.body //string
        let arr = config.url.split('/')
        let id = arr.pop()
        console.log(canshu)
        canshu = JSON.parse(canshu) //obj
        data[id].name = canshu.name
        data[id].text = canshu.text
        return data
    })
    //添加
Mock.mock('/api/homeindex', 'post', function(config) {
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({ id: data.length, name, text })
    return data

})