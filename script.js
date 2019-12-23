$(function(){
  
  ///w/api.php?action=query&format=json&prop=revisions&titles=Main%20Page&rvprop=content
  
  //"https://en.wikipedia.org/w/api.php?action=opensearch&search=billy&callback=?
  
  ///wiki/api/.php?action=opensearch&search=billy&callback=?
  
  //https://en.wikipedia.org/w/api.php?action=opensearch&search=billy&callback=?
  
  $('#search').click(function(){
    
    let searchTerm1 = $('#searchTerm').val(); 
    
    $.ajax({
      
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm1 + '&callback=?',
      async: false,
      dataType: 'json',
      success: function(data){
        //console.log(data[3][1]);
        
        $('#results').html('');
        
        for(let i=0; i<data[1].length; i++){
          $('#results').append('<a href=' + data[3][i] + ' target="_blank"> ' + data[1][i] + '</a>' + '<br>')
        
          
          
        }
        
      
    },
      error: function(err){
        alert("Error")
      }
     
      

      
      
    })
      
      

    
    
    
    
  })
  
  
  //add type enter on keyboard to search 
  $("#searchTerm").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#search").click();
    }
});
     
  
});