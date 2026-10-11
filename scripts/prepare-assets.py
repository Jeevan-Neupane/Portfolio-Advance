"""Prepare local, optimized portfolio assets from existing portfolio images."""
from pathlib import Path
import math
import shutil
import urllib.request
from PIL import Image

root = Path(__file__).resolve().parents[1]
out = root / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)
for name, url in [
    ('jeevan', 'https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1730944042/vp9z8mt1oushfsszpdvg.jpg'),
    ('viton', 'https://res.cloudinary.com/de1yfnzdz/image/upload/v1733358950/web%20projects/or882vwfzuiodutmglcn.png'),
]:
    with urllib.request.urlopen(url) as response:
        image = Image.open(response).convert('RGB')
        image.thumbnail((1400, 1400))
        image.save(out / f'{name}.webp', 'WEBP', quality=88)
        print(name, image.size)
shutil.copyfile(root.parent / 'Jeevan_Neupane_Updated_CV.pdf', root / 'public' / 'Jeevan-Neupane-CV.pdf')

def svg(name, background, content):
    grid = ''.join(f'<path d="M{x} 0V600M0 {x}H900"/>' for x in range(0, 901, 50))
    (out / f'{name}.svg').write_text(f'''<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><defs><radialGradient id="bg"><stop stop-color="{background}"/><stop offset="1" stop-color="#152320"/></radialGradient><linearGradient id="line"><stop stop-color="#f0c697"/><stop offset="1" stop-color="#80b9a4"/></linearGradient></defs><rect width="900" height="600" fill="url(#bg)"/><g stroke="#b7d2bb" opacity=".045">{grid}</g>{content}</svg>''', encoding='utf-8')

bars = ''.join(f'<rect x="{150+i*9}" y="{292-(h:=18+math.sin(i*.62)**2*96)/2}" width="4" height="{h}" rx="2" fill="#d7b687"/>' for i in range(37))
svg('shruti', '#435443', f'''<circle cx="320" cy="290" r="180" fill="none" stroke="#a8b997" opacity=".2"/><circle cx="320" cy="290" r="150" fill="none" stroke="#a8b997" opacity=".15"/><text x="152" y="192" font-family="Arial" font-size="40" fill="#e4e7d4">shruti<tspan fill="#e8b480">.</tspan></text>{bars}<text x="155" y="397" font-family="Arial" font-size="11" letter-spacing="3" fill="#c0cbb3">CONVERSATION → CLARITY</text><g transform="translate(530 150) rotate(7)"><rect width="240" height="320" rx="12" fill="#d8decd"/><circle cx="30" cy="35" r="9" fill="#64816b"/><text x="49" y="40" font-family="Arial" font-size="13" fill="#344c3b">Clinical note</text><path d="M25 64H212" stroke="#aab7a4"/><text x="26" y="100" font-family="Arial" font-size="10" letter-spacing="1.2" fill="#4a6450">CONVERSATION SUMMARY</text><g stroke="#a4b29a" stroke-width="5" stroke-linecap="round"><path d="M28 123H200M28 140H188M28 157H159M28 210H200M28 227H180M28 244H193"/></g><text x="26" y="192" font-family="Arial" font-size="10" letter-spacing="1.2" fill="#4a6450">STRUCTURED DOCUMENTATION</text><rect x="25" y="275" width="113" height="23" rx="11" fill="#b2c2a5"/><text x="37" y="291" font-size="9" font-family="Arial" fill="#3a503f">NEPALI + ENGLISH</text></g>''')

rings = ''
for i in range(34):
    y=125+i*10
    radius=24+42*math.exp(-((i-3)/4)**2)+40*math.exp(-((i-29)/4)**2)
    x=535+17*math.sin(i*.15)
    rings += f'<ellipse cx="{x}" cy="{y}" rx="{radius}" ry="14" fill="none" stroke="#add7cd" opacity=".6"/>'
svg('xray', '#24434a', f'''<g transform="translate(115 147) rotate(-9)"><rect width="245" height="300" rx="7" fill="#11252b" stroke="#6c999b"/><path d="M90 50C40 30 50 100 98 109L106 206C60 248 75 281 113 261C141 284 181 250 143 214L139 101C183 55 139 22 119 58Z" fill="#a4c0bd" opacity=".22"/><path d="M98 70L123 234" stroke="#b5d8d1" stroke-width="10" opacity=".15"/><text x="20" y="278" fill="#8eb4b4" font-size="10" font-family="monospace">PROJECTION / 2D</text></g><g stroke="#94ccc2" opacity=".2" stroke-dasharray="4 7"><path d="M350 190L515 120M350 440L515 466M350 300H485"/></g>{rings}<path d="M662 145V465M650 145H674M650 465H674" stroke="#b1d6ca" opacity=".5"/><text x="690" y="298" font-family="monospace" font-size="12" fill="#bed5c8">3D</text><text x="470" y="510" font-family="monospace" font-size="10" letter-spacing="2" fill="#b8d2c9">RECONSTRUCTING ANATOMY</text>''')

svg('locus', '#614737', '''<g transform="translate(168 100) rotate(-9 140 190)"><rect width="290" height="375" rx="13" fill="#e6c296"/><rect y="0" width="290" height="90" rx="13" fill="#26372b"/><text x="28" y="56" font-family="Arial" font-size="35" font-weight="bold" fill="#e8c799">LOCUS<tspan font-size="14"> 2026</tspan></text><text x="28" y="133" font-family="monospace" font-size="11" letter-spacing="2" fill="#5e4d37">A PLACE FOR BUILDERS.</text><text x="28" y="190" font-family="Arial" font-size="31" fill="#27392d">See you at</text><text x="28" y="229" font-family="Arial" font-size="31" fill="#27392d">the festival.</text><path d="M0 280H290" stroke="#8c7355" stroke-dasharray="6 6"/><text x="28" y="320" font-family="monospace" font-size="12" fill="#534d36">PARTICIPANT PASS</text><g stroke="#3b4b35" stroke-width="3"><path d="M29 337v18m7-18v18m9-18v18m5-18v18m11-18v18m6-18v18m5-18v18m10-18v18m8-18v18m5-18v18m11-18v18m7-18v18m8-18v18m5-18v18m9-18v18"/></g></g><g transform="translate(482 192) rotate(6)"><rect width="265" height="250" rx="12" fill="#21312a" stroke="#5c6c53"/><circle cx="30" cy="33" r="4" fill="#bdd198"/><text x="45" y="37" fill="#d5dec8" font-family="Arial" font-size="12" letter-spacing="1">LIVE LEADERBOARD</text><g fill="#2c4134"><rect x="20" y="65" width="225" height="43" rx="5"/><rect x="20" y="119" width="225" height="43" rx="5"/><rect x="20" y="173" width="225" height="43" rx="5"/></g><g fill="#dbbc8e" font-family="monospace" font-size="15"><text x="35" y="93">01</text><text x="35" y="147">02</text><text x="35" y="201">03</text></g><g stroke="#90a380" stroke-width="5" stroke-linecap="round"><path d="M82 88H175M82 143H199M82 197H156"/></g></g>''')

poses = ''
for i in range(4):
    x=120+i*180
    poses+=f'''<g transform="translate({x} 190)" stroke="{'#e4b782' if i==2 else '#91b6b5'}" stroke-width="3" fill="none" opacity="{.45 if i in (0,3) else 1}"><rect x="-45" y="-40" width="140" height="285" rx="5" stroke-dasharray="5 6" opacity=".4"/><circle cx="25" cy="0" r="17"/><path d="M25 18L{18+i*6} 95L-10 163L-20 216M{18+i*6} 95L65 153L78 208M25 35L{-15+i*6} 65L{-35+i*9} {20+i*16}M25 35L{65-i*4} 65L{88-i*7} {90-i*23}"/><g fill="{'#e4b782' if i==2 else '#91b6b5'}"><circle cx="25" cy="35" r="5"/><circle cx="{18+i*6}" cy="95" r="5"/><circle cx="-10" cy="163" r="5"/><circle cx="65" cy="153" r="5"/></g></g>'''
svg('motion', '#35495b', f'''<text x="96" y="130" font-family="monospace" font-size="12" letter-spacing="3" fill="#b7c6c8">THE LANGUAGE OF MOVEMENT</text>{poses}<path d="M96 478H800" stroke="#8ba5aa" opacity=".5"/><g fill="#c2cfd0" font-family="monospace" font-size="10"><text x="96" y="505">FRAME 001</text><text x="288" y="505">FRAME 008</text><text x="476" y="505">FRAME 016</text><text x="672" y="505">FRAME 024 →</text></g>''')
print('Prepared portrait, project covers, and updated CV.')
