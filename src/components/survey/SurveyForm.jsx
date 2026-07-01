import { RotateCcw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/TextField";
import { TextArea } from "@/components/ui/TextArea";
import { MovieList } from "@/components/survey/MovieList";

function SurveyForm({
  formData,
  errors,
  movies,
  onFieldChange,
  onMovieSelect,
  onSubmit,
  onReset,
}) {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-5"
    >
      <TextField
        id="name"
        name="name"
        label="ชื่อ"
        required
        placeholder="กรุณากรอกชื่อของคุณ"
        value={formData.name}
        onChange={onFieldChange}
        error={errors.name}
      />

      <TextField
        id="email"
        name="email"
        type="email"
        label="อีเมล"
        required
        placeholder="example@email.com"
        value={formData.email}
        onChange={onFieldChange}
        error={errors.email}
      />

      <MovieList
        movies={movies}
        name="selectedMovie"
        selectedMovie={formData.selectedMovie}
        onSelect={onMovieSelect}
        error={errors.selectedMovie}
      />

      <TextArea
        id="comments"
        name="comments"
        label="ความคิดเห็นเกี่ยวกับหนัง"
        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
        value={formData.comments}
        onChange={onFieldChange}
      />

      <footer className="flex items-center justify-between gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-10 px-4"
          onClick={onReset}
        >
          <RotateCcw aria-hidden="true" />
          รีเซ็ต
        </Button>
        <Button
          type="submit"
          size="lg"
          className="h-10 bg-violet-600 px-4 text-white hover:bg-violet-700"
        >
          <Send aria-hidden="true" />
          ส่งแบบสำรวจ
        </Button>
      </footer>
    </form>
  );
}

export { SurveyForm };
