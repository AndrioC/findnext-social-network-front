import { message } from "antd";
import { RcFile } from "antd/lib/upload";

export const fakeRequest = async (onSuccess: any): Promise<void> => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export function beforeUpload(file: File): boolean {
  const checkFormat = file.type === "image/jpeg" || file.type === "image/png";
  if (!checkFormat) {
    message.error(
      "You can only upload images with the following extensions: .png,.jpg,.jpeg"
    );
  }
  const checkSize = file.size / 1024 / 1024 < 5;
  if (!checkSize) {
    message.error("The image must be smaller than 5MB!");
  }
  return checkFormat && checkSize;
}

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
