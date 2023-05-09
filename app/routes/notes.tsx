import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import { useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'
import { useEffect, useState } from "react";
import { Tree } from "react-arborist";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  console.log(4, noteListItems);
  return json( noteListItems );
}

export default  function NotesPage() {
  const navigate = useNavigate()
  const data = useLoaderData<typeof loader>();
  console.log('data:', data);
  
  const user = useUser();
  const [showSideBar, setShowSideBar] = useState(true)
  const [dataTree, setDataTree] = useState(data)
 
  function Node({ node, style, dragHandle }) {
    /* This node instance can do many things. See the API reference. */
    return (
      
      <div style={style} ref={dragHandle}>
        {node.isLeaf ? "" : "🗀"}
        <a className="no-underline" href={"/notes/" + node.data.id}>{node.data.title}</a>  
      </div>
     
    );
  }
  
  const data2 = [
    { id: "1", name: "Unread", link: "/notes" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" },
      ],
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" },
      ],
    },
  ];

  useEffect(() => {
    setDataTree(data)
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
        
        <button onClick={()=>{handleToggleSideBar()}}> 
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        <h5 className="text-1xl font-sans	pt-1 pl-2">
          <Link to="." className="no-underline text-yellow-500">MW Notes</Link>
        </h5>
        {user.id}
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
      <aside className=" pl-5 w-[150px] py-3 ">
          <div className="">
          <a href='/notes/new'><svg className="h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <line x1="9" y1="14" x2="15" y2="14" /></svg></a>
          <Tree
            initialData={dataTree}
            openByDefault={true}
            width={150}
            height={1000}
            indent={24}
            rowHeight={25}
            overscanCount={1}
            paddingTop={20}
            paddingBottom={5}
            padding={10 /* sets both */}
          >
            {Node}
          </Tree>
          </div>
      </aside>
      }
      {false&&
      <aside id="default-sidebar" className=" top-0 left-0 z-40 w-80 h-screen ">
        <div >

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
            <ul>
              {data.noteListItems.map((note, index) => {
                // let a = note.folder
                return (
                <div key={note.id} >
                  {/* {note.folder.name} */}
                  {index==0&&<div className="text-slate-100">{note.folder.name}</div>}
                  {data.noteListItems[index==0?0:index-1].folder.id!==data.noteListItems[index].folder.id&&<div className="text-slate-100">{note.folder.name}</div>}
                  <ul className="flex space-x-1">
                  <li className="text-slate-300 ">
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
            </ul>
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
