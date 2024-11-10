{
    "title": "Survey Form",
    "description": "Customer feedback survey",
    "image": "www.example.com/form-image.jpg",
    "creatorId": "user123",
    "valid_till_date": "2024-12-30",
    "valid_till_time": "01:20:00 AM",
    "URL": "www.exampleformlink.com",
    "questions": [
      {
        "id": "q1",
        "text": "What is your name?",
        "type": "short_answer",
        "image": "www.example.com/question-image.jpg",
        "max_length": 50,
        "min_length": 1,
        "required": true,
        "options": []
      },
      {
        "id": "q2",
        "text": "How satisfied are you with our service?",
        "type": "multiple_choice",
        "image": "www.example.com/question-image.jpg",
        "options": ["Very satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very unsatisfied"],
        "required": true
      },
      {
        "id": "q3",
        "text": "Any additional feedback?",
        "type": "paragraph",
        "image": "www.example.com/question-image.jpg",
        "options": [],
        "required": false
      },
      {
        "id": "q4",
        "text": "Select your preferred color",
        "type": "color",
        "required": true
      },
      {
        "id": "q5",
        "text": "Upload a profile picture",
        "type": "file",
        "required": true,
        "accept": ["image/png", "image/jpeg"]
      },
      {
        "id": "q6",
        "text": "Select your birth date",
        "type": "date",
        "required": true
      },
      {
        "id": "q7",
        "text": "Set a password",
        "type": "password",
        "required": true,
        "max_length": 20,
        "min_length": 8
      },
      {
        "id": "q8",
        "text": "Rate your experience",
        "type": "range",
        "required": true,
        "min": 1,
        "max": 10,
        "step": 1
      },
      {
        "id": "q9",
        "text": "Provide your email address",
        "type": "email",
        "required": true
      },
      {
        "id": "q10",
        "text": "Provide additional documents",
        "type": "file",
        "required": false,
        "accept": ["application/pdf", "application/msword"]
      }
    ],
    "createdAt": "2024-11-10T10:00:00Z",
    "updatedAt": "2024-11-10T10:00:00Z"
  }
  