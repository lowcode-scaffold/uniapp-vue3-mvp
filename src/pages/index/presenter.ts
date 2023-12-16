import Service from "./service";
import { useModel } from "./model";

export const usePresenter = () => {
  const model = useModel();
  const service = new Service(model);

  const handleChange = (data: { value: string }) => {
    console.log(data.value);
  };

  return {
    model,
    service,
    handleChange,
  };
};
