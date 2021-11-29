import { validateInput } from '../src/client/js/formValidator'
describe('Testing the submit functionality', () => {
  test('Testing the validateInput function', () => {
    expect(validateInput).toBeDefined()
  })
})
