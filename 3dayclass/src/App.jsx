import { useState } from 'react'
import Card from './Card';


function App() {
 
  const [Nam, setNam] = useState("");
  const [Imgurl, setImgurl] = useState("");
  const [Role, setRole] = useState("");
  let [Desc, setDesc] = useState("");
  let [Alluser, setAlluser] = useState([])
  function formaction(e){
    e.preventDefault(); 
    const olduser  = [...Alluser];
    olduser.push({Nam,Imgurl,Role,Desc})
    setAlluser(olduser)
    console.log(Alluser)
    setNam("")
    setDesc("")
    setImgurl("")
    setRole("")
  }
  return (
   <>
   <div className="box h-screen w-screen  text-white bg-black ">
   <form action="" className=' p-2.5 gap-2.5 flex flex-wrap  justify-center   '
   onSubmit={formaction}>
    <input type="text" className=' bg-gray-900 uppercase font-bold border-2 border-white rounded  w-[45%] px-5  py-2.5 ' 
    placeholder='name ' value={Nam}  onChange={(e) => { setNam(e.target.value);}} />
    <input type="text" className=' bg-gray-900 uppercase font-bold border-2 border-white rounded  w-[45%] px-5  py-2.5 '
     placeholder='img url  ' value={Imgurl} onChange={(e) => { setImgurl(e.target.value);}} />
    <input type="text" className=' bg-gray-900 uppercase font-bold border-2 border-white rounded  w-[45%] px-5  py-2.5 '
     placeholder='role '  value={Role} onChange={(e) => { setRole(e.target.value);}} />
    <input type="text" className=' bg-gray-900 uppercase font-bold border-2 border-white rounded  w-[45%] px-5  py-2.5 '
     placeholder='description ' value={Desc}  onChange={(e) => { setDesc(e.target.value);}} />
    <button className=' w-[90%]  bg-emerald-400  border-2 rounded active:scale-95  text-2xl uppercase  '>add </button>

   </form>

  <div className="second overflow-y-auto h-[70%]  gap-5 flex flex-wrap">
  {Alluser.map((e,idx)=>{
   
   
    return <Card  key={idx} data={e}  />
  
})}

 
</div>


  </div>
  

   </>
  )
}

export default App 