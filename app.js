console.log('JS connected!');

$(document).on('click', '#submit', (event) => {
    event.preventDefault();
    const $toDoItem = $('<h3>').addClass('to-do-item').html($('#input-box').val() + '<br>');
    const $completedBtn = $('<button type="button" name="button" class="completedBtn">COMPLETED</button>');
    $toDoItem.append($completedBtn);
    $('#to-do-list').append($toDoItem);
    $('#input-box').val('');
});

$(document).on('click', '.completedBtn', (event) => {
    event.preventDefault();
    console.log(event.target.parentNode.firstChild.data)
    const $toDoneItem = $('<h3>').addClass('done-item').html(event.target.parentNode.firstChild.data + '<br>').attr('id', 'completed');
    const $removeBtn = $('<button type="button" name="button" class="removeBtn">REMOVE</button>');
    $toDoneItem.append($removeBtn);
    $('#completed').append($toDoneItem);
    event.target.parentNode.remove();
})

$(document).on('click', '.removeBtn', (event) => {
    event.preventDefault();
    event.target.parentNode.remove();
})