import re
import sys

filename = sys.argv[1] if len(sys.argv) > 1 else 'docs/coding/Python/Python_Note.md'

with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = re.sub(r'~~~', '```', content)

with open(filename, 'w', encoding='utf-8') as f:
    f.write(new_content)
