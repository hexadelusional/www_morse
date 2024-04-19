# alphabet to morse translator

morse_dico = {"A":"._",
              "B":"_...",
              "C":"_._.",
              "D":"_..",
              "E":".",
              "F":".._.",
              "G":"__.",
              "H":"....",
              "I":"..",
              "J":".___",
              "K":"_._",
              "L":"._..",
              "M":"__",
              "N":"_.",
              "O":"___",
              "P":".__.",
              "Q":"__._",
              "R":"._.",
              "S":"...",
              "T":"_",
              "U":".._",
              "V":"..._",
              "W":".__",
              "X":"_.._",
              "Y":"_.__",
              "Z":"__..",
              "1":".____",
              "2":"..___",
              "3":"...__",
              "4":"...._",
              "5":".....",
              "6":"_....",
              "7":"__...",
              "8":"___..",
              "9":"____.",
              "0":"_____"}

def translation1(to_translate):
    translated = ""
    for letter in to_translate:
        for morse_letter in morse_dico:
            if str.upper(letter) == morse_letter:
                translated += morse_dico[morse_letter] + " "
    print(translated)

def translation2(to_translate):
    translated = ""
    x = 0
    while x < len(to_translate):
        chain = ""
        while x < len(to_translate) and to_translate[x] != " ":
            chain += to_translate[x]
            x += 1
        for morse_letter in morse_dico:
            if chain == morse_dico[morse_letter]:
                translated += morse_letter
        x += 1 # move to the next character in to_translate
    print(translated)

translation1(input("To morsify : "))
translation2(input("To demorsify : "))
