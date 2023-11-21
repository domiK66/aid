from locust import HttpUser, task, between

default_headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'}

class WebsiteUser(HttpUser):
    wait_time = between(1, 2)
    number = 0
    @task(1)
    def get_index(self):
        self.client.get("/guestbook.php?cmd=get", headers=default_headers)

    @task(2)
    def post(self):
        self.client.post(f$"/guestbook.php?cmd=set&value=,Robert {number}", headers=default_headers)
        number = number + 1