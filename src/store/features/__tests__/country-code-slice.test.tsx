import countryCode, {setCode} from '../country-code-slice';

describe('CountryCodeSpan Slice', () => {
  let state = countryCode(undefined, {type: ''});

  test('should return the initial value', () => {
    const initialCountryCode = navigator.language.slice(-2);
    expect(state).toEqual(initialCountryCode);
  });

  test('should handle SET_CODE', () => {
    const exampleCodes = ['US', 'FR', 'KR', 'ZZ'];
    for (const exampleCode of exampleCodes) {
      state = countryCode(state, setCode(exampleCode));
      expect(state).toEqual(exampleCode);
    }
  });
});
