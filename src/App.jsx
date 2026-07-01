import { useState } from "react";
import { movies } from "@/constants/movies";
import { validateSurveyForm } from "@/utils/validation";
import { SurveyCard } from "@/components/survey/SurveyCard";
import { SurveyForm } from "@/components/survey/SurveyForm";
import { SurveySummary } from "@/components/survey/SurveySummary";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  selectedMovie: "",
  comments: "",
};

function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleMovieSelect(movieTitle) {
    setFormData((prev) => ({ ...prev, selectedMovie: movieTitle }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { isValid, errors: validationErrors } = validateSurveyForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData });
  }

  function handleReset() {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  }

  function handleRestart() {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setSubmittedData(null);
  }

  return (
    <main className="survey-page">
      <SurveyCard>
        {submittedData ? (
          <SurveySummary
            submittedData={submittedData}
            onRestart={handleRestart}
          />
        ) : (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onFieldChange={handleFieldChange}
            onMovieSelect={handleMovieSelect}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}
      </SurveyCard>
    </main>
  );
}

export default App;
