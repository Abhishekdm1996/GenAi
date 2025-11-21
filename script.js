function generate() {
  const input = document.getElementById('userInput').value;
  if (!input.trim()) {
    document.getElementById('output').textContent = "Please enter a requirement.";
    return;
  }
  const output = `
TEST CASES:
TC001 | Step 1 | Validate: ${input} | Actual: - | Expected: Should work | Result: Pending

BUGS:
BUG001 | Issue in ${input} | Steps: 1. Open app 2. Perform action | Actual: Fails | Expected: Should pass
  `;
  document.getElementById('output').textContent = output;
}