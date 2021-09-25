import { createApp } from 'vue';
import App from './App.vue';

import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

createApp(App).mount('#app')

/*   fetch('https://belferat.online/test.php', {
    method: 'POST',

    mode: 'no-cors',
  })
  .then((res) => {
    console.log(res.status);
  }) */

async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    /* mode: 'no-cors', */
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data,
  });
  return await response.json();
}

postData('https://belferat.online/test.php', {act: 'get_menu'})
  .then((data) => {
    console.log(data);
  });


  /* async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  postData('https://belferat.online/test.php/get_menu', {act: 'get_menu'})
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    }); */
