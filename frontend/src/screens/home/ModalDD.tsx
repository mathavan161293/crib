import Button from "../../components/UI/Form/Button";
import Input from "../../components/UI/Form/Input";

interface ModalProps {
  data: any;
  showModal: boolean;
  handleChange: any;
  submitForm: any;
  errors: any;
  handleCloseModal: () => void;
}

export default function ModalDD({
  data,
  showModal,
  handleChange,
  submitForm,
  errors,
  handleCloseModal,
}: ModalProps) {
  return showModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={handleCloseModal}
      ></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <h2 className="text-center text-xl font-bold text-gray-700 mb-3">
            Create Crib
          </h2>
          <Input
            label="Name"
            name="name"
            error={errors.name}
            value={data.name}
            onChange={handleChange}
          />
          <Input
            label="Image Url"
            name="img"
            error={errors.img}
            value={data.img}
            onChange={handleChange}
          />
          <Input
            label="Location"
            name="location"
            error={errors.location}
            value={data.location}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between">
            <Button
              name="Close"
              className="bg-gray-400 hover:bg-gray-500"
              onClick={handleCloseModal}
            />
            <Button name="Save" onClick={() => submitForm(data.id)} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
