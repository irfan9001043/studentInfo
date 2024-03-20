$(document).on("click", ".addNew", function () {  //add student click on modal
    $(".studentName,.studentImage,.studentDescription").val("")
    $('#staticBackdrop').modal('toggle')
})




$(document).on("click", ".deleteStudent", function () {  //delete button main sweet alert
    var dataId = $(this).attr("data-id");
    studentName = $('.studentName_' + dataId).text();
    console.log(studentName)
    swal({
        title: "Are you sure?",
        text: "are you sure delete  " + studentName + " profile",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $(".studentProfile_" + dataId).remove();
            swal("Delete Successfully!", {
                icon: "success",
                buttons: false,
                timer: 1000,

            });
        } else {
            swal("Not Delete This File");
        }
    });

    // console.log('dsaf' + dataId)
    // // $("#removeBtn").attr("data-id", dataId);
    // $("#exampleModal").modal("toggle")
});


var studentName = '' //update wala modal
var studentDescription = ''
$(document).on('click', '.updateStudent', function () {
    $('.studentName,.studentImage,.studentDescription').val('')
    var dataId = $(this).attr('data-id');
    $('.addStudentProfile').attr('data-id', dataId);
    studentName = $('.studentName_' + dataId).text();
    $('.studentName').val(studentName)
    studentDescription = $('.studentDescription_' + dataId).text();
    $('.studentDescription').val(studentDescription)
    $('#staticBackdrop').modal('toggle')

});





$(document).ready(function () {
    $("#removeBtn").click(function () {
        var dataId = $(this).attr("data-id");
        $(".studentProfile_" + dataId).remove();
    });
});






// $(document).ready(function(){
//     $(document).on('click','.update', function(){
//         var studentName = $('.studentName').text()
//         var studentImage = $('.studentImage').val()
//         var studentDescription = $('.studentDescription').val()

//         $('#staticBackdrop').modal('toggle')
//         $('. studentName').val(Name);
//         $('. studentImage').val(Image);
//         $('. studentDescription').val(Description);
//     });
// });
// document.cookie = 'name=shakir;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
console.log(document.cookie)
document.cookie = 'name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
var i = 0;
$(document).on('click', '.addStudentProfile', function () {
    var dataId = $(this).attr('data-id');
    swal({
        title: "Good Job?",
        text: "",
        icon: "success",
        buttons: false,
        dangerMode: false,
        timer: 1000,
    });
    var studentName = $('.studentName').val()
    var studentImage = $('.studentImage').val()
    var image = studentImage.replace(/\\/g, '/').split('/');
    studentImage = image[image.length - 1]
    var studentDescription = $('.studentDescription').val()

    if (dataId) {
        $('.studentName_' + dataId).text(studentName);
        $('.studentDescription_' + dataId).text(studentDescription);
        $('#staticBackdrop').modal('toggle')
        return false;
    }


















    // if(studentName == ''|| studentImage == ''|| studentDescription == ''){
    //     $(".nameError,.imageError,.descriptionError").text("fill this form")
    //     return false;
    // }else {
    //     $(".nameError,.imageError,.description").text('')
    // }

    //  if(studentName == ''){
    //      $('.nameError').text('this field is required')
    //      return false;
    //  } else {
    //      $(".nameError").text('')
    //  };

    //  if(studentImage == ''){
    //      $(".imageError").text("this field is required")
    //      return false;
    //  }else {
    //      $(".imageError").text("")
    //  };

    //  if(studentDescription == ""){
    //      $(".DescriptionError").text("this field is required")
    //      return false
    //  }else{
    //     $(".DescriptionError").text()
    //  }




    // **************************image card and buttons *******************
    var studentHtml = `<div class="col-sm-4 mb-4 studentProfile_` + i + `">  
    <div class="card" style="" style="height: 100px;">
    <img class="card-img-top studentProfile studentImage_`+ i + `" src="images/` + studentImage + `">
    <div class="card-body">
         <h4 class="card-title studentName_`+ i + `">` + studentName + `</h4>
         <p class="card-text studentDescription_`+ i + `">` + studentDescription + `</p>
         <button type="button" class="btn btn-primary updateStudent" data-id="`+ i + `" data-bs-toggle="modal"
             data-bs-target="#staticBackdrop">
             Update
         </button>
         <button type="button" class="btn btn-danger deleteStudent" data-id="`+ i + `">
             Delete
         </button>
     </div>
    </div>
    </div>`
    i++;
    $('.AddStudent').append(studentHtml);
    $('#staticBackdrop').modal('toggle')
});





