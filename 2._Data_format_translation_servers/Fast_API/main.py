from fastapi import FastAPI
import json
from xml.dom import minidom

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/txt")
async def root():
    with open('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.txt') as f:
        contents = f.read()
        print(contents)
    return {"message": contents}   

@app.get("/xml")
async def root():
    file = minidom.parse('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.xml')
    article = file.getElementsByTagName('article')

    for elem in article:
        print(elem.firstChild.data)
    return {"message": elem.firstChild.data} 

@app.get("/json")
async def root():
    f = open('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.json')
    data = json.load(f)
    print(data['article'])
    f.close()
    return {"message": data['article']}          