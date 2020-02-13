using Profile4d.Domain;
using Azure.Storage.Blobs.Models;

namespace Profile4d.Storage
{
  public interface IBlob
  {
    public void SaveBase64(Image data);
    public BlobDownloadInfo ShowImage(string arquivo);
  }
}