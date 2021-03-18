$.ajax({
    type:'get',
    url: 'https://api.covid19api.com/summary',
    success: function (responce) {
        console.log(responce.Countries)

        for(var i = 0; i < responce.Countries.length; i++) {
            var totalactive = responce.Countries[i].TotalConfimred - responce.Countries[i].TotalRecovered
            var tablerow = `<tr> <td>${responce.Countries[i].Country}</td> <td>${responce.Countries[i].TotalConfimred}</td></tr>`

            $('#tbody').append(tablerow)
        }
        $('#covidtable').DataTable()
},
error: function (error) {
    console.log(error)
})