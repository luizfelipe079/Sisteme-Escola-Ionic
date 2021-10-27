import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class AddAlunoDisciplinasPageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            aluno: ['', [Validators.required]],
            disciplina:['', [Validators.required]]
        });
    }
}