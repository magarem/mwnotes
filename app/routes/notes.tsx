import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import { useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'
import { useEffect, useState } from "react";
export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function NotesPage() {
  const navigate = useNavigate()
  const data = useLoaderData<typeof loader>();
  const user = useUser();
  const [showSideBar, setShowSideBar] = useState(false)


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth<380) {
        setShowSideBar(false) //console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      } 
    }
    window.addEventListener('resize', handleResize)
  })

//   const folderNew = () => {
//     let a = prompt("Nome da pasta")
//     folderNew(a)
//  }
const handleToggleSideBar = () => {
  //togglesidebar with useState
  setShowSideBar(!showSideBar);
  }
  
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline">
        <h5 className="text-1xl font-sans	pt-1 pl-2">
          <Link to="." className="no-underline text-yellow-500">MW Notes</Link>
        </h5>
        <button onClick={()=>{handleToggleSideBar()}}> 
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        {/* <p className="pt-2 text-xs">{user.email}</p> */}
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 px-4 py-1 text-blue-100 hover:bg-blue-500 active:bg-blue-600 text-xs"
          >
            {user.email}
          </button>
        </Form>
      </header>

      <main className="flex h-full">
     
      {showSideBar&&
      <aside id="default-sidebar" >
        <div className="h-full w-140 pt-2">

        {/* <div className="inline-flex rounded-md shadow-sm h-15 mt-3 pl-3" role="group"> */}
          <button onClick={() => navigate("/folderNew")} type="button" className="m-1 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded">
            + pasta
          </button> <br/>
          <button type="button" onClick={() => navigate("new")}  className="m-1 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded">
            + nota
          </button>
        {/* </div> */}
        {/*     
          <Link to="/folderNew" className="no-underline block p-2 ml-7 text-base text-greew-300">
            + Nova pasta
          </Link>
          <Link to="new" className="no-underline block p-2 ml-7 text-base text-greew-300">
            + Nova nota
          </Link> */}
          <br/><br/>
          {/* <hr /> */}

          {data.noteListItems.length === 0 ? (
            <p className="p-2">Nenhuma nota ainda</p>
          ) : (
            <ol>
              {data.noteListItems.map((note, index) => {
                // let a = note.folder
                return (
                <div key={note.id} >
                  {/* {note.folder.name} */}
                  {index==0&&<div className="text-slate-100">{note.folder.name}</div>}
                  {data.noteListItems[index==0?0:index-1].folder.id!==data.noteListItems[index].folder.id&&<div className="text-slate-100">{note.folder.name}</div>}
                  <ul className="flex space-x-1">
                  <li className="text-slate-300 ml-[-15%]">
                    <NavLink
                      className={({ isActive }) =>
                        `block no-underline p-1 text-base ${isActive ? "text-green-400" : "text-slate-100"}`
                      }
                      to={note.id}
                    >
                       {note.title}
                    </NavLink>
                  </li>
                  </ul>
                </div>
              )})}
            </ol>
          )}
        </div>
      </aside>
      }
        <div className="flex-1 p-6">
          
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}
