import datetime
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
    

@app.get("/timestamp")
async def root():
    return {"message": datetime.datetime.now().isoformat()}
        