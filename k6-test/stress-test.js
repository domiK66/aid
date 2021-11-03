import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 }, // below normal load
    { duration: '1m', target: 200 }, // normal load
    { duration: '1m', target: 300 }, // around the breaking point
    { duration: '1m', target: 400 }, // beyond the breaking point
  ],
};

export default function () {
  const BASE_URL = 'http://20.101.225.96/'; 

  const responses = http.batch([
    ['GET', `${BASE_URL}/guestbook.php?cmd=get`, null]
  ]);

  sleep(1);
}
