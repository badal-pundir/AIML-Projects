import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

def text_summarizer(rawdocument):
    # Load English tokenizer, tagger, parser, NER, and word vectors
    nlp = spacy.load('en_core_web_sm')

    # Create list of stopwords and punctuations
    stopwords = list(STOP_WORDS)
    doc = nlp(rawdocument)

    # Tokenize the document
    tokens = [token.text.lower() for token in doc if token.text.lower() not in stopwords and token.text not in punctuation]

    # Calculate word frequency
    word_freq = {}
    for word in tokens:
        if word not in word_freq.keys():
            word_freq[word] = 1
        else:
            word_freq[word] += 1

    # Normalize word frequencies
    max_freq = max(word_freq.values())
    for word in word_freq.keys():
        word_freq[word] = word_freq[word] / max_freq

    # Sentence tokenization and scoring
    sent_tokens = [sent for sent in doc.sents]
    sent_scores = {}
    for sent in sent_tokens:
        for word in sent:
            if word.text.lower() in word_freq.keys():
                if sent not in sent_scores.keys():
                    sent_scores[sent] = word_freq[word.text.lower()]
                else:
                    sent_scores[sent] += word_freq[word.text.lower()]

    # Select top one third sentences based on sentence scores
    select_len = len(sent_tokens)//3
    summary = nlargest(select_len, sent_scores, key=sent_scores.get)

    # Convert summary sentences back to string
    final_summary = [word.text for word in summary]
    summary = ' '.join(final_summary)

    return summary, len(rawdocument.split(' ')), len(summary.split(' '))
