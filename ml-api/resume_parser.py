from tika import parser  
from question_generation.pipelines import pipeline

nlp = pipeline("question-generation")

def getTextFromPdf(resume):
    parsed_pdf = parser.from_file(resume.path)
    data = parsed_pdf['content'] 
    return data

def getQuestions(text):
    data = getTextFromPdf()
    return nlp(text)

def generate(resume):
    text = getTextFromPdf(resume=resume)
    questions = getQuestions(text=text)
    return questions
