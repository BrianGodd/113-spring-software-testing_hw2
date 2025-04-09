### TDD Process Narrative

#### 1. Add Method
- Test: Created `add(5, 3) = 8` → passed immediately
- No changes needed as `add` was already implemented

#### 2. Subtract Method
- Test: `subtract(5, 3) = 2` → initially failed
- Fix: Added `subtract(a, b)` method in Calc, by using `a - b`

#### 3. Multiply Method
- Test: `multiply(5, 3) = 15` → failed
- Fix: Implemented using loop
- Refactor: Added `multiply(a, b)` method in Calc, by using `a * b` for better readability

#### 4.1. Divide Method
- Test: `divide(15, 3) = 5`, `divide(15, 2) = 7.5` → failed
- Fix: Added `divide(a, b)` method in Calc
- Used floating point division

#### 4.2. Divide with zero
- Test: `divide(15, 0)` → failed
- Fix: Added condition `b == 0` to throw Error in method `divide(a, b)` method
- Throw an error message:"Division by zero"