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
    props: ['name', 'age'],
    template: '<div>名字是{{name}}，年龄是{{age}}</div>'
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
//使用Vue.directive演示自定义组件的代码实现
Vue.directive('myaction', {
    //当绑定元素插到DOM中，元素自动获得焦点
    inserted (el, binding) {
        //有两个参数，其中el表示当前自定义组件的元素，binding表示指令的相关信息
        //这里的binding.value表示标签v-mycation的值，如果是true就获得焦点
        if (binding.value) {
            el.focus();
        }
    }
})

//Vue.use的主要作用是在Vue中安装插件，通过插件可以为Vue添加全局功能。插件可以是一个对象或者函数。如果是对象必须提供install()方法，用来安装插件。如果是函数，则该函数被当作install()方法
//定义一个MyPlugin插件对象
let MyPlugin = {};
//给插件定义安装函数，其中包括两个参数，第一个参数Vue是Vue的构造器，第二个参数options是一个可选的配置对象
MyPlugin.install = function (Vue, options) {
    console.log(options);
    //在插件中给Vue添加自定义指令
    Vue.directive('my-directive', {
        bind (el, binding) {
            //为自定义指令v-my-directive绑定的DOM元素设置style样式
            el.style = 'width: 100px; height = 100px'
        }
    })
}
Vue.use(MyPlugin, {someOption: true});
var vm1 = new Vue({
    el: '#app1'
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
    data: {
        comName: 'school',
        uname: '学习者'
    },
    /*钩子函数过程：创建实例->页面挂载->组件更新->实例销毁（VUE生命周期）
    创建实例之前：不可以使用数据
    创建实例之后：可以使用数据
    页面挂载之前：不可以展示数据
    页面挂载之后：可以展示数据
    组件更新之前：
    组件更新之后：
    实例销毁之前：
    实例销毁之后：无法操作DOM元素
    */
    beforeCreat () {
        //此时数据不能使用
        console.log('创建实例之前：', this.$data.uname);
    },
    created () {
        //此时数据可以使用
        console.log('创建实例之后：', this.$data.uname);
    },
    beforeMounted () {
        console.log('挂载页面之前：', this.$el.innerHTML);
    },
    mounted () {
        console.log('挂载页面之后：', this.$el.innerHTML);
    },
    beforeUpdate () {

    },
    updated () {

    },
    beforeDestroy () {

    },
    destroyed () {
        
    }
})

console.log(vm.$data.msg)