import { spawnSync } from 'node:child_process';
import { readdir, readFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import hljs from 'highlight.js';
const tool = path.resolve('.tools/bin/chloroplast');
if (!existsSync(tool)) throw Error('Run npm run bootstrap to install the pinned Chloroplast source build.');
await rm('out', {recursive:true, force:true});
const args=['build', ...process.argv.slice(2)];
const result=spawnSync(tool,args,{stdio:'inherit'});
if (result.status !== 0) process.exit(result.status || 1);
const decode = s => s.replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
async function walk(dir) { const result=[]; for(const e of await readdir(dir,{withFileTypes:true})) { const f=path.join(dir,e.name); if(e.isDirectory()) result.push(...await walk(f)); else if(f.endsWith('.html')) result.push(f); } return result; }
const index=[];
for(const file of await walk('out')) {
 let html=await readFile(file,'utf8');
 html=html.replace(/<code class="language-([\w-]+)">([\s\S]*?)<\/code>/g,(match,lang,body)=>hljs.getLanguage(lang)?`<code class="hljs language-${lang}">${hljs.highlight(decode(body),{language:lang}).value}</code>`:match);
 await writeFile(file,html);
 const article=html.match(/<article[\s\S]*?<\/article>/)?.[0] || '';
 const title=decode(html.match(/<h1>(.*?)<\/h1>/)?.[1] || 'Documentation');
 index.push({title,path:path.relative('out',file).replace(/index\.html$/,''),text:decode(article.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim()});
}
await writeFile('out/search-index.json',JSON.stringify(index));
await writeFile('out/.nojekyll','');
console.log(`Indexed ${index.length} pages; syntax highlighting completed locally.`);
