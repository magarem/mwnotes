import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import * as React from "react";

import { useSubmit } from "react-router-dom";
import { createNote, getFolderListItems, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

import { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from "uuid";
// import { Col, Card, Button, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from "react-bootstrap";
import invariant from "tiny-invariant";
// import Row from "react-bootstrap/esm/Row";
// import { Col, Card } from "react-bootstrap";
const CDNURL = "https://lpbqbqcmlspixeiikhcb.supabase.co/storage/v1/object/public/files/";
export const supabase = createClient('https://lpbqbqcmlspixeiikhcb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk')


export async function loader({ request, params }: LoaderArgs) {
  
  const env = {
    SUPABASE_URL_RAW: process.env.SUPABASE_URL_RAW!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  }
  
  const userId = await requireUserId(request);
  // invariant(params.noteId, "noteId not found");

  // const folders = await getFolderListItems({ userId });
  
  // console.log('folders:', folders);

  return json({ env });
}


export async function action({ request }: ActionArgs) {

  const userId = await requireUserId(request);
  const formData = await request.formData();
  // const folder = formData.get("folder");
  const title = formData.get("title");
  const body = formData.get("body");
  const tags = formData.get("tags");
  const image = formData.get("image");
  console.log(title, body, image);
  
  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: { title: "Title is required", body: null } },
      { status: 400 }
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json(
      { errors: { title: null, body: "Body is required" } },
      { status: 400 }
    );
  }
  // img = "https://lpbqbqcmlspixeiikhcb.supabase.co/storage/v1/object/public/files/" + image
  const note = await createNote({ title, body, img:image, tags, userId });

  return redirect(`/notes/${note.id}`);
}

export default function NewNotePage() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const titleRef = React.useRef<HTMLTextAreaElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);
  const tagsRef = React.useRef<HTMLTextAreaElement>(null);
  const imageRef = React.useRef<HTMLTextAreaElement>(null);
  const [file, setfile] = useState([]);
  const [filesData, setFilesData] = useState([]);
  const [db_fileName, db_setFileName] = useState([]);
  const submit = useSubmit();


  // console.log('data:', data.folders);
  
  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);


  const folderNew = async () => {
    try {
      const config = {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      }
      const response = await fetch('url', config)
      //const json = await response.json()
      if (response.ok) {
          //return json
          return response
      } else {
          //
      }
  } catch (error) {
          //
  }
  }

  return (
    <div>
      <Form
        name="form1"
        method="post"
        // onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
        }}
      >
        <div>
          {/* <label className="flex w-full flex-col gap-1  text-gray-50"> */}
            {/* <label htmlFor="folder" className="flex w-full flex-col gap-1  text-gray-50">Pasta
            <select id="folder" name="folder" className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6">
             {data.folders.map((item: any)=>
              <option key={item.id} value={item.id}>{item.name}</option>
             )}
            </select>
            </label> */}
            <label htmlFor="title" className="flex w-full flex-col gap-1  text-gray-50">Titulo: 
            <input
              autoFocus
              ref={titleRef}
              id="title"
              name="title"
              className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              aria-invalid={actionData?.errors?.title ? true : undefined}
              aria-errormessage={
                actionData?.errors?.title ? "title-error" : undefined
              }
            />
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1  text-gray-50">
            <span>Texto: </span>
            <textarea
              ref={bodyRef}
              name="body"
              rows={8}
              className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              aria-invalid={actionData?.errors?.body ? true : undefined}
              aria-errormessage={
                actionData?.errors?.body ? "body-error" : undefined
              }
            />
          </label>
         
        </div>
        <div>
        <label htmlFor="tags" className="flex w-full flex-col gap-1  text-gray-50">Marcadores: 
            <input
              autoFocus
              ref={tagsRef}
              id="tags"
              name="tags"
              className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
              aria-invalid={actionData?.errors?.title ? true : undefined}
              aria-errormessage={
                actionData?.errors?.title ? "title-error" : undefined
              }
            />
          </label>
        </div>
        <div>
        <label className="flex w-full flex-col gap-1  text-gray-50">
          <span>Imagem: </span>
          <input
            ref={imageRef}
            name="image"
            className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
          />
        </label>
      </div>

        {/* <div>
          <label className="flex w-full flex-col gap-1">
            <span>Img: </span>
            <input type="file" name="image" onChange={handleFileSelected} />
          </label>
        </div> */}

        <div className="text-left mt-3">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Salvar
          </button>
          
        </div>
      
      </Form>
      {/* <div style={{width: '80%', margin: 'auto', marginTop: '100px'}}>
            <Row xs={1} md={4} className="g-4">
              {filesData.filter((x)=>!x.name.includes('undefined')).map((image) => {
                return (
                  <Col key={CDNURL + "/" + image.name}>
                    <Card >
                      <Card.Img variant="top" src={CDNURL + "/" + image.name} />
                      <Card.Body>
                        <Button key={CDNURL + "/" + image.name} variant="danger" onClick={() => deleteImage(image.name)}>Delete Image</Button>
                       </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
            
        </div> */}
    </div>
  );
}
