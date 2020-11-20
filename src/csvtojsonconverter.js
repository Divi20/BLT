const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "./state_wise_data.csv"
var obj
csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    obj = json.reverse()

    fs.writeFileSync("output.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})

export default function JSONObjTableData(){
    return obj
}
