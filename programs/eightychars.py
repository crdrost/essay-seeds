#!/usr/bin/python
# -*- coding: utf-8 -*-

# This is a simple little project to introduce line breaks into a document to
# make each line 79 characters long. The first point is that this script must
# therefore be able to parse documents which mix-and-match lines which are 
# shorter than, longer than, and equal to this 79-character limit, and can then
# normalize them.

import re

def paragraphs(string):
    """
    Parse a string into prefixed paragraphs. Paragraphs may have any string of
    non-word symbols specified as a common prefix. In the current version:
    
        >>> s = "> abc  \n> def\n> ghi \n> jkl\n~~~ \n> mno \n"
        >>> print(s); paragraphs(s)
        > abc  
        > def
        > ghi 
        > jkl
        ~~~ 
        > mno 

        [('> ', 'abc\ndef ghi jkl'), ('> ', 'mno ')]
    
    So the current convention does not create a new paragraph for ("~~~ ", "")
    and when it sees a line ending with two or more spaces, as in Markdown, it
    inserts a literal newline character there. 
    """
    # pull out prefixes from every line
    get_prefix_re = re.compile(r"^([^\w]*)", re.U)
    def getprefix(line): 
        prefix = get_prefix_re.match(line).group(1)
        return (prefix, line[len(prefix):])
    base = (getprefix(line) for line in string.split('\n'))
    
    # Then combine successive lines with the same prefix, except when a blank
    # line separates. 
    
    out = [None]
    current = 0
    
    for prefix, line in base:
        if line == "":
            out.append(None)
            current += 1
        elif out[current] == None:
            out[current] = [prefix, line]
        elif out[current][0] != prefix:
            out.append([prefix, line])
            current += 1
        else: 
            lastline = out[current][1]
            if lastline[-2:] == "  ":
                out[current][1] = lastline[0:-2] + "\n" + line
            elif lastline[-1] not in " -":
                out[current][1] = lastline + " " + line
            else:
                out[current][1] = lastline + line
    
    return [(item[0], item[1]) for item in out if item != None]

def get_line(string):
    """Get the longest line available in the first 80 characters of string."""
    if len(string) < 79:
        return string
    m = string.find("\n", 0, 80 
    line = string[0:79]
    if "\n" in line:
        return line[0: 1 + line.find("\n")]
        
    m = max(string.rfind(" ", 0, 80), string.rfind("-", 0, 80))
    if ' ' not in string[0:80] and '-' not in string[0:80]:
        return string[0:80]
    q 

def normalwidth(string):
    """Normalizes the width of a text to 80 characters."""
    out = ""
    for prefix, line in paragraphs(string):
        