'use strict';

const canvasElem = document.getElementById('chart');

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */


const appState = new AppState();
appState.loadItems();
const allProducts = appState.allProducts;

function renderChart() {
  const allProductsName = [];
  const allTimesClicked = [];
  const allTimesShown = [];
  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    allProductsName.push(product.name);
    allTimesClicked.push(product.timesClicked);
    allTimesShown.push(product.timesShown);
  }
  const data = {
    labels: allProductsName,
    datasets: [
      {
        label: 'votes',
        data: allTimesClicked,
        backgroundColor: ['#42032C'],
        borderColor: ['#D36B00'],
        borderWidth: 1,
      },
      {
        label: 'views',
        data: allTimesShown,
        backgroundColor: ['#D36B00'],
        borderColor: ['#42032C'],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: 'bar',
    data: data,
  };

  const myChart = new Chart(canvasElem, config);
}
renderChart();
