import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class AddNotaPageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            aluno: ['', [Validators.required]],
            disciplina:['', [Validators.required]],
            nota1: ['', Validators.required],
            nota2: ['', [Validators.required]]
        });
    }
}