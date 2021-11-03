import http from 'k6/http';

import { sleep } from 'k6';

export default function () {
  const BASE_URL = 'http://34.140.134.66/';
  let url = `${BASE_URL}/guestbook.php?cmd=set&value=,Dominiks,Populatetest`;
  for (let i = 0; i < 1000; i++) { 
    url += "," + i.toString()
    http.get(url);
    sleep(1);
  }
}
