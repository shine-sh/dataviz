// var dataSourceUrl = "https://api.le-systeme-solaire.net/rest/bodies";
// var fileDataSourceUrl = "bodies.json";

// async function getData(url) {
//     var response = await fetch(url);
//     var data = await response.json();
//     return data;
// }

// getData(dataSourceUrl).then(function (data) {
//     var bodies = data.bodies;

//     var bodiesWithMoons = bodies.filter (function(body) {
//         return body.moons
//     });

//     var BodiesSortedByMoonCount = bodiesWithMoons.sort(function(a, b) {
//         return a.moons.lenght > b.moons.length ? 1 : -1
//     });

//     var bodyNames = bodiesWithMoons.map(function (body) {
//         return body.englishName;
//     });
//     var moonCounts = bodiesWithMoons.map(function (body) {
//         return body.moons.length;
//     });

//     var ctx = document.getElementById('chart-1').getContext('2d');
//     var myChart = new Chart (ctx, {
//         type: "line",
//         data: {
//             labels: bodyNames,
//             datasets: [
//                 {
//                     label: "# of Moons",
//                     data: moonCounts,
//                     borderWidth: 3,
//                     bordercolor: "#ff00ff",
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     min: 0,
//                     max: 100,
//                 },
//             },
//         },
//     });       
// });
var bodies = [
    {
      name: "Instagram",
      width: 20,
      color: "#FFAEA5",
    },
    {
      name: "TikTok",
      width: 15,
      color: "#D4F0F0",
    },
    {
      name: "Youtube",
      width: 12,
      color: "#FFFFB5",
    },
    {
      name: "Vkontakte",
      width: 10,
      color: "#CCE2CB",
    },
    {
      name: "Facebook",
      width: 6,
      color: "#ECD5E3",
    },
  ];
  
  bodies.forEach(function (buddy) {
    var container = document.querySelector(".container");
    var buddyElement = document.createElement("div");
    buddyElement.innerText = buddy.name;
    buddyElement.style.backgroundColor = buddy.color;
    buddyElement.style.width = buddy.width * 50 + "px";
    buddyElement.classList.add("buddy");
    container.appendChild(buddyElement);
  });