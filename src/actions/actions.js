export function submit(id) {
  return { type: "SUBMIT" };
}

export function edit() {
  return { type: "EDIT" };
}

export function del() {
  return { type: "DEL" };
}

export function getValue(val) {
  return { type: "GETVALUE", val };
}

export function checked(i) {
  return { type: "CHECKED", i };
}

export function getValue1() {
  return { type: "GETVALUE1" };
}
