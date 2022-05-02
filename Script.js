import http from 'http';

let api = [
           {Firma:"Apacta A/S", Email:"kontakt@apacta.com", Tlf:"+45 7734 7834", Zip:"9000", City:"Aalborg", Address:"Østre Allé 101"},
           {Firma:"TRIC Solutions ApS", Email:"info@tric.dk", Tlf:"+45 77 34 40 40", Zip:"9000", City:"Aalborg", Address:"C.W. Obels Plads 2"},
           {Firma:"MapsPeople", Email:"mail@mapspeople.com", Tlf:"N/D", Zip:"9400", City:"Aalborg", Address:"Stigsborgvej 60"},
           {Firma:"Neogrid Technologies ApS", Email:"info@neogrid.dk", Tlf:"+45 3065 4661", Zip:"9220", City:"Aalborg", Address:"Niels Jernes Vej 10"},
        ] 

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    for(let i = 0; i < api.length; i++){
    response.write("Firma: "+api[i].Firma+" \n");
    response.write("Email: "+api[i].Email+" \n");
    response.write("Tlf: "+api[i].Tlf+" \n");
    response.write("Zip: "+api[i].Zip+" \n");
    response.write("City: "+api[i].City+" \n");
    response.write("Address" +api[i].Address+" \n\n\n\n\n")
    }
    response.end();
}).listen(4000)