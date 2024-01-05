import axios from "axios";
import { getToken } from "./userService";

export async function getPreSignedUrl(values) {
  console.log('val', values)
  try {
    const response = await axios.get(
      "https://brain.immersely.ai/api/v1/preSignedUrl",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`,
        },
        params: {
          key: values.name,
          size: values.size,
          mimetype: values.type,
        },
      }
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getMultipartPresignedUrls(key, size, mimetype, numParts) {
  // Call your server-side API to get the presigned URLs
  // Replace this URL with the actual endpoint in your application
  console.log("getMultipartPresignedUrls", key, size, mimetype, numParts)
  const response = await axios.post(
    "https://brain.immersely.ai/api/v1/preSignedUrl/multi", 
    {
    key,
    size,
    mimetype,
    numParts,
  });

  return response.data;
}


export async function uploadGameFile(fileData) {
  console.log(fileData);
  try {
    const response = await axios.post(
      "https://brain.immersely.ai/api/v1/gameFile",
      fileData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`,
        },
      }
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return null;
  }
}


export async function completeMultipartUpload(completeUrl, uploadId, parts) {
  const response = await axios.post(completeUrl, {
    UploadId: uploadId,
    MultipartUpload: {
      Parts: parts,
    },
  });

  return response.data;
}

export async function getGameFile() {
  try {
    const response = await axios.get(
      "https://brain.immersely.ai/api/v1/gameFile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`,
        },
      }
    );
    console.log("response ", response);
    return response.data;
  } catch (error) {
    return null;
  }
}
