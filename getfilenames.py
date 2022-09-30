import os
from os.path import isfile, join


path = './src/assets/grammar/n2'
files = os.listdir(path)

# onlyfiles = []
# for index, file in enumerate(files):
#     os.rename(os.path.join(path, file), os.path.join(path, ''.join(['0', str(index), '.jpg'])))
#     onlyfiles.append(''.join([str(index), '.jpg']))

onlyfiles = [f for f in os.listdir(path) if isfile(join(path, f))]
print(onlyfiles)
