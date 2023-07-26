import React, { useEffect, useState } from 'react'
const Tablehead = () => {
  return (
    <tr>
      <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">id</th>
      <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">tittle</th>
      <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">status</th>
    </tr>
  )
}
const Tablerow = ({ id, tittle, status }) => {
  <tr className="text-gray-700">
    <td className="border-b-2 p-4 dark:border-dark-5">{id}</td>
    <td className="border-b-2 p-4 dark:bord">{tittle}</td>
    <td className="border-b-2 p-4 dark:border-dark-5">{status? 'complete':'uncompleted'}</td>
  </tr>
}

export default function App() {
  const emptydata = {
    id: "",
    tittle: "",
    complete: "",
  }
  const [data, setdata] = useState(emptydata)
  const [tasknumber, settask] = useState(1)
  const getdata = async () => {
try{
 const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${tasknumber}`)
const datas=await res.json()
setdata(state=>{
  state=datas
  return{...state}
})

}
catch{
console.log("error")
}

      }
 


  const nextdata = () => {
    settask(tasknumber + 1)
  }
  const priviousdata = () => {
    settask(tasknumber - 1)
  }




  useEffect(() => {
    getdata();
  }, [tasknumber])
  return (
    <div className=' flex w-[100%] h-[100vh] items-center justify-center'>
      <table>
        <thead>
          <Tablehead />
        </thead>
        <tbody>
          <Tablerow id={data.id} tittle={data.tittle} status={data.complete}/>

        </tbody>
      </table>
      <div className="w-36 mt-4 flex items-center justify-between">
        <button type="button" className="w-auto p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100" onClick={priviousdata}>
          <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>

        <button type="button" className="w-auto p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100" onClick={nextdata}>
          <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
            </path>
          </svg>
        </button>
      </div>
    </div>

  )
}
