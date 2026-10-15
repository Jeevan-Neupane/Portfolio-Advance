"""Prepare local, optimized portfolio assets from existing portfolio images."""
from pathlib import Path
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


def fetch(url):
    with urllib.request.urlopen(url) as response:
        return Image.open(response)

# Shruti: the note screen from A.I. Lab's "Shruti in action" video (frame 3 of 3).
frame = fetch('https://i.ytimg.com/vi/7PLQd-Bck2Y/maxres3.jpg').convert('RGB')
frame.crop((380, 128, 1100, 608)).save(out / 'shruti-emr.webp', 'WEBP', quality=88)

# X-ray to 3D: the repository's AP view, lateral view and reconstructed shape.
repo = 'https://raw.githubusercontent.com/Jeevan-Neupane/Xray3D-Reconstruction/main/'
canvas = Image.new('RGB', (900, 600))
ap = fetch(repo + 'AP_view.png').convert('RGBA').resize((262, 254), Image.LANCZOS)
lat = fetch(repo + 'LAT_view.png').convert('RGBA').resize((254, 254), Image.LANCZOS)
shape = fetch(repo + '3d_shape.png').convert('RGBA')
shape = shape.resize((540, round(540 * shape.height / shape.width)), Image.LANCZOS)
canvas.paste(ap, (40, 36), ap)
canvas.paste(lat, (44, 310), lat)
canvas.paste(shape, (335, (600 - shape.height) // 2), shape)
canvas.save(out / 'xray-results.webp', 'WEBP', quality=88)

# Human action recognition: the UCF-101 class grid embedded in the repository's
# proposal slides (slide 5), cropped to its first eight rows.
import io
import pymupdf
with urllib.request.urlopen('https://raw.githubusercontent.com/Jeevan-Neupane/Human-action-recognition/main/proposal%20presentation%20slides.pdf') as response:
    slides = pymupdf.open(stream=response.read())
xref = slides[4].get_images(full=True)[0][0]
grid = Image.open(io.BytesIO(slides.extract_image(xref)['image'])).convert('RGB')
grid.crop((0, 0, 640, 428)).save(out / 'har-ucf101.webp', 'WEBP', quality=90)

# locus-register.webp is a 1440x900 browser screenshot of
# https://register.locus.com.np/register, cropped to (270, 60, 1170, 660).
print('Prepared portrait, project images, and updated CV.')
