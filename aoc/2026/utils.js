export async function readTxtFile(path) {
  const file = Bun.file(path);
  return await file.text();
}

export async function readJsonFile(path) {
  const file = Bun.file(path);
  return await file.json();
}
