export function submit() {
  return { type: "SUBMIT" };
}

export function edit(id) {
  return { type: "EDIT", id };
}

export function save(id) {
  return { type: "SAVE", id };
}

export function del(delId) {
  return { type: "DEL", delId };
}

export function getValue(val) {
  return { type: "GETVALUE", val };
}

export function completed(i) {
  return { type: "COMPLETED", i };
}

export function getValue1(boxId, val1) {
  return { type: "GETVALUE1", boxId, val1 };
}
