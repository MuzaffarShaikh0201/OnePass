import { MMKV } from "react-native-mmkv";

export const globalStorage = new MMKV({
    id: "global-storage",
    encryptionKey: "48c2de8b1c1588fa4138ca1533aa1842",
});
