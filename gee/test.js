// 根据ID引用特定的影像
var img1= ee.Image('')
// 使用过滤函数筛选影像，常用于影像ID未知时的场景
var img2 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR").filterBounds(point).filterDate('2019-03-01','2019-06-30').sort('CLOUD_COVER').first()
// 将影像打印出来，可查看影像的一些基本信息
print('第一张影像',img1,'第二张影像',img2)
//影像的可视化
Map.CenterObject(point,10)
Map.addLayer(img1,{min:0,max:3000,bands:['B4','B3','B2']},'Fig 1')
Map.addLayer(img2,{min:0,max:3000,bands:['B4','B3','B2']},'Fig 1')