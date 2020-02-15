using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System;
using System.IO;
using Microsoft.Extensions.Options;
using Profile4d.Domain;

namespace Profile4d.Storage
{
  public class Blob : IBlob
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Blob(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }
    public void SaveBase64(Image data)
    {
      CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(_connStr.Value.Storage);
      CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
      CloudBlobContainer container = cloudBlobClient.GetContainerReference("images-staging");
      CloudBlockBlob blob = container.GetBlockBlobReference(data.Name);

      byte[] img = Convert.FromBase64String(data.Src.Substring(data.Src.IndexOf(",") + 1));
      blob.Properties.ContentType = data.Mime;
      blob.UploadFromByteArray(img, 0, img.Length);

      
      // MemoryStream ms = new MemoryStream(Convert.FromBase64String(data.Src.Substring(data.Src.IndexOf(",") + 1)));
      
      // BlobServiceClient blobServiceClient = new BlobServiceClient(_connStr.Value.Storage);
      // BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("images-staging");
      
      // containerClient.UploadBlob(data.Name, ms);
      
      // BlobClient blobClient = containerClient.GetBlobClient(data.Name);
      // blobClient.Upload(ms);

      // var bytes = Convert.FromBase64String(data.Src.Substring(data.Src.IndexOf(",") + 1));
      // using (var stream = new MemoryStream(bytes))
      // {
      //   blobClient.Upload(stream);
      // }

      // blobClient.Upload(data.Src.Substring(data.Src.IndexOf(",") + 1));
    }

    public BlobDownloadInfo ShowImage(string file)
    {
      BlobServiceClient blobServiceClient = new BlobServiceClient(_connStr.Value.Storage);
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("images-staging");
      BlobClient blobClient = containerClient.GetBlobClient(file);

      return blobClient.Download();
    }
  }
}