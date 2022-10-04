import datetime
import http
import re
from fastapi import FastAPI, Request, Response
import requests


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
    
@app.get("/timestamp")
async def root():
    response = requests.get("https://859a-94-18-243-162.eu.ngrok.io/timestamp")
    return response.content


@app.get("/time")
async def root():
    return {"message": datetime.datetime.now().isoformat()}

        