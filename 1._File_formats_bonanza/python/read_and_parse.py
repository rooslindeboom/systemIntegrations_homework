# Written: Roos Lindeboom 30 aug 2022

import json

# --- TXT ---
# Read file text
print("-- TXT --\n")
with open('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.txt') as f:
    contents = f.read()
    print(contents)


# --- XML ---
print("\n-- XML --\n")

# Read file XML
from xml.dom import minidom

# parse an xml file by name
file = minidom.parse('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.xml')

#use getElementsByTagName() to get tag
article = file.getElementsByTagName('article')


for elem in article:
  print(elem.firstChild.data)


# --- JSON ---
print("\n-- JSON --\n")
# Opening JSON file
f = open('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/python/Article_files/Article.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
  
# Iterating through the json
# list
print(data['article'])
  
# Closing file
f.close()