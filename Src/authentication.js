
const { alpha } = require('@mui/material');
// const { data } = require('cheerio/lib/api/attributes');
// heapSort = require('./heapsort.js');
function scrape( type_of, to_search = null) {
    const axios = require('axios');
    const cheerio = require('cheerio');
    const url = 'https://www.worldometers.info/coronavirus/';
    axios.get(url)
    .then(response => {
        var html=response.data;
        const $ = cheerio.load(html);
        var alpha = [];
        var cont = "";
        $('#main_table_countries_today').each((i, elem) => {
            if (type_of === "Country") {
                
                i = 9;
                while (cont !== to_search) {
                    cont = $(elem).find('tbody:nth-child(2) >tr:nth-child(' + String(i)  + ')  > td:nth-child(2)').text();
                    i += 1;
                }
                i -= 1;
                console.log(i);
                alpha.push({
                    Country_Name : cont,
                    Country_Ranking: $(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(1)').text(),
                    totalCases : $(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(3)').text(),
                    New_Cases : $(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(4)').text().replace('+', ''),
                });  
            }
            else if (type_of === "Ranking") {
                // var cont = "";
                // var alpha = [];
                i = 9;
                while (cont !== to_search) {
                    cont = $(elem).find('tbody:nth-child(2) >tr:nth-child(' + String(i)  + ')  > td:nth-child(1)').text();
                    i += 1;
                }
                i -= 1;
                alpha.push({
                    Country_Name : $(elem).find('tbody:nth-child(2) >tr:nth-child(' + String(i)  + ')  > td:nth-child(2)').text(),
                    Country_Ranking: cont,
                    totalCases : $(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(3)').text(),
                    New_Cases : $(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(4)').text().replace('+', ''),
                });  
            }
            else if (type_of === "Most_cases") {
                // var alpha = [];
                // var cont = "";
                i = 9;
                while (i < 200) {
                    console.log(i);
                    alpha.push({
                        Country_Name : $(elem).find('tbody:nth-child(2) >tr:nth-child(' + String(i)  + ')  > td:nth-child(2)').text(),
                        Country_Ranking: $(elem).find('tbody:nth-child(2) >tr:nth-child(' + String(i)  + ')  > td:nth-child(1)').text(),
                        totalCases :String(parseInt($(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(3)').text().replace(',', '').replace(',', ''))),
                        New_Cases : String(parseInt($(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(4)').text().replace('+', '').replace(',', ''))),
                        Total_deaths : String(parseInt($(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(5)').text().replace(',', ''))),
                        total_recovered :String(parseInt($(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(6)').text().replace(',', ''))),
                        New_deaths:String(parseInt($(elem).find('tbody:nth-child(2) > tr:nth-child(' + String(i)  + ') > td:nth-child(7)').text().replace(',', '').replace('+', ''))),
                    });  
                    i += 1
                }
                const fs = require('fs');
                const jsonContent = JSON.stringify(alpha);

                fs.writeFile("./alpha.json", jsonContent, 'utf8', function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                });    
                
            }
        });
    })
    .catch(error => {
        console.log(error);
    })
    
}
var all_countries = scrape("Most_cases");


console.log(all_countries)

// export default scrape;

