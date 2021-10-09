// BAD CASE - Non Error First
const error = (name, age, email) => {
  if (name && name.length > 3) {
    // something // ...
    if (age < 30) {
      // something // ...
      if (/이메일정규식/.test(email)) {
        // something // ...
        return true;
      } else {
        return false;
      }
    } else {
      return;
      false;
    }
  } else {
    return false;
  }
};

// node.js 기본 내장 함수는  Error-First Callback 규칙을 따른다. (오류 우선 콜백 패턴)

// GOOD CASE - Error First
const error = (name, age, email) => {
  if (!name || name.length < 4) {
    return false;
  } // something // ...
  if (age >= 30) {
    return false;
  } // something // ...
  if (!/이메일정규식/.test(email)) {
    return false;
  } // something // ...
  return true;
};
