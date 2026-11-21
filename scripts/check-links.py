"""Validate local URLs and fragment targets after the complete static build."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import sys,json
root=Path(sys.argv[1] if len(sys.argv)>1 else 'out').resolve()
base=sys.argv[2].rstrip('/') if len(sys.argv)>2 else ''
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(); self.links=[]; self.ids=set(); self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a: self.ids.add(a['id'])
  for key in ['href','src','data-day-src','data-night-src']:
   if key in a: self.links.append(a[key])
pages={f:Page(f.read_text()) for f in root.rglob('*.html')}
errors=[]
for f,page in pages.items():
 for ref in page.links:
  u=urlsplit(ref)
  if u.scheme or u.netloc or ref.startswith('data:'): continue
  url=unquote(u.path)
  if base and url.startswith(base+'/'): url=url[len(base):]
  dest=(root/url.lstrip('/') if url.startswith('/') else f.parent/url) if url else f
  dest=dest.resolve()
  if dest.is_dir(): dest/='index.html'
  if not dest.is_file(): errors.append(f'{f.relative_to(root)}: missing {ref}')
  elif u.fragment and dest in pages and unquote(u.fragment) not in pages[dest].ids: errors.append(f'{f.relative_to(root)}: missing fragment {ref}')
for item in json.loads((root/'search-index.json').read_text()):
 if not (root/item['path']/'index.html').is_file(): errors.append('Bad search path '+item['path'])
if errors:
 print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(pages)} HTML pages; internal links, fragments, theme images, search destinations, CSS and scripts.')
