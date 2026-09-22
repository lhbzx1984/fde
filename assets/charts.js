(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Radar Chart: FDE 六大核心技能域 ---
  var radarEl = document.getElementById('chart-radar');
  if (radarEl) {
    var radarChart = echarts.init(radarEl, null, { renderer: 'svg' });
    radarChart.setOption({
      animation: false,
      tooltip: {
        trigger: 'item',
        appendToBody: true
      },
      radar: {
        indicator: [
          { name: '工程能力（Python/TS/云/数据库/前端）', max: 100 },
          { name: 'AI 部署（提示词/RAG/Agent/结构化输出）', max: 100 },
          { name: '评估纪律（Eval/测试/监控/可观测性）', max: 100 },
          { name: '集成能力（MCP/API/遗留系统/认证）', max: 100 },
          { name: '产品判断力（做什么/砍什么/范围决策）', max: 100 },
          { name: '商业嗅觉（ROI/成本/客户思维）', max: 100 }
        ],
        radius: '65%',
        center: ['50%', '55%'],
        axisName: {
          color: ink,
          fontSize: 11,
          fontWeight: 600
        },
        splitLine: {
          lineStyle: { color: rule }
        },
        splitArea: {
          areaStyle: { color: ['transparent', 'rgba(79,70,229,0.03)'] }
        },
        axisLine: {
          lineStyle: { color: rule }
        }
      },
      series: [{
        type: 'radar',
        data: [
          {
            value: [75, 70, 60, 65, 55, 50],
            name: '入门地板线',
            areaStyle: { color: 'rgba(79,70,229,0.15)' },
            lineStyle: { color: accent, width: 2 },
            itemStyle: { color: accent }
          },
          {
            value: [90, 90, 85, 90, 80, 80],
            name: '资深 FDE 水平',
            areaStyle: { color: 'rgba(249,115,22,0.10)' },
            lineStyle: { color: accent2, width: 2, type: 'dashed' },
            itemStyle: { color: accent2 }
          }
        ]
      }],
      legend: {
        show: true,
        bottom: 10,
        data: ['入门地板线', '资深 FDE 水平'],
        textStyle: { color: muted, fontSize: 12 },
        itemWidth: 20,
        itemHeight: 10
      }
    });
    window.addEventListener('resize', function() { radarChart.resize(); });
  }
})();
