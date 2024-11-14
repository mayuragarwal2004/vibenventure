import requests
import json

# The URL of your Google Apps Script Web App
url = "https://script.google.com/macros/s/AKfycbw3yst2rlw3ELFGR8SHR6TlfleTlCYUppGWJfHnLkDx43lRQ8ItXrsZdlunoRuNomKo4g/exec"

# Data to be sent in the request (replace these with your actual form data)
data = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "company": "ABC Corp",
    "message": "Hello, I would like to inquire about your services."
}

# Send a POST request to the Google Apps Script Web App
response = requests.post(url, json=data)

# Check if the request was successful
if response.status_code == 200:
    print("Request successful!")
    print("Response data:", response.json())  # Print the response from the server
else:
    print(f"Failed to send data. Status code: {response.status_code}")
    print("Response:", response.text)
