import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { folderCreate } from "~/models/note.server";
import { requireUserId } from "~/session.server";

import { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from "uuid";
// import { Col, Card, Button, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from "react-bootstrap";
// import Row from "react-bootstrap/esm/Row";
// import { Col, Card } from "react-bootstrap";
const CDNURL = "https://lpbqbqcmlspixeiikhcb.supabase.co/storage/v1/object/public/files/";
export const supabase = createClient('https://lpbqbqcmlspixeiikhcb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYnFicWNtbHNwaXhlaWlraGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDU1ODksImV4cCI6MTk5NjIyMTU4OX0.EIGOPYgY4iebJJ1jpJNCoioJZSE9XU83ZPWUhCsgUSk')


export async function action({ request }: ActionArgs) {
  
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const folderName = formData.get("folderName");
  console.log('folderName:', folderName);
  const ret = await folderCreate({ folderName, userId});
  console.log('ret:', ret);
  return redirect(`/notes`);
}

export default function NewNotePage() {

//   const actionData = useActionData<typeof action>();
  const folderNameRef = React.useRef<HTMLTextAreaElement>(null);

//   React.useEffect(() => {
//     if (actionData?.errors?.title) {
//       titleRef.current?.focus();
//     } else if (actionData?.errors?.body) {
//       bodyRef.current?.focus();
//     }
//   }, [actionData]);


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
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
        }}
      >
        <div>
          <label className="flex w-full flex-col gap-1  text-gray-50">
            <span>Nome da pasta: </span>
            <input
              ref={folderNameRef}
              id="folderName"
              name="folderName"
              className="w-full flex-1 rounded-md border-0 text-gray-50 bg-slate-700 border-slate-800 px-2 py-2 !outline-none text-lg leading-6"
            />
          </label>
        </div>
        <div className="text-left mt-3">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Salvar
          </button>
        </div>
      </Form>
    </div>
  );
}
