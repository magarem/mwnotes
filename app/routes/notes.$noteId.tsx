import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import { Link } from "@remix-run/react"
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";
import { useNavigate } from "@remix-run/react"

export async function loader({ request, params }: LoaderArgs) {
  
  const env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  }
  
   
  
  
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  note.userid = userId
  console.log(note);
  
  return json({ userId, note, env });
}

export async function action({ request, params }: ActionArgs) {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  await deleteNote({ userId, id: params.noteId });

  return redirect("/notes");
}

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();
  const CDNURL = ""//  data.env.SUPABASE_URL_RAW + "storage/v1/object/public/files/" + data.userId + '/' //"https://lpbqbqcmlspixeiikhcb.supabase.co/storage/v1/object/public/files";
  let navigate = useNavigate()


  return (
    <div className="bg-dark text-slate-50">
      <h3 className="text-2xl font-bold">{data.note.title}</h3>
      <p className="py-6"><pre>{data.note.body}</pre></p>
      <p className="py-6">{data.note.img&&<img src={`${data.note.img}`} alt="dd" style={{width: '100px'}}/>}</p>
      {/* <hr className="my-4" /> */}
      <Form method="post">
        <button type="button" onClick={() => navigate("/notes/edit/" + data.note.id)}
        className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600 focus:bg-blue-400"
        >Edit</button>{" "}
        <button
          type="submit"
          className="rounded bg-red-500  px-4 py-1 text-white hover:bg-red-800 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
