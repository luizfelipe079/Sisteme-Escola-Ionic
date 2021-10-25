import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class CadastroAlunoPageForm {

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder:FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }

    createForm(): FormGroup{
        let form =  this.formBuilder.group({
            nome: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.minLength(6)]],
            confirmarSenha: ['', [Validators.required ]]
        });

        form.get('confirmarSenha').setValidators(matchSenhaAndConfirmarSenha(form));

        return form;
    }

    getForm(): FormGroup{
        return this.form;
    }
}

function matchSenhaAndConfirmarSenha(form: FormGroup): ValidatorFn {
    const senha = form.get('senha');
    const confirmarSenha = form.get('confirmarSenha');

    const validator = () => {
        return senha.value == confirmarSenha.value ? null : {isntMatching: true}
    };

    return validator;
}