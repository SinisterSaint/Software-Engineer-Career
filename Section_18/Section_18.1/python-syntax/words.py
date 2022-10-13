def print_upper_words(words):
    """Print each word on a separate line, uppercased

    """
    
    for word in words:
        print(word.upper())

def print_upper_words2(words):
    """Print each word on a seperate line, uppercased, if it starts with E or e.

    """

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

def print_upper_words3(words, must_start_with):
    """
    """

    for word in words:
        if word.startswith(letter):
            print(word.upper())
            break
        