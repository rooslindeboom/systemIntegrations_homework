import datetime
import http
import re
from fastapi import FastAPI, Request, Response


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
    

@app.get("/timestamp")
async def root():
    return {"message": datetime.datetime.now().isoformat()}


@app.get("/webhook")
async def webhook(request: Request):
    # body = await request.json()
    # print(body)
    return {"message": "OK"}
        