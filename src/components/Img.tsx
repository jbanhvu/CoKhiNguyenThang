import { photoSrc, photoSrcSm, type Photo } from "../data/siteData";

type ImgProps = {
  photo: Photo;
  className?: string;
  /** Ảnh trong màn hình đầu tiên: tải ngay, không lazy-load. */
  priority?: boolean;
  /** Gợi ý độ rộng hiển thị để trình duyệt chọn bản nhỏ hay lớn. */
  sizes?: string;
};

export function Img({ photo, className = "", priority = false, sizes = "(min-width: 1024px) 33vw, 100vw" }: ImgProps) {
  return (
    <img
      src={photoSrc(photo.name)}
      srcSet={`${photoSrcSm(photo.name)} 640w, ${photoSrc(photo.name)} 1280w`}
      sizes={sizes}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
