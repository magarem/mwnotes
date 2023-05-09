import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import * as React from "react";

import {  getProjectList } from "~/models/project.server";
import { requireUserId } from "~/session.server";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export async function loader({ request, params }: LoaderArgs) {
  
  const userId = await requireUserId(request);
  console.log('userId:', userId);
  const data = getProjectList({userId})
  console.log('data:', data);
  
  return json({ userId, data });
}

export async function action({ request }: ActionArgs) {
  
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const name = formData.get("name");
  console.log('name:', name);
  // const ret = await projectCreate({ name, userId});
  // console.log('ret:', ret);
  return redirect(`/notes`);
}

export default function Project() {
  const data = useLoaderData<typeof loader>();
  const [projects, setProjects] = useState(data)
//   const actionData = useActionData<typeof action>();
  const nameRef = React.useRef<HTMLTextAreaElement>(null);

//   React.useEffect(() => {
//     if (actionData?.errors?.title) {
//       titleRef.current?.focus();
//     } else if (actionData?.errors?.body) {
//       bodyRef.current?.focus();
//     }
//   }, [actionData]);


  return (
    <div className="p-10">
      
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
          <div>{projects}</div>
          <h2 className="text-gray-50">Nova pasta</h2>
          <label className="flex w-full flex-col gap-1  text-gray-50">
            <span>Nome: </span>
            <input
              autoFocus
              ref={nameRef}
              id="name"
              name="name"
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
          </button>{' '}
          <Link to="/notes" >Cencelar</Link>
        </div>
      </Form>
    </div>
  );
}
