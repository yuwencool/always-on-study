//百度API1.0版本
var map
function init(){
    //百度地图API功能
    map = new BMap.Map('maplocation'); // 创建Map实例
    var point = new BMap.Point(114.623561,30.463748); // 创建点坐标
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true); // 启用滚轮放大缩小
    map.setCurrentCity("地大（武汉）-未来城校区");
    var scaleCtrl = new BMap.ScaleControl();//添加比例尺控件
    map.addControl(scaleCtrl);
//     //添加城市控件
    var CityControl = new BMap.CityListControl({
        //控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // 控件基于停靠位置的偏移量（可选）
        offset: new BMap.Size(10, 10)
    });
        // 将控件添加到地图上
        map.addControl(CityControl);
// ---------------------------------鹰眼---------------------------------
// var oveCtrl = new BMap.OverviewMapControl();
// map.addControl(oveCtrl);
// -------------------------------个性化地图------------------------------
//初始化模块选择的下拉框
    var sel = document.getElementById('stylelist');
    for(var key in mapstyles){
        var style = mapstyles[key];
        var item = new Option(style.title,key);
        sel.options.add(item);
    }
    changeMapStyle('normal')
    sel.value = 'normal'; 
    //--------------------------输入框自动提示控制-------------------------
    //
    //-------------------------起点---------------------------------
    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "tex_a"
        ,"location" : map
    });
    ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }    
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
            
            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }    
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
            myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
            
            setPlace();
        });
    //-----------------------------------终点-----------------------------------------
    var ab = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "tex_b"
        ,"location" : map
    });

    ab.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }    
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
        
        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }    
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ab.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        
        setPlace();
    });
    // map.addEventListener("click",function(e) {
    //     alert(e.point.lng+","+e.point.lat);
    // })
    
}

//样式切换函数
function changeMapStyle(style){
    // console.log(mapstyles)
    map.setMapStyle({style:style});
    $('desc').html(mapstyles[style].desc);
    // $('stylelist').html(mapstyles[style].desc);
}

//--------------------实时定位函数-----------------------
function setPlace(){
    map.clearOverlays();    //清除地图上所有覆盖物
    function myFun(){
        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        map.centerAndZoom(pp, 18);
        map.addOverlay(new BMap.Marker(pp));    //添加标注
    }
    var local = new BMap.LocalSearch(map, { //智能搜索
    onSearchComplete: myFun
    });
    local.search(myValue);
}

//-------------------------------输入标签id返回--------------------
function G(id) {
    return document.getElementById(id);
}

//步行规划函数
function WalkRouteQuery(){
    //清除地图覆盖显示的所有信息
    map.clearOverlays();
    //获取起点/终点输入框的地点
    var a=document.getElementById('tex_a').value;
    var b=document.getElementById('tex_b').value;
    var walking = new BMap.WalkingRoute(map,{renderOptions:{map:map,panel:'r-result',autoViewport:true}});
    //调用步行规划的函数,显示结果
    walking.search(a,b);
}
//驾车规划
function DrivingQuery(){
    //清除地图覆盖显示的所有信息
    map.clearOverlays();
    //获取起点/终点输入框的地点
    var a=document.getElementById('tex_a').value;
    var b=document.getElementById('tex_b').value;
    var driving = new BMap.DrivingRoute(map,{renderOptions:{map:map,panel:'r-result',autoViewport:true}});
    //调用驾车规划的函数,显示结果
    driving.search(a,b);
}
//公交规划
function BusQuery(){
    //清除地图覆盖显示的所有信息
    map.clearOverlays();
    //获取起点/终点输入框的地点
    var a=document.getElementById('tex_a').value;
    var b=document.getElementById('tex_b').value;
    var transit = new BMap.TransitRoute(map,{renderOptions:{map:map,panel:'r-result',autoViewport:true}});
    //调用公交路线的函数,显示结果
    transit.search(a,b);
}
//添加小学
function addPrimary(){
    //清除地图覆盖物
    map.clearOverlays();
    //创建添加的标记点
    var point = new BMap.Point(111.65,40.82);
    //定位地图中心找到标记点
    map.centerAndZoom(point,18);
    //调用标记点函数进行标记
    var marker= new BMap.Marker(point);
    //添加覆盖物标记点
    map.addOverlay(marker);
    //设置标签的显示内容和大小
    var label = new BMap.Label("这是我的小学",{offset:new BMap.Size(20,-10)});
    //添加标签到地图人标记点上
    marker.setLabel(label);
    //定义信息窗口的属性，如大小
    var opts= {
        width : 400,     // 信息窗口宽度
	    height: 200,     // 信息窗口高度
	    title : "关于小学的信息描述" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短信
    }
    //定义弹出窗口显示的图文信息
    var sContent ="<article style = 'float:left;'><p>姓名：张三；</p><p>年级：2012；</p><p>电话：12345678912；</p></article>" + "<img style= 'float:right; margin:4px' id='imgDemo' src='figure/b4.jpg' width='180' height='150' title='张三'/>";
    //创建信息窗口对象
    var infoWindow = new BMap.InfoWindow(sContent,opts);
    //标记点的单击监听事件
    marker.addEventListener("click",function(){
        this.openInfoWindow(infoWindow);
        //图片加载完毕重绘infowindow
        document.getElementById('imgDemo').onload = function(){
            infoWindow.redraw();//防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        }
    });
}
//添加初中
function addJuniormiddle(){
    //清除地图覆盖物
    map.clearOverlays();
    //创建添加的标记点
    var point = new BMap.Point(106.71,26.57);
    //定位地图中心找到标记点
    map.centerAndZoom(point,18);
    //调用标记点函数进行标记
    var marker= new BMap.Marker(point);
    //添加覆盖物标记点
    map.addOverlay(marker);
    //设置标签的显示内容和大小
    var label = new BMap.Label("这是我的初中",{offset:new BMap.Size(20,-10)});
    //添加标签到地图人标记点上
    marker.setLabel(label);
}
//添加高中
function addSeniormiddle(){
    //清除地图覆盖物
    map.clearOverlays();
    //创建添加的标记点
    var point = new BMap.Point(116.46,39.92);
    //定位地图中心找到标记点
    map.centerAndZoom(point,18);
    //调用标记点函数进行标记
    var marker= new BMap.Marker(point);
    //添加覆盖物标记点
    map.addOverlay(marker);
    //设置标签的显示内容和大小
    var label = new BMap.Label("这是我的高中",{offset:new BMap.Size(20,-10)});
    //添加标签到地图人标记点上
    marker.setLabel(label);
}
//添加大学
function addUniversity(){
    //清除地图覆盖物
    map.clearOverlays();
    //创建添加的标记点
    var point = new BMap.Point(114.623561,30.463748);
    //定位地图中心找到标记点
    map.centerAndZoom(point,18);
    //调用标记点函数进行标记
    var marker= new BMap.Marker(point);
    //添加覆盖物标记点
    map.addOverlay(marker);
    //设置标签的显示内容和大小
    var label = new BMap.Label("这是我的大学",{offset:new BMap.Size(20,-10)});
    //添加标签到地图人标记点上
    marker.setLabel(label);
}
//添加大学
function addUniversity(){
    //清除地图覆盖物
    map.clearOverlays();
    //创建添加的标记点
    var point = new BMap.Point(114.623561,30.463748);
    //定位地图中心找到标记点
    map.centerAndZoom(point,18);
    //创建图片标记点
    var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif",new BMap.Size(300,157));
    //创建标注
    var marker = new BMap.Marker(point,{icon:myIcon});
    //添加覆盖物标记点
    map.addOverlay(marker);
    //设置标签的显示内容和大小
    var label = new BMap.Label("这是我的大学",{offset:new BMap.Size(20,-10)});
    //添加标签到地图人标记点上
    marker.setLabel(label);

    //---------------------------弹出窗口部分--------------------------------------
    //定义弹出窗口显示的图文信息
    var sContent= "<iframe width='450px' height= '300px' frameborder='no' border='0' marginwidth='0' marginheight='0' src='Echarts01.html'/>";
    //创建信息窗口对象
    var infoWindow= new BMap.InfoWindow(sContent);
    //标记点的单击监听事件
    marker.addEventListener("click",function(){
        //弹出信息
        this.openInfoWindow(infoWindow);
    });
}
//显示全部
function fullscreen(){
    //清除地图覆盖物
    map.clearOverlays();
    //定义信息点坐标集合
    var data_info = [
        [111.65,40.82,'我的小学'],
        [106.71,26.57,'我的初中'],
        [116.46,39.92,'我的高中'],
        [114.623561,30.463748,'我的大学']
    ];
    //遍历每个点的经纬度
    //data_info[i][0],每一个坐标点的第一列，即经度
    //data_info[i][1],每一个坐标点的第二列，即纬度
    for (var i=0; i<data_info.length; i++){
        var point = new BMap.Point(data_info[i][0],data_info[i][1])
        //调用添加标注点函数，逐个添加标记点
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        //获取标签显示内容
        var content = data_info[i][2];
        //逐个显示标签内容
        var labe = new BMap.Label(content,{offset:new BMap.Size(20,-10)});
        //添加标记
        marker.setLabel(labe);
    }
    //定义地图的中心点，在中国的中心，西安附近
    var point = new BMap.Point(108.95,34.27);
    //显示中心与地图级别，为了能够看到全国范围
    map.centerAndZoom(point,5);
}
//---------------------------加载箭头线--------------------
function loadpolyline(){
    //显示中心与地图级别，为了能够看得到全国范围
map.centerAndZoom(new BMap.Point(114.353622,30.56486),5);
    var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,{
        scale:0.6,//图标缩放大小
        strokeColor:'#fff',//设置矢量图标的线填充颜色
        strokeWeight:'2',//设置线宽
    });
    var icons = new BMap.IconSequence(sy,'10','30');
    //创建polyline对象
    var pois = [
        new BMap.Point(111.65,40.82),
        new BMap.Point(106.71,26.57),
        new BMap.Point(116.46,39.92),
        new BMap.Point(114.623561,30.463748)
    ];
    var polyline = new BMap.Polyline(pois,{
        enableEditing:false,//是否启用线编辑，默认为false
        enableClicking:true,//是否响应点击事件，默认为true
        icons:[icons],
        strokeWeight:'8',//折线的宽度，以像素为单位
        strokeOpacity:0.8,//折线的透明度，取值在0-1之间
        strokeColor:'#18a45b'//折线颜色
    });
    map.addOverlay(polyline);//增加折线
}
//--------------------------------可编辑的弧线--------------------------------------------
function loadcurve(){
    //显示中心与地图级别，为了能够看得到全国范围
map.centerAndZoom(new BMap.Point(114.353622,30.56486),5);
    //定义四点坐标
    var Primary= new BMap.Point(111.65,40.82),//小学
        Junior= new BMap.Point(106.71,26.57),//初中
        Senior = new BMap.Point(116.46,39.92),//高中
        University = new BMap.Point(114.623561,30.463748);//大学
    var points = [Primary, Junior,Senior, University];//创建弧线点集合
    //创建弧线对象，由四个学校的点构成，线的特征
    var curve = new BMapLib.CurveLine(points,{strokeColor:'blue', strokeWeight:3,strokeOpacity:0.5});
    //添加到地图中
    map.addOverlay(curve);
    //开启编辑功能
    curve.enableEditing();
}
//---------------------------------毕业去向-----------------------------------------
function postgraduate(){
//显示中心与地图级别，为了能够看得到全国范围
    map.centerAndZoom(new BMap.Point(114.353622,30.56486),5);
    //清除地图覆盖物
    map.clearOverlays();
    //---------------------标记点数据准备------------------------
    var CUG_point = new BMap.Point(114.623561,30.463748);//中国地质大学（武汉）-未来城校区
    var YN_point = new BMap.Point(102.857014,24.833155);//云南大学
    //弹出窗口显示信息
    var YN_sContent = "<article style = 'float:left;'><p>姓名：张三；</p><p>年级：2012；</p><p>电话：12345678912；</p><p>专业：地理信息科学；</p></article>" + "<img style= 'float:right; margin:4px' id='imgDemo' src='figure/b5.jpg' width='180' height='150' title='张三'/>";
    var BJ_point = new BMap.Point(116.310989,40.000664);//北京大学
    //弹出窗口显示信息
    var BJ_sContent= "<article style = 'float:left;'><p>姓名：李四；</p><p>年级：2012；</p><p>电话：12345678912；</p><p>专业：地理信息科学；</p></article>" + "<img style= 'float:right; margin:4px' id='imgDemo' src='figure/b6.png' width='180' height='150' title='李四'/>";
    var ZU_point = new BMap.Point(113.352323,23.15146);//中山大学
    //弹出窗口显示信息
    var ZU_sContent= "<article style = 'float:left;'><p>姓名：王五；</p><p>年级：2012；</p><p>电话：12345678912；</p><p>专业：地理信息科学；</p></article>" + "<img style= 'float:right; margin:4px' id='imgDemo' src='figure/b7.jpg' width='180' height='150' title='王五'/>";
    //----------------------构建目标信息点坐标集合，数据结构如下：---------------------
    //[0][0],[0][1],-----------------程序中的下标从0开始，例如，[0][0]代表第一行第一列，即BN_point,以此类推
    //第一列，代表目标点的坐标，第二列，代表目标标记点弹出窗口显示的信息，第三列，代表起始点到目标标记点弧线的颜色
    var data_info=[
        [YN_point,'green',YN_sContent],
        [BJ_point,'red',BJ_sContent],
        [ZU_point,'blue',ZU_sContent]
    ]
//--------------遍历数据集合，逐行获取信息并加载到地图上------------
    for (var i=0; i<data_info.length;i++){
        //逐行获取坐标点，循环第一遍，拿到集合中第[0][0]个值，即WHUT_point
        var point = data_info[i][0];
        //调用添加标注点函数，逐个添加标记点
        var marker=new BMap.Marker(point);
        map.addOverlay(marker);
        //弧线起止点集合
        var npoints = [CUG_point,point];
        //获取每个弧线的颜色值，第i+1行，第3列
        var color = data_info[i][1];
        //创建弧线对象
        var curve = new BMapLib.CurveLine(npoints,{strokeColor:color,strokeWeight:3,strokeOpacity:0.5});
        //添加到地图中
        map.addOverlay(curve);
        //获取标签显示内容
        var content= data_info[i][2];
        //点击监听函数
        addClickHandler(content,marker);
    }
        //点击监听函数
        function addClickHandler(){
        marker.addEventListener("click",function(e){
        openInfo(content,e);
        });
    }
     //定义信息窗口的属性
        var opts= {
        width : 400,     // 信息窗口宽度
        height: 200,     // 信息窗口高度
        title : "信息窗口" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短信
    }
    //打开信息窗口
    function openInfo(content,e){
        var p = e.target;
        var point= new BMap.Point(p.getPosition().lng,p.getPosition().lat);
        var infoWindow= new BMap.InfoWindow(content,opts);//创建信息窗口对象
        map.openInfoWindow(infoWindow,point);//开启信息窗口
    }
}
//--------------------------添加路书----------------------------------------
function loadlushu(){
    MarioRun ();
    lushurun();
}
//奥特曼函数
function MarioRun(){
    var myP1= new BMap.Point(114,30);//起点
    var myP2= new BMap.Point(116,39);//终点
    var myIcon= new BMap.Icon('https://img.puchedu.cn/uploads/0/26/1216953163/2684240445.jpg',new BMap.Size(200,400),{
        imageOffset:new BMap.Size(0,0)//图片的偏移量，为了是图片底部中心对准坐标点。
    });
    var driving2 = new BMap.DrivingRoute(map,{renderOptions:{map:map,autoViewport:true}});//驾车实例
    driving2.search(myP1,myP2);//显示一条公交线路
    window.run=function(){
        var driving = new BMap.DrivingRoute(map);//驾车实例
        driving.search(myP1,myP2);
        driving.setSearchCompleteCallback(function(){
            var pts= driving.getResults().getPlan(0).getRoute(0).getPath();//通过驾车实例，获得一系列点的数组
            var paths = pts.length;//获得有几个点
            var carMK = new BMap.Marker(pts[0],{icon:myIcon});
            map.addOverlay(carMK);
            i=0;
            function resetMKPoint(i){
                carMK.setPosition(pts[i]);
                if(i<paths){
                    setTimeout(function(){
                        i++;
                        resetMKPoint(i);
                    },0);
                }
            }
            setTimeout(function(){
                resetMKPoint(5);
            },0)
        });
    }
    setTimeout(function(){
        run();
    },0);
}
//路书函数
function lushurun(){
    var drv = new BMap.DrivingRoute('北京',{
        onSearchComplete:function(res){
            if (drv.getStatus()==BMAP_STATUS_SUCCESS){
                var plan=res.getPlan(0);
                var arrPois = [];
                for (var j=0;j<plan.getNumRoutes();j++){
                    var route =plan.getRoute(j);
                    arrPois= arrPois.concat(route.getPath());
                }
                map.addOverlay(new BMap.Polyline(arrPois,{strokeColor:'#111'}));
                map.setViewport(arrPois);
                lushu = new BMapLib.LuShu(map,arrPois,{
                    defaultContent:'',//从哪里到哪里
                    autoView:true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                    icon:new BMap.Icon('http://lbsyun.baidu.com/jsdemo/img/car.png',new BMap.Size(52,26),{anchor:new BMap.Size(27,13)}),
                    speed:90000,
                    enableRotation:true,//是否设置marker随着道路的走向进行旋转
                });
                lushu.start();
            }
        }
    });
    var start= new BMap.Point(114,30);
    var end = new BMap.Point(116,39);
    drv.search(start,end);
}
//湖北大学师生概况echarts图表构建函数
function getHbuData(){
    var mychart = echarts.init(document.getElementById('hbuEcharts'));
    //指定图表的配置项和数据
    var option = {
        title:{
            text:'湖北大学概况'
        },
        tooltip:{},
        legend:{
            data:['数量']
        },
        xAxis:{
            data:["本科生","研究生","专任教师"]
        },
        yAxis:{

        },
        series:[{
            name:'数据量',
            type:'bar',
            data:[12000,5600,1200]
        }]
    };
    //使用刚指定的配置项和数据显示图表
    mychart.setOption(option);
}