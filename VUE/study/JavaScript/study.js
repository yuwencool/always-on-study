Vue.component ('comp', {
    data () {
        return {
            uname: 'Tom'
        }
    },
    template: '#temp1'
})
Vue.component ('h8', {
    data () {
        return {
            num: 0
        }
    },
    template: '<button v-on:click="num++">按钮被按了{{num}}次</button>'
})
Vue.component ('h11', {
    //props用于父组件向子组件传递数据
    props: ['name'],
    template: '<div>名字是{{name}}</div>'
})
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'vuedescription',
        price: 10,
        count: 2,
        myNumber: 1,
        dataId: 'abcdefg',

        //用于定义样式类是否生效
        isShow: true
        // isShow: false
    },
    methods: {
        // 定义一个事件响应函数
        sendMessage () {
            this.msg = "hahhaha"
        }
    },
    computed: {
        paymoney () {
            return this.price * this.count
        }
    },
    //因为watch监听的是data的数据变化，因此watch的方法名必须与data的属性名一致，如果需要在数据变化的同时进行异步操作，或者计算开销比较大时，建议使用状态监听进行处理
    watch: {
        myNumber (newNumber, oldNumber) {
            console.log('新数字为：' + newNumber, '旧数字为：' + oldNumber)
        }
    },
    //过滤器函数必须定义第一个参数，该参数是使用过滤器的参数
    filters: {
        change (value) {
            return value ? value.toUpperCase() : ''
        },
        formatId (value) {
            return value ? value.charAt(2) + value.indexOf('f') : ''
        }
    },
    components: {
        h9: {
            template: '<h1>这是自定义组件</h1>'
        },
        h10: {
            template: '<h2>这也是自定义组件</h2>'
        }
    }
})

var viewmodel = new Vue({el: '#software'})

console.log(vm.$data.msg)