let result

function upload(){

    var input = document.getElementById("price");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0])
    fReader.onloadend = function(event){
    result = event.target.result;

    return result    
    }    
}

module.exports = {
    result
}