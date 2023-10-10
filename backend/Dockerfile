# Use the latest Alpine Linux image as the base image
FROM alpine:latest

# Install Python 3, pip, and other dependencies
RUN apk add --no-cache python3-dev py3-pip
RUN pip install --upgrade pip
RUN pip install pipenv
RUN apk add --no-cache bash

# Set the working directory to /code
WORKDIR /code

# Copy the Pipfile and Pipfile.lock to the working directory
COPY ./Pipfile .
COPY ./Pipfile.lock .

# Install the dependencies using pipenv
RUN pipenv install --system --deploy

# Copy the rest of the application code to the working directory
COPY . .

# Set the default command to run the application using Uvicorn
CMD ["uvicorn", "--app-dir", "app", "--reload", "main:app", "--host", "0.0.0.0", "--port", "5050"]
