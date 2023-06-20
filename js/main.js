$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            endereco:{
                required:true
            },
            cep:{
                required:true
            }
            },
            messages:{
                nome: 'Insira seu nome',
                email: 'Insira seu e-mail',
                telefone: 'Insira seu telefone',
                cpf: 'Insira seu cpf',
                endereco: 'Insira seu endereço',
                cep: 'Insira seu cep'
            },

            submitHandler: function(form){
                const inputNome = $('#nome').val();
                const inputEmail = $('#email').val();
                const inputTelefone = $('#telefone').val();
                const inputCpf = $('#cpf').val();
                const inputEndereco = $('#endereco').val();
                const inputCep = $('#cep').val();
                $('p').html(`
                            <h2> Cadastro efetuado com sucesso </h2>
                            `);
                            $('#sucesso-info').html(`<p id="sucesso">
                            Nome: ${inputNome}<br>
                            E-mail: ${inputEmail}<br>
                            Telefone: ${inputTelefone}<br>
                            CPF: ${inputCpf}<br>
                            Endereço: ${inputEndereco}<br>
                            CEP: ${inputCep}<br></p>
                            `)
            }
            
    })
})