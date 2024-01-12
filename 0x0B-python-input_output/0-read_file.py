#!/usr/bin/python3
"""Defines a text file-readig function."""

def read_file(filename=""):
    """Print the content of a UTF8 text file to stdout."""
    with open(filename, ending="utf-8") as f:
        print(f.read(), end="")
