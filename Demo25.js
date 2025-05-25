const Userdata=[
    {id:1,name:"sefina",age:25,gender:"female",hasPassedOut: true,occupation:undefined},
    {id:2,name:"Jalan",age:25,gender:"male",hasPassedOut: false,occupation:undefined},
    {id:3,name:"nirpa",age:25,gender:"male",hasPassedOut: true,occupation:"intern"},
    {id:4,name:"gaurav",age:23,gender:"male",hasPassedOut: false,occupation:"animator"},
    {id:5,name:"ishowr",age:1000000,gender:undefined,hasPassedOut: true,occupation:"be god"},
    {id:6,name:"safalta",age:20,gender:"female",hasPassedOut: false,occupation:undefined},
    {id:7,name:"bimal",age:23,gender:"male",hasPassedOut: true,occupation:"SSWE"}
]

const response={
    status: 200,
    message: "Data fetched successfully",
    data :Userdata
}

const getUserName=()=>{
    const APIStatus=response.status
    if(APIStatus===200){
        const result=response.data
        .map((user)=> user.occupation ?? user.name)
        return result;
    }else{

    }
}
console.log(getUserName());