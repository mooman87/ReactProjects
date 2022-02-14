const oralsList = require('./oralsList');

const tracleerSurvey = [
    {
        name: 'hospital',
        label: 'Since your last order, have you spent any time in the hospital, skilled nursing, rehabilitation, or hospice care?',
        options: [
            {value: 'default', label: ''},
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },
    {
        name: 'insurance',
        label: 'Have you had any change to your insurance or Medicare eligibility in the last 30 days?',
        options: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },
    {
        name: 'prescriber',
        label: 'Is your prescriber still the same?',
        options: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },
    {
        name: 'weight',
        label: 'What is your current weight?',
        options: [
            {value: 'entry', label: ''},
        ],
    },
    {
        name: 'rxStrength',
        label: 'What strength of ' + oralsList[4].name + ' are you taking?',
        options: [
           {value: 'strength', label: oralsList[4].strength},
            {value: 'addlStrength', label: oralsList[4].addlStrength},
        ],
    },
    {
        name: 'rxFrequency',
        label: 'How are you taking your prescription?',
        options: [
            {value:'qd', label: 'Once daily'},
            {value: 'bid', label: 'Twice daily'},
            {value: 'tid', label: 'Three times daily'},
            {value: 'qid', label: 'Four times daily'},
            {value: 'prn', label: 'As needed'},
        ],
    },
    {
        name: 'rxRoute',
        label: 'How many tablets are you taking?',
        options: [
            {value: 'one', label: '1'},
            {value: 'two', label: '2'},
            {value: 'three', label: '3'},
            {value: 'four', label: '4'},
            {value: 'five', label: '5'},
        ]
    },
    {
        name: 'rxQuantity',
        label: 'How much medication do you have on hand?',
        options: [
            {value: 'quantity', label: ''},
        ],
    },
    {
        name: 'rxChanges',
        label: 'Since your last order, have you had change to prescription or OTC medication, oxygen or herbal supplements, or any changes to your allergies?',
        options: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },
    {
        name: 'fainting',
        label: 'Have you fainted since your last order?',
        options: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },
    {
        name: 'symptoms',
        label: 'With respect to the symptoms of your condition, do you feel better, the same, or worse since your last order?',
        options: [
            {value: 'better', label: 'Better'},
            {value: 'same', label: 'Same'},
            {value: 'worse', label: 'Worse'},
        ],
    },
    {
        name: 'rph', 
        label: 'Do you have any questions for the pharmacist?',
        options: [
            {value: 'yes', label: 'Yes'},
            {value: 'no', label: 'No'},
        ],
    },

]

module.exports = tracleerSurvey;