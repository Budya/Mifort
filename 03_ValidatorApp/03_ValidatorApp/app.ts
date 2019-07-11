class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

let validationValue: string;
let validState: string[] = null

let csv: ColumnDescriptor[] = [
    {
        fieldName: "name",
        validators: [
            length(2, 7),
        ]

    },
]

class Validator {

    colDescriptor: ColumnDescriptor[];

    constructor(csv: ColumnDescriptor[]) {
        this.colDescriptor = csv;
    }

    validate(obj: Person): string[] {
        validState = null;
        let objectKeys: string[] = Object.keys(obj);
        for (let i = 0; i < objectKeys.length; i++) {
            for (let j = 0; j < csv.length; j++) {
                if (objectKeys[i] === csv[j].fieldName) {                    
                    validationValue = obj[objectKeys[i]];
                    for (let currentValidationRule = 0; currentValidationRule < csv[j].validators.length; currentValidationRule++) {
                        csv[j].validators[currentValidationRule];
                    }
                }

            }

        }

        return validState;
    }
}

let person: Person = new Person("Steve");

let validator = new Validator(csv);

validator.validate(person);

interface Validators {

    validators: any[];

}

interface ColumnDescriptor extends Validators {
    fieldName: string;
    validators: any[];
}



function length(min: number, max: number): void {

    console.log(validationValue);
    if (validationValue.length >= min && validationValue.length <= max) {
        validState.push("name lenght is good");
    }
}





