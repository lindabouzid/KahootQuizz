document.addEventListener('DOMContentLoaded', function(){
    console.log('it works')
    $(document).ready(function(){
        $('#add').click(function(){
            $('.inputs').append('<hr><div class="question"><div class="form-group"><label>Question</label><input class="form-control" name="question" type="text" /></div><div class="form-group"><label>Answer 1</label><input class="form-control" name="answer1" type="text" /></div>          <div class="form-group"><label>Answer 2</label><input class="form-control" name="answer2" type="text" /></div><div class="form-group"><label>Answer 3</label><input class="form-control" name="answer3" type="text" /></div><div class="form-group"><label>Answer 4</label><input class="form-control" name="answer4" type="text" /></div><div class="form-group"><label>Correct answer </label><input class="form-control" name="correct answer" type="text" /></div></div>')
        });
    })
})