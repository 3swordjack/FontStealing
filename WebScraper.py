from urllib.request import urlopen as uReq
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
headers={
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}


req = Request('https://www.wireshark.org/#download', data=None, headers=headers)
uClient = uReq(req)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, "html.parser")
page_soup.div
containers = page_soup.findAll("div",{"class":"fontFamily_stylesList_row"})
