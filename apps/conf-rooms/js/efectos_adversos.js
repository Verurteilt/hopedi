$( document ).on("pagebeforeshow", function(){
    var efectos_adversos = localStorage.getItem("efectos_adversos");
    $('#efectos_adversos').empty();
    $('#efectos_adversos').append(efectos_adversos);
    $('#efectos_adversos').trigger('create');
});
