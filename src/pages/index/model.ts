import { ref } from "vue";

export const useModel = () => {
  const title = ref("hello");
  return { title };
};

export type Model = ReturnType<typeof useModel>;
