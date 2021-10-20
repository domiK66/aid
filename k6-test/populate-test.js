import http from 'k6/http';

import { sleep } from 'k6';


export default function () {
  
  var url = "http://20.103.17.59/guestbook.php?cmd=set&value=,chef,2";
    for (let i = 0; i < 1000; i++) { 
      let params = http.get("http://20.103.17.59/guestbook.php?cmd=get")
      url += params + "," + i.toString()
      http.get(url);
      sleep(1);
    }
}