import React, { createContext } from 'react'
export const Context=createContext()


async function getall(){
  var name="SHARIQUE"
  var response=await fetch(`/user?name=${name}&&lname=zafar`,{
    method:"get",
    headers:{
      "content-type":"application/json",
      "authorization":localStorage.getItem('token'),
      "email":localStorage.getItem('email')
    }
  })
  return await response.json()
}



async function submit(item){
  var response=await fetch('/user',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function login(item){
  var response=await fetch('/user/login',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}




async function logout(item){
  var response=await fetch('/user/logout',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}




async function logoutall(item){
  var response=await fetch('/user/logoutall',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}




async function forgetusername(item){
  var response=await fetch('/user/forgetemail',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function forgetnumber(item){
  var response=await fetch('/user/forgetotp',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function forgetpass(item){
  var response=await fetch('/user/forgetpassword',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function updatepass(item,curpass){
  var response=await fetch('/user/updatepassword/'+curpass,{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function searching(item){
  var response=await fetch('/user/search',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}


async function remove(item,value){
  var response=await fetch('/user/'+item._id+"/"+value,{
    method:"delete",
    headers:{
      "content-type":"application/json"
    }
  })
  return await response.json()
}


async function edit(item,value){
  var response=await fetch('/user/'+item._id+"/"+value,{
    method:"put",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(item)
  })
  return await response.json()
}



async function singleget(item){
  var response=await fetch('/user/'+item._id,{
    method:"get"
  })
  return await response.json()
}

function CreateContextProvider(props) {
  return (
    <Context.Provider value={{
        getall:getall,
        searching:searching,
        remove:remove,
        singleget:singleget,
        edit:edit,
        submit:submit,
        login:login,
        logout:logout,
        logoutall:logoutall,
        forgetusername:forgetusername,
        forgetnumber:forgetnumber,
        forgetpass:forgetpass,
        updatepass:updatepass
    }}>
    {props.children}
    </Context.Provider>
  )
}

export default CreateContextProvider