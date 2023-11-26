from locust import HttpUser, task, between

default_headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)
    @task(1)
    def get_index(self):
        self.client.get("/guestbook.php?cmd=get", headers=default_headers)

    @task(2)
    def post(self):
        for i in range(100):
            self.client.post("/guestbook.php?cmd=set&value=Test %i" % i, headers=default_headers, name="/guestbook.php?cmd=set&value=[value]")