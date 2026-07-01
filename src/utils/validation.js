export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateSurveyForm({ name, email, selectedMovie }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  if (!email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!validateEmail(email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  if (!selectedMovie) {
    errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
