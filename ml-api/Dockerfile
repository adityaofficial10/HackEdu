FROM python:3.8-buster

COPY . /ml-api
WORKDIR /ml-api

ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "application.py"]