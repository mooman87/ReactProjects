import {jest} from '@jest/globals';
import {PatientSurvey} from './components/PatientSurvey';

jest.useFakeTimers();
test('renders Patient Survey', () => {
    expect(PatientSurvey).toBeDefined();
});
    