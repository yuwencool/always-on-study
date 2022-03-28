function compute(){
    //获取文本输入框a的值
    var a=document.getElementById('txt_a').value;
    var b=document.getElementById('txt_b').value;
    var type=document.getElementById('computeType').value;
    //alert(type)
    //如果没有输入参数，就不能计算，提示输入参数
    if(a=='' || b==''){
        //弹出对话框
        alert('请输入参数');
        //返回
        return;
    }
    else {
        var y;
        //如果运算符是+，就调用add函数
        if(type=="add"){
            y=add(a,b);
            //弹出对话框
            alert('加的结果是：'+y);
        }
        //如果运算符是-，就调用minus函数
        else if(type=='minus'){
            y=minus(a,b);
            //弹出对话框
            alert('减的结果是：'+y);
        }
        else if(type='multiply'){
            y=multiplty(a,b);
            alert('乘的结果是：'+y);
        }
        else{
            y=divide(a,b);
            alert('除的结果是：'+y);
        }
    }
    //将计算结果填写到计算结果文本框c中
    document.getElementById('txt_c').value=y;
}
//加
function add(a,b){
    return Number(a)+Number(b);
}
//减
function minus(a,b){
    return Number(a)-Number(b);
}
//乘
function multiplty(a,b){
    return Number(a)*Number(b);
}
//除
function divide(a,b){
    return Number(a)/Number(b);
}

function loadEcharts(){
    //基于准备好的dom,初始化echarts实例
    var mychart= echarts.init(document.getElementById('echartsTest'));
    //指定图表的配置项和数据
    var option= {
        title: {
            text: '一天的时间统计'
        },
        tooltip: {},
        legend: {
            data:['小时']
        },
        xAxis: {
            data: ["吃饭","睡觉","散步或者运动","工作","读书学习","其他"]
        },
        yAxis: {
        },
        series: [{
            name:'小时',
            type:'bar',
            data: [1.5 ,7.5 ,1 ,9 ,1 ,4]
        }]
    };
    //使用刚指定的配置项和数据显示图表
    mychart.setOption(option);
}