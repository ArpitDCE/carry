import { Add, Upload, Cancel } from "@mui/icons-material";
import { navBarEntery } from "../../Type";
import { useState } from "react";
import { JSX } from "@emotion/react/jsx-runtime";
const Post = () => {
  const itemType = navBarEntery.map((type, index) => (
    <option key={index}>{type}</option>
  ));

  const [images, setImages] = useState<string[]>([]);
  const [uploads, setUploads] = useState<JSX.Element[]>([]);

  const handelPost=()=>{

  }

  const handelRemove = (index: number) => {
    const newUpload = uploads;
    newUpload.filter((_, i) => i != index);
    setUploads([...newUpload]);
  };

  const handelUpload = () => {
    if (uploads.length < 4) {
      setUploads(
        images.map((image, index) => (
          <div className="w-[4em] h-[4em]">
            <button
              className="relative top-[30%] left-[70%] cursor-pointer"
              onClick={() => handelRemove(index)}
            >
              <Cancel />
            </button>
            <img src={image} key={index} className="w-full h-full"></img>
          </div>
        ))
      );
    } else {
      window.alert("cannot upload more than 4 images");
    }
  };
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.currentTarget?.files?.[0];
    if (file) {
      setImages((prevImages) => [...prevImages, URL.createObjectURL(file)]);
    }
  };
  return (
    <>
      <div className="border border-gray-400 w-[98vw] h-[25vh] rounded-xl flex items-center justify-between">
        {/*image container*/}
        <div className="flex justify-between items-end border-none rounded-xl bg-gray-400 w-[50vw] h-[22vh] ml-2">
          {/** uploaded image display */}
          <div className="w-[85%] h-[100%] border-none flex flex-row gap-2 p-2">
            {uploads}
          </div>
          {/** upload and add buttons */}
          <div className="flex flex-row w-[6em]">
            <button
              onClick={handelUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer m-2">
              <Upload fontSize="large" />
            </label>

            <input
              id="add"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            ></input>
            <label
              htmlFor="add"
              className="m-2 cursor-pointer relative right-[5%]"
            >
              <Add fontSize="large" />
            </label>
          </div>
        </div>
        {/*input data field*/}
        <div className="mr-2">
          <form className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 outline-none p-1 rounded w-[45vw]"
            ></input>
            <input
              type="text"
              placeholder="Country,City,Locality"
              className="border border-gray-400 outline-none p-1 rounded w-[45vw]"
            ></input>
            <select className="outline-none border border-gray-400 rounded-xl p-1">
              {itemType}
            </select>
            <button type="submit" form="upload-post" className="border outline-none bg-black rounded-xl p-2 text-white w-[8vw]"
            onClick={handelPost}>
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;
