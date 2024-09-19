import React from "react";
import data from '../alpha.json';
import Navbar from "./Navbar";
import "./DailyStats.css"

class DailyStats extends React.Component{
  componentDidMount(){
    var i=0;
    var table = document.getElementById("t");
    var tb,r;
    while(i<191){
      tb = table.getElementsByTagName('tbody')[0];
      r = tb.insertRow();
      r.setAttribute("id",i);
      var th1 = document.createElement('td');
      th1.innerHTML= data[i].Country_Name;
      r.appendChild(th1);
      var th2 = document.createElement('td');
      th2.innerHTML= data[i].Country_Ranking;
      r.appendChild(th2);
      var th3 = document.createElement('td');
      th3.innerHTML= data[i].totalCases;
      r.appendChild(th3);
      var th4 = document.createElement('td');
      th4.innerHTML= data[i].Total_deaths;
      r.appendChild(th4);
      var th5 = document.createElement('td');
      th5.innerHTML= data[i].New_Cases;
      r.appendChild(th5);
      var th6 = document.createElement('td');
      th6.innerHTML= data[i].New_deaths;
      r.appendChild(th6);
      var th7 = document.createElement('td');
      th7.innerHTML= data[i].total_recovered;
      r.appendChild(th7);
      i+=1
      // console.log(document.getElementById("1"));
    }
  }
  searchEntry=()=>{
    var input, to_search, withcitBael, tr, td, i, thw_search;
          input = document.getElementById("s");
          // console.log(input.value.toLowerCase());
          to_search = input.value.toLowerCase();
          var rows = [];
          var i=0;
          while(i<191){
            rows.push(document.getElementById(i));
            i+=1
          }
          // rows.push(document.getElementById("0"));
          // rows.push(document.getElementById("1"));
          // rows.push(document.getElementById("2"));
          // rows.push(document.getElementById("3"));
          // rows.push(document.getElementById("r4"));
          // rows.push(document.getElementById("r5"));
          for (i = 0; i < rows.length; i++) {
            td = rows[i].getElementsByTagName("td")[0];
            console.log(td);
            if (td) {
              thw_search = td.textContent || td.innerText;
              console.log(thw_search.toLowerCase().indexOf(to_search))
              if (thw_search.toLowerCase().indexOf(to_search) > -1) {
                rows[i].style.display = "";
              } else {
                rows[i].style.display = "none";
              }
            }
          }
  }
  render(){
    return(
      <div>
        <Navbar/>
        <div className="s5">
          <input className="input1" id = 's' type="text" onKeyUp={this.searchEntry} placeholder="Enter Country Name to Search"/>
        </div>
        <div class="table-wrapper">
          <table class="fl-table" id="t">
            <thead>
            <tr>
                <th>Country Name</th>
                <th>Country Ranking</th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>New Cases</th>
                <th>New Deaths</th>
                <th>Total Recovered</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
}
export default DailyStats;