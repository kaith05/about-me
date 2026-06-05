import os
from django.conf import settings
from django.shortcuts import render

def remake_gallery(request):
    # static/remake-images フォルダの絶対パスを取得
    images_dir = os.path.join(settings.BASE_DIR, 'static', 'remake-images')
    
    # 読み込む画像の種類を指定
    valid_extensions = ('.jpg', '.jpeg', '.png', '.webp')
    
    if os.path.exists(images_dir):
        # ⭕ フォルダ内のファイル名をスキャンして、自動で綺麗に並び替えます
        image_files = sorted([
            f for f in os.listdir(images_dir) 
            if f.lower().endswith(valid_extensions)
        ])
    else:
        image_files = []

    # HTML側に「images」という名前でデータのリストを引き渡す
    return render(request, 'remake.html', {'images': image_files})