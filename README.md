1、Do what?
     toolbox pugin alow the custom tool buttons and icons to highchart.

2、Requirements
      Plugin requires the latest Highcharts (tested with 4.0.1)

3、Installation
      Like any other Highcharts module (e.g. exporting), add <script> tag pointing to toolbox.js below Highcharts script tag.

4、Usage and demos
     It's quite simple and intuitive, just pass object as toolbox:
    //图表工具箱
                toolbox: {
                    enabled: true, //是否启用工具箱
                    buttons: [{
                        enabled: true, //是否启用
                        //text: "刷新图表",
                        title: "刷新图表数据", //按钮提示信息
                        onclick: function () {
                            this.redraw(true); //重画
                        },
                        symbol: "url(images/refresh.gif)" //设置图标
                    }, {
                        enabled: true,
                        //text: "新增数据",
                        title: "新增Series数据",
                        onclick: function () {
                            debugger
                            this.addSeries({
                                type: "column",
                                yAxis: isLeft ? 0 : yCount - 1,
                                data: [21538, 32897, 32502, 48426, 27398, 42010, 52342, 55381, 39520, 25328, 12603, 45872]
                            });
                            isLeft = !isLeft;
                        },
                        symbol: "url(images/add.gif)"
                    }, {
                        enabled: true,
                        //text: "新增Y轴",
                        title: "新增Y轴",
                        onclick: function () {
                            this.addAxis({
                                labels: {
                                    formatter: function () {
                                        return this.value + '°C';
                                    },
                                    style: {
                                        color: '#89A54E'
                                    }
                                },
                                title: {
                                    text: "新增Y轴" + yCount.toString()
                                },
                                opposite: true//坐标轴显示在右侧
                            }, false, true, true);

                            yCount++;
                        },
                        symbol: "url(images/add.gif)"
                    }, {
                        title: "下载图表",
                        onclick: function () {
                            alert("这里可以填充下载图表的代码");
                        },
                        symbol: "url(images/down.gif)"
                    }]
                }

5、Code
The latest code is available on github: https://github.com/stepday/highcharts_toolbox/

6、Demo
Demos are available at project's github page: https://github.com/stepday/highcharts_toolbox/

