
let trow = document.getElementById("data");
// document.addEventListener('DOMContentLoaded', function() {
//     // code

//     // let button = document.querySelector("button");
//     // button.onclick = refreshData();

// });

    let  init = () => {
        const url = "https://api.covid19api.com/summary";
        fetch(url).then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function ({Global}) {
            // This is the JSON from our response
            console.log(Global);

            let data = Global;
            let {TotalConfirmed, TotalDeaths, TotalRecovered} = data;
            // const totCases = data.TotalConfirmed;
            // const totDeaths = data.TotalDeaths;
            // const totRecovered = data.TotalRecovered;
            const cells = [TotalConfirmed, TotalDeaths, TotalRecovered];

            for (cell in cells) {
                let cellData = trow.insertCell();
                let text = document.createTextNode(cells[cell]);
                cellData.appendChild(text);
            }

            // for (let element of data) {
            //     // let row = table.insertRow();
            //     for (key in element) {
            //     let cell = trow.insertCell();
            //     let text = document.createTextNode(element[key]);
            //     cell.appendChild(text);
            //     }
            // }
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    }
    
    init ();

function refreshData() {
    // console.log("refreshed");
    clearData();
}

function clearData() {
    var children = Array.prototype.slice.call(trow.childNodes)
    console.log(children)
    children.forEach(function (child) {
        trow.removeChild(child);
    });
    init();
}
