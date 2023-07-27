(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart .content2"));
  var option = {
    color: ["#2f89cf"],
    title: {
      text: "异常情况",
      textStyle: {
        color: "white",
        fontWeight: "lighter",
        fontSize: 16,
      },
      textAlign: "auto",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "20%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["通讯\n异常", "电源\n异常", "端口\n异常", "端口\n异常"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "rgba(255,255,255,0.6)",
          fontSize: "12",
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,0.6)",
          fontSize: "12",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
            width: 2,
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "35%",
        data: [18, 14, 9, 15],
        itemStyle: {
          barBorderRadius: 3,
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var data = [
    { type: "CPU", data: [21, 37, 43, 65, 71] },
    { type: "MEMORY", data: [53, 27, 73, 35, 11] },
    { type: "DESKTOP", data: [41, 57, 93, 45, 61] },
  ];
  var option = {
    grid: {
      left: "22%",
      top: "0%",
      bottom: "10%",
      //containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        data: [
          "192.168.1.20",
          "192.168.1.21",
          "192.168.1.22",
          "192.168.1.23",
          "192.168.1.24",
        ],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
        },
      },
      {
        show: true,
        data: [364, 593, 610, 843, 984],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [21, 37, 43, 65, 71],
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            return myColor[params.dataIndex];
          },
        },
        barCategoryGap: 50,
        barWidth: 10,
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%",
        },
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  $(".bar2 div").on("click", "button", function () {
    option.series[0].data = data[$(this).index()].data;
    myChart.setOption(option);
  });
})();
//折线图1
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    color: ["#00f2f1"],

    legend: {
      data: ["Email"],
      textStyle: {
        color: "#4c9bfd",
      },
      right: "10%",
      show: false,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "20%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["8.29", "8.30", "9.1", "9.2", "93.", "9.4", "9.5"],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    series: [
      {
        name: "monitoring",
        type: "line",
        stack: "Total",
        symbolSize: 8,
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true,
        itemStyle: {
          normal: {
            label: {
              show: true,
            },
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//饼图1
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart .content1"));
  var option = {
    color: ["#45C2E0", "#C1EBDD", "#FFC851"],

    title: {
      text: "设备数量",
      textStyle: {
        color: "white",
        fontWeight: "lighter",
        fontSize: 16,
      },
    },
    graphic: [
      {
        type: "text",
        left: "center", // Center the text horizontally
        top: "40%", // Center the text vertically
        style: {
          text: "34",
          textAlign: "center",
          textVerticalAlign: "top",
          fontSize: 24,
          fontWeight: "bold",
          fill: "white",
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0px",
      left: "center",
      selectedMode: false,
      textStyle: {
        color: "#cfeaff",
        fontSize: 14,
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "50%"],
        center: ["50%", "46%"],
        // adjust the start angle
        labelLine: {
          normal: {
            length: 5,
            lineStyle: {
              color: "gray",
            },
          },
        },
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.percent.toFixed(1) + "%";
          },
        },
        data: [
          {
            value: 1048,
            name: "交换机",
          },
          { value: 335, name: "VPN" },
          { value: 580, name: "堡垒机" },
        ],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//带填充折线图
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    grid: {
      left: "10",
      right: "10",
      bottom: "10",
      top: "30",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["8.29", "8.30", "8.31", "9.1", "9.2", "9.3", "9.4"],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "网络流量走势",
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#0184d5",
          width: "3",
        },
        label: {
          show: true,
          textStyle: {
            color: "lightblue",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.8)",
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .2)",
          borderWidth: 10,
        },
        // 开始不显示拐点， 鼠标经过显示
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//饼型图2
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart .right-part"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    legend: {
      type: "scroll",
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,0.5)",
        fontSize: "12",
      },
    },
    tooltip: {},
    series: [
      {
        name: "设备安全",
        type: "pie",
        radius: [10, 50],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
          fontSize: 10,
          formatter(param) {
            // correct the percentage
            return param.percent.toFixed(1) + "%";
          },
        },
        labelLine: {
          length: 5,
          length2: 5,
        },
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 30, name: "信息危害1" },
          { value: 28, name: "信息危害2" },
          { value: 26, name: "信息危害3" },
          { value: 24, name: "信息危害4" },
          { value: 22, name: "信息危害5" },
          { value: 20, name: "信息危害6" },
          { value: 18, name: "信息危害7" },
          { value: 16, name: "信息危害8" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(function createTable() {
  // Get the chart container element
  var chartContainer = document.querySelector(".list .chart");
  var container = document.createElement("div");
  var container2 = document.createElement("div");
  var headerTable = document.createElement("table");
  var dataTable = document.createElement("table");
  container2.classList.add("scroll-container");
  headerTable.classList.add("header-table");
  dataTable.classList.add("data-table");

  // Create the table element

  // Create the header row
  var headerRow = document.createElement("tr");
  var headerData = [
    "序号",
    "名称",
    "知识产权",
    "类型",
    "来源",
    "发生次数",
    "等级",
  ];
  headerData.forEach((header) => {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  // Append the header row to the table
  headerTable.appendChild(headerRow);
  container.appendChild(headerTable);

  // Create the table rows with data
  var rowData1 = ["1", "处理器", "10", "运营", "采集", "5", "高危"];
  var rowData2 = ["2", "处理器", "10", "运营", "采集", "5", "中危"];
  var rowData3 = ["3", "处理器", "10", "运营", "采集", "5", "低危"];
  var rowData4 = ["4", "处理器", "10", "运营", "采集", "5", "低危"];
  var rowData5 = ["5", "处理器", "10", "运营", "采集", "5", "低危"];
  var rowData6 = ["6", "处理器", "10", "运营", "采集", "5", "高危"];
  var rowData7 = ["7", "处理器", "10", "运营", "采集", "5", "中危"];
  var rowData8 = ["8", "处理器", "10", "运营", "采集", "5", "低危"];
  var rowData9 = ["9", "处理器", "10", "运营", "采集", "5", "低危"];
  var rowData10 = ["10", "处理器", "10", "运营", "采集", "5", "低危"];
  var rows = [
    rowData1,
    rowData2,
    rowData3,
    rowData4,
    rowData5,
    rowData6,
    rowData7,
    rowData8,
    rowData9,
    rowData10,
  ];

  rows.forEach((rowData) => {
    var row = document.createElement("tr");
    rowData.forEach((cellData, index) => {
      var cell = document.createElement("td");
      if (index === 6) {
        var label = document.createElement("span");
        label.textContent = cellData;
        if (cellData === "高危") {
          label.classList.add("red-highlighted");
        } else if (cellData === "中危") {
          label.classList.add("yellow-highlighted");
        } else {
          label.classList.add("blue-highlighted");
        }

        cell.appendChild(label);
      } else {
        cell.textContent = cellData;
      }
      row.appendChild(cell);
    });
    dataTable.appendChild(row);
  });
  container2.appendChild(dataTable);
  container.appendChild(container2);
  chartContainer.appendChild(container);

  var scrollAmount = 1; // Adjust the scrolling speed as per your requirement
  var scrollInterval = 50; // Adjust the interval (in milliseconds) as per your requirement
  var currentScrollPosition = 0;
  function autoScrollTable() {
    currentScrollPosition += scrollAmount;
    if (
      currentScrollPosition >=
      dataTable.offsetHeight - container2.clientHeight
    ) {
      currentScrollPosition = 0;
    }
    container2.scrollTop = currentScrollPosition;
  }
  setInterval(autoScrollTable, scrollInterval);
})();
