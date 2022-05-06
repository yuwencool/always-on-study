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

//定义一个父组件用于测试$emit的作用
Vue.component ('com-father', {
    //在这里设置一个自定义事件，接收子组件传过来的数据
    template: '<div><com-son @init-act="convert"></com-son>这里是子组件传过来的信息：{{message}}</div>',
    data () {
        return {
            message: ''
        }
    },
    methods: {
        //该参数用于接收子组件传递过来的值
        convert (value) {
            this.message = value
        }
    }
})
//定义一个子组件用于测试$emit向父组件传递数据
Vue.component ('com-son', {
    template: '#temp2',
    data () {
        return {
            message: '我是子组件的信息'
        }
    },
    methods: {
        //基于$emit设定一个方法用于触发父组件的自定义事件
        act () {
            //指定使用$emit触发的事件，并传递参数
            this.$emit('init-act', this.message)
        }
    }
})
Vue.component ('school', {
    template: '<div>这是学校</div>',
    data () {
        return {

        }
    }
})
Vue.component ('dorm', {
    template: '<div>这是宿舍</div>'
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

var viewmodel = new Vue({
    el: '#software',
    data: {comName: 'school'}
})

console.log(vm.$data.msg)