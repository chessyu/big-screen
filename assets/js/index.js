
/*
 * @Description: 
 * @Author:  chessyu 
 * @Date: 2021-07-22 10:58:51
 */

$(function(){
    var baseColor = 'rgb(59 130 246)';
    var linstColor = 'rgb(228 238 255 / 10%)';

    //#region  项目总数
    // 项目总数据报表
    var projectToal = echarts.init(document.getElementById('projectToal'));
    var projectData = {
        title:[ '郁金香','紫罗兰', '星辰花','樱草花','毋忘我','向日葵'],
        data:[8,12,15,9,11,19]
    }

    // 指定图表的配置项和数据
    var option = {
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    '项目个数 : ' + params[0].value;
            }
        },
        backgroundColor: 'transparent',
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: projectData.title
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function(value) {
                    // if (value >= 10000) {
                    //     return (value / 10000).toLocaleString();
                    // } else {
                    //     return value.toLocaleString();
                    // }
                    return value + '个';
                },
            },
            data: projectData.data
        }],
        series: [{
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,  
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: baseColor
                    }, {
                        offset: 1,
                        color: linstColor
                    }]),
                },
            },
            data: projectData.data
            },
            // {
            //     name: '背景',
            //     type: 'bar',
            //     barWidth: 20,
            //     barGap: '-100%',
            //     data: projectData.data,
            //     itemStyle: {
            //         normal: {
            //             color: 'rgba(24,31,68,1)',
            //             barBorderRadius: 30,
            //         }
            //     },
            // },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    projectToal.setOption(option);
    //#endregion

    //#region 项目类型
    var projectType = echarts.init(document.getElementById('projectType'));

    let angle = 0; //角度，用来做简单的动画效果的
    let value = 80;
    var timerId;
    var projectTypeOption = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '10%',
            containLabel: true
        },
        title: {
            text: '{a|' + value + '}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 18,
                        color: '#29EEF3'
                    },
   
                    c: {
                        fontSize: 14,
                        color: '#ffffff',
                        // padding: [5,0]
                    }
                }
            }
        },
   
        series: [
            // 紫色
            {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7,
                            startAngle: (0 + angle) * Math.PI / 180,
                            endAngle: (90 + angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#8383FA",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5", //紫点
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7;
                    let point = getCirlPoint(x0, y0, r, (90 + angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#8450F9", //绿
                            fill: "#8450F9"
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            // 蓝色
   
            {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7,
                            startAngle: (180 + angle) * Math.PI / 180,
                            endAngle: (270 + angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#4386FA",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            {
                name: "ring5", // 蓝色
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.7;
                    let point = getCirlPoint(x0, y0, r, (180 + angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#4386FA", //绿
                            fill: "#4386FA"
                        },
                        silent: true
                    };
                },
                data: [0]
            },
   
            {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                            startAngle: (270 + -angle) * Math.PI / 180,
                            endAngle: (40 + -angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            },
            // 橘色
   
            {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                            startAngle: (90 + -angle) * Math.PI / 180,
                            endAngle: (220 + -angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#FF8E89",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85;
                    let point = getCirlPoint(x0, y0, r, (90 + -angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#FF8E89", //粉
                            fill: "#FF8E89"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5", //绿点
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85;
                    let point = getCirlPoint(x0, y0, r, (270 + -angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#0CD3DB", //绿
                            fill: "#0CD3DB"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, 
            {
                name: '监控模块',
                type: 'pie',
                radius: ['55%', '43%'],
                silent: true,
                clockwise: true,
                startAngle: 90,
                z: 0,
                zlevel: 0,
                
                data: [{
                        value: value,
                        name: "性能",
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}: {c}%",
                                textStyle: {
                                    fontSize: 12,
                                    color:baseColor
                                },
                                position: 'outside'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 20,
                                length2: 35
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                            offset: 0,
                                            color: '#A098FC' // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.3,
                                            color: '#4386FA' // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.6,
                                            color: '#4FADFD' // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.8,
                                            color: '#0CD3DB' // 100% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#646CF9' // 100% 处的颜色
                                        }
                                    ]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - value,
                        name: "日志",
                        label: {
                            normal: {
                                show: true,
                                formatter: "{b}: {c}%",
                                textStyle: {
                                    fontSize: 12,
                                    color:baseColor
                                },
                                position: 'outside'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 20,
                                length2: 35
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                ]
            },
            {
                name: '系统模块',
                type: 'pie',
                radius: ['33%', '35%'],
                silent: true,
                clockwise: true,
                startAngle: 270,
                z: 0,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",
   
                    }
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#00EDF3' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#646CF9' // 100% 处的颜色
                                    }]
                                },
                            }
                        }
                    },
                    {
                        value: 100 - value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                ]
            },
   
        ]
    }
    projectType.setOption(projectTypeOption);
     //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    }

    function draw() {
        angle = angle + 3
        projectType.setOption(projectTypeOption, true)
        //window.requestAnimationFrame(draw);
    }
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(function() {
        //用setInterval做动画感觉有问题
        draw()
    }, 100);
    //#endregion

    //#region  项目日志分析 1
    var projectLog = echarts.init(document.getElementById('projectlog'));
    var projectLogOption = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true,
        },
        legend: {
            data: ['问题预警', '已处理', '监控项目'],
            right: 10,
            top: 12,
            textStyle: {
            color: '#fff',
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            axisLine: {
            lineStyle: {
                color: 'white',
            },
            },
            axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
            },
            },
        },

        yAxis: {
            type: 'value',
            max: '1200',
            axisLine: {
            show: false,
            lineStyle: {
                color: 'white',
            },
            },
            splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)',
            },
            },
            axisLabel: {},
        },
        dataZoom: [
            {
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: '8%',
            start: 10,
            end: 90,
            handleIcon:
                'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: '#d3dee5',
            },
            textStyle: {
                color: '#fff',
            },
            borderColor: '#90979c',
            },
            {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35,
            },
        ],
        series: [
            {
            name: '问题预警',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                    offset: 0,
                    color: '#fccb05',
                    },
                    {
                    offset: 1,
                    color: '#f5804d',
                    },
                ]),
                barBorderRadius: 12,
                },
            },
            data: [450, 400, 300, 300, 300, 400, 400, 400, 300],
            },
            {
            name: '已处理',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                    offset: 0,
                    color: '#8bd46e',
                    },
                    {
                    offset: 1,
                    color: '#09bcb7',
                    },
                ]),
                barBorderRadius: 11,
                },
            },
            data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
            },
            {
            name: '监控项目',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                    offset: 0,
                    color: '#248ff7',
                    },
                    {
                    offset: 1,
                    color: '#6851f1',
                    },
                ]),
                barBorderRadius: 11,
                },
            },
            data: [14, 26, 45, 70, 104, 149, 189, 256, 340],
            },
        ],
    }
    projectLog.setOption(projectLogOption);
    var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;
      
        // 取消之前高亮的图形
        projectLog.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        projectLog.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        projectLog.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
      }, 1000);
    //#endregion

    //#region 项目日志分析 2
    var projectToal = echarts.init(document.getElementById('projectlogs'));
    var xData = (function () {
        var data = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        return data;
    })();
    var projectLogsOption = {
        // legend: {
        //     data: ['到店', '救援', '上门', '完单率'],
        //     left: '18%',
        //     top: 30,
        //     itemWidth: 16.7,
        //     itemHeight: 7.6,
        //     type: 'plain',
        //     textStyle: {
        //     color: 'RGBA(154, 209, 253, 1)',
        //     },
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                textStyle: {
                    color: '#fff',
                },
            },
        },
        grid: {
            borderWidth: 0,
            containLabel: true,
            top: '5%',
            bottom: '5%',
            left: '10%',
            right: '10',
            textStyle: {
                color: '#fff',
            },
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                    color: 'rgba(255,255,255,.5)',
                    },
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitArea: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 10,
                },
                data: xData,
            },
        ],
        yAxis: [
            {
            name: '总工时',
            nameTextStyle: {
                color: '#FDFDFD',
                padding: [0, 0, 0, -50],
            },
            nameGap: 15,
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                type: 'dashed',
                color: 'RGBA(3, 75, 97, 1)',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 10,
            },
            splitArea: {
                show: false,
            },
            },
            {
            name: '完成率',
            nameTextStyle: {
                color: '#FDFDFD',
                padding: [0, 0, 0, 35],
            },
            type: 'value',
            splitLine: {
                show: false,
            },
            min: 0,
            axisLabel: {
                interval: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 10,
                formatter: '{value}%',
            },
            },
        ],
        series: [
            {
            name: 'OA',
            type: 'bar',
            stack: '1',
            barMaxWidth: 15,
            barGap: '10%',
            itemStyle: {
                normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                    {
                        offset: 0,
                        color: '#2764CA', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#6D9EEE', // 100% 处的颜色
                    },
                    ],
                    global: false, // 缺省为 false
                },
                opacity: 1,
                },
            },
            data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
            },

            {
            name: '数据报表',
            type: 'bar',
            stack: '1',
            itemStyle: {
                normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                    {
                        offset: 0,
                        color: '#FF8B77', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#FE6AAC', // 100% 处的颜色
                    },
                    ],
                    global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
                },
            },
            data: [1160, 1541, 458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
            },
            {
            name: '应用系统',
            type: 'bar',
            stack: '1',
            barMaxWidth: 15,
            barGap: '10%',
            itemStyle: {
                normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                    {
                        offset: 0,
                        color: '#FFC130', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#FFDB68', // 100% 处的颜色
                    },
                    ],
                    global: false, // 缺省为 false
                },
                opacity: 1,
                },
            },
            data: [1160, 1541, 1458, 1445, 1447, 1586, 1641, 854, 1747, 1887],
            },
            {
            name: '完成率',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 0,
            symbol: 'emptyCircle',
            itemStyle: {
                normal: {
                color: '#FFC130',
                barBorderRadius: '100%',
                },
                borderWidth: 0,
            },
            smooth: true,
            lineStyle: {
                normal: {
                width: 3,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                    {
                        offset: 0,
                        color: '#FF8B77', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#FE6AAC', // 100% 处的颜色
                    },
                    ],
                    global: false, // 缺省为 false
                },
                },
            },
            data: [58, 40, 67, 63, 58, 5, 0],
            },
        ],
    }
    projectToal.setOption(projectLogsOption);
    //#endregion

    //#region 项目人力分析
    var projectPop = echarts.init(document.getElementById('projectPop'));
    var scale = 0.5;
    var echartDataPop = [{
        value: 2154,
        name: '普通报错'
    }, {
        value: 3854,
        name: '页面性能不佳'
    }, {
        value: 3515,
        name: '请求接口'
    }, {
        value: 3115,
        name: '生成日志'
    }, {
        value: 38,
        name: '接口报错'
    }, {
        value: 2154,
        name: '一般故障'
    }]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 30 * scale,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14 * scale,
            padding: [5, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    }
    var projectPopOption = {
        backgroundColor: 'transparent',
        grid: {
            top: '5%',
            bottom: '0%',
            left: '10%',
            right: '10',
            textStyle: {
                color: '#fff',
            },
        },
        title: {
            text:'监控汇总',
            left:'center',
            top:'5%',
            padding:[5,0],
            textStyle:{
                color:'#fff',
                fontSize:18*scale,
                align:'center'
            }
        },
        legend: {
            selectedMode:false,
            formatter: function(name) {
                var total = 0; //各科正确率总和
                var averagePercent; //综合正确率
                echartDataPop.forEach(function(value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}';
            },
            data: [echartDataPop[0].name],
            // data: ['高等教育学'],
            // itemGap: 50,
            left: 'center',
            bottom: '5%',
            icon: 'none',
            align:'center',
            textStyle: {
                color: "#fff",
                fontSize: 16 * scale,
                rich: rich
            },
        },
        series: [{
            name: '错误总数量',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartDataPop.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: '#0b5263'
                    }
                }
            },
            data: echartDataPop
        }]
    }
    projectPop.setOption(projectPopOption);
    //#endregion

    //#region  主屏幕地图
    var points = [
    {value: [118.8062, 31.9208],itemStyle:{color:'#4ab2e5'}}
    , {value: [127.9688, 45.368],itemStyle:{color:'#4fb6d2'}}
    , {value: [110.3467, 41.4899],itemStyle:{color:'#52b9c7'}}
    , {value: [125.8154, 44.2584],itemStyle:{color:'#5abead'}}
    , {value: [116.4551, 40.2539],itemStyle:{color:'#f34e2b'}}
    , {value: [123.1238, 42.1216],itemStyle:{color:'#f56321'}}
    , {value: [114.4995, 38.1006],itemStyle:{color:'#f56f1c'}}
    , {value: [117.4219, 39.4189],itemStyle:{color:'#f58414'}}
    , {value: [112.3352, 37.9413],itemStyle:{color:'#f58f0e'}}
    , {value: [109.1162, 34.2004],itemStyle:{color:'#f5a305'}}
    , {value: [103.5901, 36.3043],itemStyle:{color:'#e7ab0b'}}
    , {value: [106.3586, 38.1775],itemStyle:{color:'#dfae10'}}
    , {value: [101.4038, 36.8207],itemStyle:{color:'#d5b314'}}
    , {value: [103.9526, 30.7617],itemStyle:{color:'#c1bb1f'}}
    , {value: [108.384366, 30.439702],itemStyle:{color:'#b9be23'}}
    , {value: [113.0823, 28.2568],itemStyle:{color:'#a6c62c'}}
    , {value: [102.9199, 25.46639],itemStyle:{color:'#96cc34'}}
    , {value: [113.6096, 22.1265]}
    ];

    var projectMap = echarts.init(document.getElementById('projectMap'));
    echarts.registerMap('china', window.mapMock);

    var projectMapOption = {
        geo: {
          map: 'china',
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              shadowColor:'rgb(58,115,192)',
              shadowOffsetX: 10,
              shadowOffsetY: 11
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                    opacity: 0,
                    label: {
                        show: false,
                        color: "#009cc9",
                    }
                }
            },


        }],
        },
        series: [ {
            type: 'map',
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#1DE9B6'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(183,185,14)'
                    }
                }
            },

            itemStyle: {
              normal: {
               borderColor: 'rgb(147, 235, 248)',
                borderWidth: 1,
                areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              },
              emphasis: {
                    areaColor: 'rgb(46,229,206)',
                //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 0.1
                }
            },
            zoom: 1.1,
       //     roam: false,
            map: 'china' //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#1DE9B6'/* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 12,
                data: points
            }, //地图线的动画效果
          {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 7, //图标大小
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6'
                        /* function (value){ //随机颜色
                        
                        ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                        '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                        '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                        '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                        '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                        '#52b9c7','#4fb6d2','#4ab2e5']
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        width: 1, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [
                    {coords: [[118.8062, 31.9208],[113.6096, 22.1265]],lineStyle:{color:'#4ab2e5'}}
                  , {coords: [[127.9688, 45.368],[113.6096, 22.1265]],lineStyle:{color:'#4fb6d2'}}
                  , {coords: [[110.3467, 41.4899],[113.6096, 22.1265]],lineStyle:{color:'#52b9c7'}}
                  , {coords: [[125.8154, 44.2584],[113.6096, 22.1265]],lineStyle:{color:'#5abead'}}
                  , {coords: [[116.4551, 40.2539],[113.6096, 22.1265]],lineStyle:{color:'#f34e2b'}}
                  , {coords: [[123.1238, 42.1216],[113.6096, 22.1265]],lineStyle:{color:'#f56321'}}
                  , {coords: [[114.4995, 38.1006],[113.6096, 22.1265]],lineStyle:{color:'#f56f1c'}}
                  , {coords: [[117.4219, 39.4189],[113.6096, 22.1265]],lineStyle:{color:'#f58414'}}
                  , {coords: [[112.3352, 37.9413],[113.6096, 22.1265]],lineStyle:{color:'#f58f0e'}}
                  , {coords: [[109.1162, 34.2004],[113.6096, 22.1265]],lineStyle:{color:'#f5a305'}}
                  , {coords: [[103.5901, 36.3043],[113.6096, 22.1265]],lineStyle:{color:'#e7ab0b'}}
                  , {coords: [[106.3586, 38.1775],[113.6096, 22.1265]],lineStyle:{color:'#dfae10'}}
                  , {coords: [[101.4038, 36.8207],[113.6096, 22.1265]],lineStyle:{color:'#d5b314'}}
                  , {coords: [[103.9526, 30.7617],[113.6096, 22.1265]],lineStyle:{color:'#c1bb1f'}}
                  , {coords: [[108.384366, 30.439702],[113.6096, 22.1265]],lineStyle:{color:'#b9be23'}}
                  , {coords: [[113.0823, 28.2568],[113.6096, 22.1265]],lineStyle:{color:'#a6c62c'}}
                  , {coords: [[102.9199, 25.46639],[113.6096, 22.1265]],lineStyle:{color:'#96cc34'}}
                ]
            }

        ]
    }
    projectMap.setOption(projectMapOption);
    //#endregion

    //#region 显示时间
    //得到时间并写入div
    function getDate(){
        //获取当前时间
        var date = new Date();
        //格式化为本地时间格式
        var times = date.toLocaleTimeString();
        var dates = date.toLocaleDateString();
        var weeks = date.getDay();
        var weeksList = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
        document.getElementById("times").innerHTML = times;
        document.getElementById('dates').innerHTML = dates;
        document.getElementById('weeks').innerHTML = weeksList[weeks];
        
    }
    //使用定时器每秒向div写入当前时间
    setInterval(getDate,1000);
    //#endregion
})