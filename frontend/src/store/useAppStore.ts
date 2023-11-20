import { create } from "zustand";
type TAppStore = {
  isShowModel: boolean;
  contentModel: any;
  setShowModel: (isShowModel: boolean, contentModel: any) => void;
};
const useAppStore = create<TAppStore>((set) => ({
  isShowModel: false,
  contentModel: null,
  setShowModel: (isShowModel: boolean, contentModel: any) =>
    set(() => ({ isShowModel, contentModel })),
}));

export default useAppStore;
