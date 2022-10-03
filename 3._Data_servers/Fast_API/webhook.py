import requests
import json
import datetime

webhook_url = "http://localhost:8000/webhook"

data = {
    "description": "This is some data that comes from the webhook",
    "timestamp": datetime.datetime.now().isoformat()
}
# http://f729-94-18-243-162.ngrok.io/webhook
response = requests.post(   webhook_url, 
                            json=json.dumps(data), 
                            headers={"Content-Type": "application/json"}
)

print(response.content)