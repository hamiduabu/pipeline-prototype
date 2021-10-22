google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dataSector = google.visualization.arrayToDataTable([
    ['Task', 'Hours Sector Summary'],
    ['Manufacturing', 4],
    ['Education', 3],
    ['Housing', 2],
    ['Agriculture/Agro-Allied', 12],
    ['Health/Pharmaceuticals', 5],
    ['Power', 3],
    ['Oil and Gas', 1],
    ['Tourism', 3],
  ]);

  var dataStatus = google.visualization.arrayToDataTable([
    ['Task', 'Pipeline Status Summary'],
    ['Under review', 8],
    ['Awaiting Investor', 2],
    ['Awaiting KADGIS Allocation', 12],
    ['Offer Granted', 2],
  ]);

  var optionSector = {
    title: 'Sector Summary',
  };

  var optionStatus = {
    title: 'Status Summary',
  };

  var chartSector = new google.visualization.PieChart(
    document.getElementById('piechartsector')
  );

  chartSector.draw(dataSector, optionSector);

  var chartStatus = new google.visualization.PieChart(
    document.getElementById('piechartstatus')
  );

  chartStatus.draw(dataStatus, optionStatus);
}
