<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require __DIR__ . '/vendor/autoload.php';

if (isset($_GET['cmd']) === true) {
  $host = 'redis-leader';
  if (getenv('GET_HOSTS_FROM') == 'env') {
    $host = getenv('REDIS_LEADER_SERVICE_HOST');
  }
  header('Content-Type: application/json');
  if ($_GET['cmd'] == 'set') {
    $client = new Predis\Client([
      'scheme' => 'tcp',
      'host'   => $host,
      'port'   => 6379,
    ]);

    $client->set('guestbook', $_GET['value']);
    print('{"message": "Updated"}');
  } else {
    $host = 'redis-follower';
    if (getenv('GET_HOSTS_FROM') == 'env') {
      $host = getenv('REDIS_FOLLOWER_SERVICE_HOST');
    }
    $client = new Predis\Client([
      'scheme' => 'tcp',
      'host'   => $host,
      'port'   => 6379,
    ]);

    $value = $client->get('guestbook');
    print('{"data": "' . $value . '"}');
  }
} else {
  phpinfo();
} 
?>