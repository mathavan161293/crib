import React, { useState, useEffect } from "react";
import Table from "../../components/UI/Table";
import TableSearch from "../../components/UI/Table/TableSearch";
import { Crib, FormCrib } from "../../interface/crib";
import {
  getCribs,
  postCrib,
  updateCrib,
  removeCrib,
} from "../../services/fetch";
import Modal from "./Modal";

export interface State {
  cribs: Crib[];
  loading: boolean;
}

export default function Home() {
  const [state, setState] = useState<State>({
    cribs: [],
    loading: false,
  });
  const [form, setForm] = useState<FormCrib>({
    name: "",
    img: "",
    location: "",
  });
  const [errors, setErrors] = useState<FormCrib>({
    name: "",
    img: "",
    location: "",
  });
  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    initialStart();
  }, []);

  const initialStart = async () => {
    await getCribs().then((res: any) =>
      setState((s: State) => ({
        ...s,
        cribs: res,
        loading: false,
      }))
    );
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((s: FormCrib) => ({ ...s, [name]: value }));
  };

  const isValidation = async () => {
    setErrors((s: FormCrib) => ({ ...s, name: "", img: "", location: "" }));
    if (form.name === "") {
      setErrors((s: FormCrib) => ({ ...s, name: "Name cannot be Empty" }));
      return false;
    }
    if (form.img === "") {
      setErrors((s: FormCrib) => ({ ...s, img: "Image cannot be Empty" }));
      return false;
    }
    if (form.location === "") {
      setErrors((s: FormCrib) => ({
        ...s,
        location: "Location cannot be Empty",
      }));
      return false;
    }

    return true;
  };

  const handleEdit = async (crib: Crib) => {
    setForm((s: FormCrib) => ({ ...s, ...crib }));
    setShowModal(true);
  };

  const submitForm = async (id: string) => {
    if (await isValidation()) {
      if (id) await updateCrib(id, form).then(() => initialStart());
      else await postCrib(form).then(() => initialStart());
      handleCloseModal();
    }
  };

  const handleDelete = async (id: string) => {
    await removeCrib(id).then(() => initialStart());
  };

  const handleCloseModal = () => {
    setForm(() => ({ name: "", img: "", location: "" }));
    setShowModal(false);
  };

  return (
    <>
      <div className="md:p-10 p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <TableSearch
              search={search}
              onChange={(e: any) => setSearch(e.target.value)}
              setShowModal={setShowModal}
            />

            <Modal
              data={form}
              showModal={showModal}
              errors={errors}
              handleChange={handleChange}
              submitForm={submitForm}
              handleCloseModal={handleCloseModal}
            />
            {state.cribs.length > 0 && (
              <Table
                cribs={state.cribs}
                search={search}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
