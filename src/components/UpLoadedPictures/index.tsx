import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import {
  MdAddPhotoAlternate as AddPhoto,
  MdDelete as Delete,
} from "react-icons/md";
import { UpLoadedPicturesProps } from "@/components/UpLoadedPictures/types";

const UpLoadedPictures: React.FC<UpLoadedPicturesProps> = ({
  getUploadedImages,
}) => {
  const [upLoadedPictures, setUpLoadedPictures] = useState<string[]>([]);

  useEffect(() => {
    getUploadedImages(upLoadedPictures);
  }, [upLoadedPictures]);

  const download = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const [file] = target.files;
    console.log([file]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpLoadedPictures([...upLoadedPictures, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  const remove = (picture: string) => {
    setUpLoadedPictures(upLoadedPictures.filter((img) => img != picture));
  };

  return (
    <div className={style.wrapperPictures}>
      {upLoadedPictures.map((picture, index) => (
        <div className={style.wrapperPicture} key={index}>
          <label
            className={style.labelButtonDelete}
            onClick={() => remove(picture)}
          >
            <img
              className={style.loadedPicture}
              src={picture}
              alt={"picture"}
            />
            <Delete className={style.iconDelete} />
          </label>
        </div>
      ))}

      <div className={style.wrapperPicture}>
        <label className={style.labelAddPicture}>
          <input
            hidden={true}
            type={"file"}
            accept={"image/jpeg, image/png"}
            onChange={(e) => download(e)}
          />
          <AddPhoto className={style.iconAddPhoto} />
        </label>
      </div>
    </div>
  );
};

export default UpLoadedPictures;
