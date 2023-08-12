$('form').on('submit', function(e){
    e.preventDefault()

    const novaTarefa = $('#tarefa').val()
    const adicionarTarefa = $('<li></li>')

    //alert(`Sua novaTarefa é ${novaTarefa}`)
    $(`<li>${novaTarefa}</li>`).appendTo(adicionarTarefa)

    $(adicionarTarefa).appendTo('ul')
    $('#tarefa').val('')
})

$('ul').click(function(){
    $(this).addClass('.riscar')
})