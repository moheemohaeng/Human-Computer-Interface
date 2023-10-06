from bs4 import BeautifulSoup
import pip._vendor.requests as requests

d = open("fifififile.txt","r",encoding='UTF-8')
f = open("country3.txt","w",encoding='UTF-8')
i=1
for url in d.readlines():
    r = requests.get(url.strip('\n'))
    soup = BeautifulSoup(r.text, "lxml")
    try:
        div = soup.find("div","by")
        div = div.find("strong")
        div = div.next_sibling.next_sibling.next_sibling.next_sibling
        f.write(str(div.get_text().lstrip().rstrip())+'\n')
    except:
        div = soup.find("div","box-breadcrumb").find("div","box-left")
        div = div.find("strong").next_sibling.next_sibling
        f.write(str(div.get_text().lstrip().rstrip())+'\n')
    print(i)
    i+=1
f.close()
d.close()
print("done")
#9949까지임.