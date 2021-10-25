import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class CadastroDisciplinaPageForm {

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder:FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }

    createForm(): FormGroup{
        let form =  this.formBuilder.group({
            nome: ['', [Validators.required]]
        });
        
        return form;
    }

    getForm(): FormGroup{
        return this.form;
    }
}