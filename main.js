$(document).ready(function() {

    $('form').on('submit',function(e) {
        e.preventDefault();
        const inputNome = $('#input-tarefa').val();
        const novaTarefa = $(`<li>${inputNome}</li>`);
        $(inputNome).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').click(function() {
            $(this).addClass('finalizada');
        })
    })

})