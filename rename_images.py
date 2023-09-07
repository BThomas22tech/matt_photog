import os

directory_path =  r"C:\Users\muckr\OneDrive\Documents\matt_photog\images"
filenames = os.listdir(directory_path)

for filename in filenames:
    if ' ' in filename:
        old_path = os.path.join(directory_path,filename)
        new_filename = filename.replace(" ","-").lower()
        new_path = os.path.join(directory_path, new_filename)
        
        os.rename(old_path, new_path)
        
        print(f'renamed {old_path} to {new_path}')
    else:
        print(f'Skipped {filename} (no space in name)')