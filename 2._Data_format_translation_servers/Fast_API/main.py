from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/txt")
async def root():
    return {"message": "Hello txt"}   

@app.get("/xml")
async def root():
    return {"message": "Hello xml"} 

@app.get("/json")
async def root():
    return {"message": "Hello json"}          