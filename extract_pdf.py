# -*- coding: utf-8 -*-
import shutil
from pathlib import Path
import fitz

base = Path(r"F:\Landing page Junt Mais\Junte-Mais-main")
pdf_path = base / "Serviços Junte+ (1).pdf"

# Extract everything to a temp folder
temp = base / "assets" / "_temp"
temp.mkdir(parents=True, exist_ok=True)

doc = fitz.open(str(pdf_path))

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=200)
    pix.save(str(temp / f"pagina-{i+1}.png"))

    images = page.get_images(full=True)
    for j, img in enumerate(images):
        xref = img[0]
        base_img = doc.extract_image(xref)
        ext = base_img["ext"]
        fpath = temp / f"pagina-{i+1}-img-{j+1}.{ext}"
        with open(fpath, "wb") as f:
            f.write(base_img["image"])

    text = page.get_text("text")
    if text.strip():
        (temp / f"pagina-{i+1}.txt").write_text(text.strip(), encoding="utf-8")

doc.close()

# Clean categorized folders
for folder in ["paginas-completas", "icones-e-logos", "fotos", "mockups", "conteudo"]:
    target = base / "assets" / folder
    if target.exists():
        shutil.rmtree(target)
    target.mkdir(parents=True, exist_ok=True)

# Organize with simple rules
for f in sorted(temp.iterdir()):
    name = f.stem
    target = None
    if f.suffix == ".txt":
        target = base / "assets" / "conteudo"
    elif name.startswith("pagina-") and "-img-" not in name:
        target = base / "assets" / "paginas-completas"
    elif "-img-" in name:
        size_kb = f.stat().st_size / 1024
        if name.endswith("-img-1"):
            target = base / "assets" / "icones-e-logos"
        elif size_kb < 100:
            target = base / "assets" / "icones-e-logos"
        elif "img-1" in name:
            target = base / "assets" / "fotos"
        else:
            target = base / "assets" / "mockups"
    if target:
        shutil.copy2(f, target / f.name)

# Remove temp
shutil.rmtree(temp)

# Summary
for cat in ["paginas-completas", "icones-e-logos", "fotos", "mockups", "conteudo"]:
    folder = base / "assets" / cat
    files = sorted(folder.iterdir())
    print(f"\n=== {cat} ({len(files)}) ===")
    for f in files:
        kb = f.stat().st_size / 1024
        print(f"  {f.name} ({kb:.0f}KB)")

print("\nTudo ok!")
