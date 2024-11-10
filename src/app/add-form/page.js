"use client"
import { useState } from "react";

const questionTypes = [
  { label: "Short answer", type: "short_answer" },
  { label: "Paragraph", type: "paragraph" },
  { label: "Multiple choice", type: "multiple_choice" },
  { label: "Checkboxes", type: "checkboxes" },
  { label: "Dropdown", type: "dropdown" },
  { label: "File upload", type: "file_upload" },
  { label: "Linear scale", type: "linear_scale" },
  { label: "Rating", type: "rating" },
  { label: "Multiple-choice grid", type: "multiple_choice_grid" },
  { label: "Tick box grid", type: "tick_box_grid" },
  { label: "Date", type: "date" },
  { label: "Time", type: "time" }
];

const FormBuilder = () => {
  const [formTitle, setFormTitle] = useState("Untitled form");
  const [formDescription, setFormDescription] = useState("Form description");
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    const newQuestion = {
      text: "Untitled Question",
      type: type,
      options: type === "multiple_choice" || type === "checkboxes" || type === "dropdown" ? ["Option 1"] : [],
      required: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push(`Option ${updatedQuestions[index].options.length + 1}`);
    setQuestions(updatedQuestions);
  };

  const toggleRequired = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].required = !updatedQuestions[index].required;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Form Title and Description */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Untitled form"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="w-full text-2xl font-semibold border-b border-gray-300 mb-2 outline-none"
        />
        <input
          type="text"
          placeholder="Form description"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          className="w-full text-gray-600 border-b border-gray-300 outline-none"
        />
      </div>

      {/* Questions */}
      {questions.map((question, index) => (
        <div key={index} className="mb-4 p-4 bg-white border border-gray-300 rounded-lg">
          <input
            type="text"
            value={question.text}
            onChange={(e) => handleQuestionChange(index, "text", e.target.value)}
            placeholder="Untitled Question"
            className="w-full font-medium mb-2 outline-none border-b border-gray-300"
          />

          {/* Question Type Selector */}
          <select
            value={question.type}
            onChange={(e) => handleQuestionChange(index, "type", e.target.value)}
            className="w-full mb-2"
          >
            {questionTypes.map((type) => (
              <option key={type.type} value={type.type}>
                {type.label}
              </option>
            ))}
          </select>

          {/* Question Options */}
          {question.type === "multiple_choice" || question.type === "checkboxes" || question.type === "dropdown" ? (
            <div className="pl-4">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  {question.type === "multiple_choice" ? (
                    <input type="radio" disabled />
                  ) : (
                    <input type="checkbox" disabled />
                  )}
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleQuestionChange(index, "options", [
                        ...question.options.slice(0, optionIndex),
                        e.target.value,
                        ...question.options.slice(optionIndex + 1),
                      ])
                    }
                    placeholder={`Option ${optionIndex + 1}`}
                    className="ml-2 outline-none border-b border-gray-300 w-full"
                  />
                </div>
              ))}
              <button onClick={() => addOption(index)} className="text-blue-500 text-sm mt-2">
                + Add Option
              </button>
            </div>
          ) : null}

          {/* Required Toggle */}
          <div className="flex items-center justify-between mt-4">
            <label className="text-gray-500">Required</label>
            <input
              type="checkbox"
              checked={question.required}
              onChange={() => toggleRequired(index)}
              className="form-checkbox"
            />
          </div>
        </div>
      ))}

      {/* Add Question Button with Type Selection */}
      <div className="flex items-center">
        {questionTypes.map((type) => (
          <button
            key={type.type}
            onClick={() => addQuestion(type.type)}
            className="p-2 bg-blue-600 text-white rounded mr-2"
          >
            + {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
