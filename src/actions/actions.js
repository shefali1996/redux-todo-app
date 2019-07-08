export function submit() {
  return { type: "SUBMIT" };
}

export function edit(id) {
  return { type: "EDIT",id };
}

export function save(id) {
  return { type: "SAVE",id };
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

export function getValue1(boxId,val1) {
  return { type: "GETVALUE1", boxId,val1 };
}
