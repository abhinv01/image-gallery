// import download from "../download.svg";
// import { saveAs } from "file-saver";

import DownloadIcon from "./DownloadIcon";

function Image({ data }) {
  const handleDownload = async (imgSrc, imgName, forceDownload = false) => {
    if (!forceDownload) {
      console.log("download");
      const link = document.createElement("a");
      link.href = imgSrc;
      link.download = imgName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    const imageBlob = await fetch(imgSrc)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new Blob([buffer], { type: "image/jpeg" }));

    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = imgName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full relative">
      {/* <img className="h-12" src={download} alt="123"></img>
      <button onClick={() => handleDownload(download, "s", true)}>
        dbdbddb
      </button> */}
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          loading="lazy"
          src={data.urls.small}
          alt={data.alt_description}
          className="h-full w-full object-cover rounded-lg shadow-md"
        ></img>
      </a>
      <button
        onClick={() =>
          handleDownload(data.urls.regular, data.description, true)
        }
        className="absolute bottom-1 right-2 opacity-50 hover:opacity-100 bg-gray-100 rounded-lg md:rounded-2xl cursor-pointer h-6 w-6 md:h-12 md:w-12"
      >
        <DownloadIcon></DownloadIcon>
      </button>
    </div>
  );
}

export default Image;
