const data = [[114, 8], [84, 17], [54, 31], [24, 17], [7, 2]];

function transformArrayOfArrays(source, ...names) {
  const defaultName = i => "field" + i;
  return source.map(a => {
    return a.reduce((r, v, i) => {
      r[i < names.length ? names[i] : defaultName(i)] = v;
      return r;
    }, {});
  });
}

$(() => {
  $("#chart").dxChart({
    dataSource: transformArrayOfArrays(data, "days", "percent"),
    rotated: true,
    series: [{
      argumentField: "days",
      valueField: "percent",
      type: "spline" }],

    title: {
      text: "Days before Christmas to start shopping",
      subtitle: {
        text: "Made-up data" } },


    legend: {
      visible: false },

    argumentAxis: {
      title: {
        text: "Days before Christmas" } },


    valueAxis: {
      title: {
        text: "Percent of People" } } });



});