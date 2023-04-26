import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import { useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'
export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function NotesPage() {
  const navigate = useNavigate()
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  const folderNew = () => {
    let a = prompt("Nome da pasta")
    folderNew(a)
 }

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex pt-6 items-center justify-between bg-slate-800 p-2 text-white no-underline">
        <h5 className="text-1xl font-sans	pt-1 pl-2">
          <Link to="." className="no-underline text-yellow-500">MW Notes</Link>
        </h5>
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
     
        <div className="h-full w-1/5 ">
        <div class="inline-flex rounded-md shadow-sm h-100 mt-3 pl-3" role="group">
        
        <button  onClick={() => navigate("/folderNew")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 text-white">
          + pasta
        </button> 
        <button type="button" onClick={() => navigate("new")}  className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700  text-white">
          + nota
        </button>
      </div>

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
                <>
                  {/* {note.folder.name} */}
                  {index==0&&<div className="text-slate-100">{note.folder.name}</div>}
                  {data.noteListItems[index==0?0:index-1].folder.id!==data.noteListItems[index].folder.id&&<div className="text-slate-100">{note.folder.name}</div>}
                  <ul className="flex space-x-3">
                  <li key={note.id} className="text-slate-300">
                    <NavLink
                      className={({ isActive }) =>
                        `block no-underline p-1 text-base ${isActive ? "text-green-400" : "text-slate-100"}`
                      }
                      to={note.id}
                    >
                       {note.folder.name} {note.title}
                    </NavLink>
                  </li>
                  </ul>
                </>
              )})}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
