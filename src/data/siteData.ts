import {
  Award,
  BookOpen,
  Clock3,
  Cog,
  DraftingCompass,
  Gauge,
  HardHat,
  Handshake,
  Ruler,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Ảnh: file nằm trong public/images, tạo bởi scripts/optimize-images.mjs
// ---------------------------------------------------------------------------

export type Photo = { name: string; alt: string };

export const photo = (name: string, alt: string): Photo => ({ name, alt });
export const photoSrc = (name: string) => `/images/${name}.webp`;
export const photoSrcSm = (name: string) => `/images/${name}-sm.webp`;

export const logoSrc = "/images/logo-transparent.png";

// ---------------------------------------------------------------------------
// Thông tin doanh nghiệp
// ---------------------------------------------------------------------------

export const company = {
  name: "Công ty TNHH Cơ Khí Nguyễn Thắng",
  shortName: "Cơ Khí Nguyễn Thắng",
  tagline: "Gia công cơ khí chính xác",
  representative: "Nguyễn Thắng",
  position: "Giám đốc",
  phones: ["0902 722 077", "0901 236 148"],
  phoneHref: "tel:0902722077",
  zaloPhone: "0901 236 148",
  zaloHref: "https://zalo.me/0901236148",
  taxCode: "3502583022",
  email: "congtycokhithangnguyen@gmail.com",
  emailHref: "mailto:congtycokhithangnguyen@gmail.com",
  address: "Thửa đất số 564, tờ bản đồ số 85, Ấp 4, xã Xuân Sơn, Thành phố Hồ Chí Minh",
  addressShort: "Ấp 4, xã Xuân Sơn, TP. Hồ Chí Minh",
  hours: [
    { days: "Thứ 2 – Thứ 7", time: "7:30 – 17:30" },
    { days: "Chủ nhật", time: "Nhận việc gấp qua hotline" },
  ],
};

export const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Năng lực", href: "/nang-luc" },
  { label: "Sản phẩm", href: "/du-an" },
  { label: "Báo giá", href: "/bao-gia" },
  { label: "Liên hệ", href: "/lien-he" },
];

// SỐ LIỆU MẪU – cần thay bằng số liệu thật của công ty trước khi đưa website lên mạng.
export const stats = [
  { value: "15+", label: "Năm kinh nghiệm nghề cơ khí" },
  { value: "20+", label: "Máy CNC và máy gia công cơ" },
  { value: "±0,01 mm", label: "Dung sai gia công đạt được" },
  { value: "300+", label: "Khách hàng doanh nghiệp đã phục vụ" },
];

export const pageImages = {
  home: photo("may-cnc-tai-xuong", "Máy phay CNC tại xưởng Cơ Khí Nguyễn Thắng"),
  about: photo("banh-rang-tai-xuong", "Bánh răng thành phẩm tại xưởng"),
  services: photo("may-phay-cnc-dang-gia-cong", "Máy phay CNC đang gia công chi tiết"),
  capabilities: photo("bac-ong-tai-xuong-2", "Bạc và ống thép sau gia công tiện CNC"),
  projects: photo("dia-thep-cat-cnc", "Đĩa thép cắt CNC theo bản vẽ"),
  quote: photo("vong-bac-duong-kinh-lon", "Vòng bạc đường kính lớn gia công tiện"),
  contact: photo("dia-thep-cat-cnc-2", "Chi tiết thép tấm cắt CNC"),
};

// ---------------------------------------------------------------------------
// Dịch vụ
// ---------------------------------------------------------------------------

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  icon: LucideIcon;
  image: Photo;
  intro: string[];
  scope: string[];
  specs: { label: string; value: string }[];
  materials: string[];
  deliverables: string[];
  gallery: Photo[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "gia-cong-co-khi-chinh-xac-cnc",
    title: "Gia công cơ khí chính xác CNC",
    summary: "Phay, tiện CNC chi tiết máy, linh kiện, jig và đồ gá theo bản vẽ với dung sai đến ±0,01 mm.",
    seoDescription:
      "Gia công CNC phay, tiện chi tiết máy, linh kiện, jig fixture theo bản vẽ, dung sai đến ±0,01 mm. Nhận đơn từ 1 chi tiết mẫu đến lô sản xuất.",
    icon: Gauge,
    image: photo("may-phay-cnc-dang-gia-cong", "Máy phay CNC đang gia công chi tiết thép"),
    intro: [
      "Gia công CNC là năng lực cốt lõi của Cơ Khí Nguyễn Thắng. Xưởng vận hành song song các máy phay CNC, tiện CNC và máy gia công cơ truyền thống, nhờ vậy có thể nhận cả chi tiết đơn chiếc cần làm gấp lẫn đơn hàng loạt vài trăm sản phẩm.",
      "Mỗi đơn hàng đều bắt đầu bằng việc đọc kỹ bản vẽ, xác định chuẩn gá và lập trình CAM trước khi đưa lên máy. Chi tiết được đo kiểm bằng thước cặp, panme, đồng hồ so và calip trong suốt quá trình gia công, không chỉ ở khâu cuối.",
      "Với các chi tiết thay thế không còn bản vẽ, đội kỹ thuật có thể đo mẫu thực tế, dựng lại bản vẽ 2D/3D và gia công đúng kích thước lắp lẫn.",
    ],
    scope: [
      "Phay CNC 3 trục: mặt phẳng, hốc, rãnh, biên dạng phức tạp",
      "Tiện CNC: trục, bạc, mặt bích, ren trong và ren ngoài",
      "Gia công jig, fixture, đồ gá kiểm tra cho dây chuyền",
      "Gia công chi tiết thay thế theo mẫu thực tế",
      "Khoan, taro, doa lỗ chính xác",
      "Gia công chi tiết nhựa kỹ thuật: POM, PE, PA, Teflon",
    ],
    specs: [
      { label: "Dung sai kích thước", value: "±0,01 – ±0,02 mm" },
      { label: "Độ nhám bề mặt", value: "Ra 0,8 – 3,2 µm" },
      { label: "Hành trình phay tối đa", value: "1.000 × 500 × 500 mm" },
      { label: "Đường kính tiện tối đa", value: "Ø 500 mm, dài 1.500 mm" },
      { label: "Số lượng", value: "Từ 1 chi tiết mẫu đến lô 1.000 chi tiết" },
      { label: "Thời gian", value: "Chi tiết đơn giản: 2 – 5 ngày làm việc" },
    ],
    materials: ["Thép C45, SS400", "Thép hợp kim SCM440, SKD11", "Inox 201, 304, 316", "Nhôm 6061, 7075", "Đồng thau, đồng đỏ", "Nhựa POM, PE, PA, Teflon"],
    deliverables: ["Chi tiết hoàn thiện đúng bản vẽ", "Phiếu kiểm tra kích thước (khi khách yêu cầu)", "Đóng gói chống gỉ, chống va đập", "Giao hàng tận nhà máy khu vực phía Nam"],
    gallery: [
      photo("tien-mat-bich", "Tiện mặt bích trên máy tiện"),
      photo("tien-chi-tiet-tron-xoay", "Tiện chi tiết tròn xoay"),
      photo("mat-bich-inox-cnc", "Mặt bích inox gia công CNC"),
      photo("dia-nhua-phay-cnc", "Đĩa nhựa kỹ thuật phay CNC"),
    ],
    faqs: [
      { q: "Có nhận gia công số lượng ít, chỉ 1–2 chi tiết không?", a: "Có. Xưởng nhận cả chi tiết mẫu đơn chiếc. Với số lượng ít, chi phí lập trình và gá đặt sẽ chiếm tỷ trọng lớn hơn trong đơn giá." },
      { q: "Tôi chỉ có mẫu cũ, không có bản vẽ thì sao?", a: "Gửi mẫu hoặc ảnh chụp kèm kích thước chính. Đội kỹ thuật sẽ đo đạc, dựng lại bản vẽ và gửi khách xác nhận trước khi gia công." },
      { q: "Có xử lý nhiệt và xi mạ không?", a: "Có. Chúng tôi phối hợp với đơn vị đối tác để tôi, ram, thấm carbon, mạ kẽm, mạ crom, anod nhôm và bàn giao trọn gói." },
    ],
  },
  {
    slug: "thiet-ke-tu-van-ky-thuat",
    title: "Thiết kế và tư vấn kỹ thuật",
    summary: "Dựng bản vẽ 2D/3D, lập phương án gia công và tư vấn vật liệu trước khi sản xuất.",
    seoDescription:
      "Thiết kế bản vẽ kỹ thuật 2D/3D, dựng lại bản vẽ từ mẫu thực tế, tư vấn vật liệu, kết cấu và phương án gia công tối ưu chi phí.",
    icon: DraftingCompass,
    image: photo("ban-ve-3d-gia-do", "Bản vẽ 3D gá đỡ thép"),
    intro: [
      "Nhiều khách hàng đến với chúng tôi chỉ với một ý tưởng, một bản phác tay hoặc một chi tiết hỏng cần thay thế. Dịch vụ thiết kế giúp biến những yêu cầu đó thành bộ bản vẽ đầy đủ để gia công chính xác ngay lần đầu.",
      "Kỹ sư của Cơ Khí Nguyễn Thắng làm việc trực tiếp tại xưởng nên hiểu rõ giới hạn của máy móc và công nghệ. Mọi bản vẽ đều được thiết kế theo hướng dễ gia công, dễ lắp ráp và tiết kiệm vật liệu.",
      "Với cụm máy hoặc đồ gá phức tạp, chúng tôi dựng mô hình 3D để khách hàng kiểm tra kết cấu, khoảng không lắp đặt và thao tác vận hành trước khi chốt phương án.",
    ],
    scope: [
      "Dựng bản vẽ 2D theo tiêu chuẩn TCVN/ISO",
      "Mô hình 3D chi tiết và cụm lắp ráp",
      "Đo mẫu thực tế và dựng lại bản vẽ (reverse engineering)",
      "Tư vấn chọn vật liệu, xử lý nhiệt, xử lý bề mặt",
      "Tối ưu kết cấu để giảm chi phí gia công",
      "Lập phương án thi công, lắp đặt tại nhà máy",
    ],
    specs: [
      { label: "Phần mềm", value: "AutoCAD, SolidWorks, Inventor, Mastercam" },
      { label: "Định dạng bàn giao", value: "PDF, DWG, DXF, STEP, IGES" },
      { label: "Thời gian dựng bản vẽ", value: "1 – 3 ngày với chi tiết đơn" },
      { label: "Tiêu chuẩn", value: "TCVN, ISO, JIS theo yêu cầu" },
    ],
    materials: ["Thép kết cấu", "Thép hợp kim", "Inox", "Nhôm", "Đồng", "Nhựa kỹ thuật"],
    deliverables: ["Bộ bản vẽ 2D ghi đủ kích thước và dung sai", "File 3D để kiểm tra lắp ráp", "Bảng kê vật liệu (BOM)", "Báo giá gia công chi tiết theo bản vẽ"],
    gallery: [
      photo("ban-ve-3d-gia-do", "Mô hình 3D gá đỡ"),
      photo("gia-do-thep-chan", "Gá đỡ thép sau khi gia công theo bản vẽ"),
      photo("ket-cau-thep-han", "Kết cấu thép hàn theo thiết kế"),
    ],
    faqs: [
      { q: "Chi phí thiết kế có tính riêng không?", a: "Nếu khách hàng đặt gia công tại xưởng, chi phí dựng bản vẽ cho chi tiết đơn giản thường được miễn hoặc tính gộp vào đơn hàng." },
      { q: "Bản vẽ thuộc về ai?", a: "Bản vẽ được bàn giao cho khách hàng và chúng tôi cam kết không sử dụng cho bên thứ ba." },
    ],
  },
  {
    slug: "che-tao-lap-dat-may",
    title: "Chế tạo và lắp đặt máy",
    summary: "Chế tạo máy chuyên dùng, cải tiến và phục hồi cụm máy, lắp ráp và chạy thử tại nhà máy.",
    seoDescription:
      "Chế tạo máy chuyên dùng, cải tiến và phục hồi hộp số, cụm truyền động, lắp ráp và chạy thử máy tại nhà máy khách hàng.",
    icon: Cog,
    image: photo("lap-rap-cum-truc", "Lắp ráp cụm trục truyền động"),
    intro: [
      "Ngoài gia công chi tiết, Cơ Khí Nguyễn Thắng nhận chế tạo trọn gói các cụm máy và máy chuyên dùng phục vụ sản xuất: băng tải, cụm truyền động, máy cấp phôi, máy ép, máy trộn và các thiết bị theo yêu cầu riêng.",
      "Với máy móc đang vận hành, chúng tôi khảo sát hiện trạng, tìm nguyên nhân hư hỏng và đề xuất phương án cải tiến hoặc phục hồi. Nhiều hộp số, cụm bánh răng nhập khẩu đã được phục hồi với chi phí thấp hơn đáng kể so với mua mới, rút ngắn thời gian dừng máy.",
      "Máy được lắp ráp và chạy thử tại xưởng trước khi vận chuyển, sau đó đội kỹ thuật lắp đặt, căn chỉnh và hướng dẫn vận hành tại nhà máy.",
    ],
    scope: [
      "Chế tạo máy chuyên dùng theo yêu cầu sản xuất",
      "Phục hồi hộp số, bánh răng, trục truyền động",
      "Cải tiến năng suất và độ ổn định của máy hiện hữu",
      "Lắp ráp cơ khí, căn chỉnh đồng tâm, cân bằng",
      "Chạy thử có tải tại xưởng và tại nhà máy",
      "Bảo trì định kỳ, cung cấp phụ tùng thay thế",
    ],
    specs: [
      { label: "Quy mô cụm máy", value: "Đến 5 tấn, lắp ráp tại xưởng" },
      { label: "Bánh răng", value: "Trụ răng thẳng, răng nghiêng, module 1 – 12" },
      { label: "Bảo hành", value: "6 – 12 tháng tùy hạng mục" },
      { label: "Phạm vi lắp đặt", value: "TP.HCM, Đồng Nai, Bình Dương, Bà Rịa – Vũng Tàu và các tỉnh lân cận" },
    ],
    materials: ["Thép C45, SCM440", "Thép tấm SS400", "Gang", "Inox 304", "Đồng thau", "Vòng bi, phớt, khớp nối tiêu chuẩn"],
    deliverables: ["Máy hoặc cụm máy hoàn chỉnh", "Biên bản chạy thử và nghiệm thu", "Bản vẽ lắp và danh mục phụ tùng", "Hướng dẫn vận hành, bảo trì"],
    gallery: [
      photo("hop-so-cong-nghiep", "Hộp số công nghiệp đang phục hồi"),
      photo("dia-banh-rang-hanh-tinh", "Đĩa bánh răng hành tinh"),
      photo("banh-rang-tren-may", "Bánh răng lắp trên máy"),
      photo("truc-banh-rang-nghieng", "Trục bánh răng nghiêng"),
    ],
    faqs: [
      { q: "Máy bị hỏng gấp, xưởng có hỗ trợ nhanh không?", a: "Có. Gọi hotline để đội kỹ thuật đến khảo sát. Với chi tiết thay thế đơn giản, xưởng có thể ưu tiên gia công trong 24 – 48 giờ." },
      { q: "Có nhận phục hồi máy nhập khẩu không?", a: "Có. Chúng tôi đo đạc chi tiết hỏng, chọn vật liệu tương đương hoặc tốt hơn và gia công thay thế, không phụ thuộc phụ tùng chính hãng." },
    ],
  },
  {
    slug: "thi-cong-lap-dat-cong-trinh",
    title: "Thi công lắp đặt công trình",
    summary: "Gia công kết cấu thép, lắp đặt thiết bị và hệ thống cơ khí tại nhà máy, công trình.",
    seoDescription:
      "Gia công kết cấu thép, sàn thao tác, giá đỡ thiết bị, lắp đặt hệ thống cơ khí và dây chuyền tại nhà máy, công trình khu vực phía Nam.",
    icon: HardHat,
    image: photo("ket-cau-thep-han", "Kết cấu thép hàn tại xưởng"),
    intro: [
      "Cơ Khí Nguyễn Thắng nhận gia công và lắp đặt các hạng mục cơ khí cho nhà máy: kết cấu thép, sàn thao tác, giá đỡ thiết bị, khung máy, lan can, cầu thang, hệ thống băng tải và đường ống.",
      "Phần lớn cấu kiện được cắt CNC, chấn, hàn và sơn hoàn thiện tại xưởng trước khi đưa ra công trình. Cách làm này giúp rút ngắn thời gian thi công tại chỗ và hạn chế ảnh hưởng đến sản xuất của khách hàng.",
      "Đội thi công tuân thủ nội quy an toàn của nhà máy và có thể làm việc ngoài giờ hoặc vào ngày nghỉ để không làm gián đoạn dây chuyền.",
    ],
    scope: [
      "Khảo sát hiện trường, đo đạc và lập phương án",
      "Gia công kết cấu thép, khung máy, giá đỡ",
      "Cắt CNC, chấn, hàn và sơn hoàn thiện",
      "Lắp đặt thiết bị, băng tải, dây chuyền",
      "Di dời, căn chỉnh và lắp đặt lại máy móc",
      "Bảo trì, sửa chữa kết cấu định kỳ",
    ],
    specs: [
      { label: "Độ dày thép tấm", value: "2 – 30 mm" },
      { label: "Phương pháp hàn", value: "Hàn MIG/MAG, TIG, hàn que" },
      { label: "Hoàn thiện bề mặt", value: "Sơn chống gỉ, sơn epoxy, mạ kẽm nhúng nóng" },
      { label: "Phạm vi thi công", value: "Khu vực phía Nam" },
    ],
    materials: ["Thép tấm SS400", "Thép hình I, H, U, V", "Thép hộp", "Inox 304", "Tôn chống trượt", "Bu lông cường độ cao"],
    deliverables: ["Hạng mục lắp đặt hoàn chỉnh", "Hồ sơ bản vẽ hoàn công", "Biên bản nghiệm thu", "Bảo hành kết cấu và mối hàn"],
    gallery: [
      photo("gia-do-thep-chan-2", "Gá đỡ thép chấn hàn"),
      photo("cat-tam-thep-cnc", "Cắt tấm thép CNC"),
      photo("dia-thep-cat-cnc", "Chi tiết thép tấm sau khi cắt"),
    ],
    faqs: [
      { q: "Có thi công vào ngày nghỉ của nhà máy không?", a: "Có. Chúng tôi sắp xếp đội thi công theo lịch dừng máy của khách hàng, kể cả ban đêm và cuối tuần." },
      { q: "Xưởng có đủ hồ sơ an toàn để vào nhà máy không?", a: "Có. Nhân sự được huấn luyện an toàn lao động và trang bị bảo hộ theo yêu cầu của từng nhà máy." },
    ],
  },
  {
    slug: "dao-tao-cnc-thuc-chien",
    title: "Đào tạo CNC thực chiến",
    summary: "Đào tạo lập trình và vận hành máy CNC ngay tại xưởng cho học viên và kỹ thuật viên doanh nghiệp.",
    seoDescription:
      "Khóa đào tạo lập trình và vận hành máy CNC thực chiến tại xưởng cho sinh viên cơ khí, học viên và kỹ thuật viên doanh nghiệp.",
    icon: BookOpen,
    image: photo("may-cnc-tai-xuong", "Máy CNC dùng cho đào tạo thực hành"),
    intro: [
      "Khóa đào tạo CNC thực chiến dành cho sinh viên cơ khí mới ra trường, người muốn chuyển nghề và kỹ thuật viên doanh nghiệp cần nâng cao tay nghề.",
      "Học viên học ngay tại xưởng đang sản xuất, trên máy thật và với chi tiết thật. Nội dung đi từ đọc bản vẽ, chọn dao, gá phôi đến lập trình, chạy máy và kiểm tra sản phẩm.",
      "Doanh nghiệp có thể đặt lớp riêng cho nhân sự, với nội dung điều chỉnh theo loại máy và sản phẩm đang sản xuất tại nhà máy.",
    ],
    scope: [
      "Đọc bản vẽ kỹ thuật và dung sai",
      "Lập trình G-code thủ công cho phay và tiện",
      "Lập trình CAM với Mastercam",
      "Chọn dao, chế độ cắt, gá đặt phôi",
      "Vận hành máy, set dao, set phôi",
      "Đo kiểm và xử lý lỗi thường gặp",
    ],
    specs: [
      { label: "Thời lượng", value: "1 – 3 tháng tùy khóa" },
      { label: "Hình thức", value: "Học thực hành tại xưởng, lớp nhỏ" },
      { label: "Đối tượng", value: "Sinh viên, học viên, kỹ thuật viên doanh nghiệp" },
      { label: "Hỗ trợ", value: "Giới thiệu việc làm cho học viên đạt yêu cầu" },
    ],
    materials: ["Máy phay CNC", "Máy tiện CNC", "Phần mềm Mastercam", "Dụng cụ đo cơ khí"],
    deliverables: ["Kỹ năng vận hành máy CNC độc lập", "Kỹ năng lập trình phay, tiện", "Chứng nhận hoàn thành khóa học", "Hỗ trợ kỹ thuật sau khóa học"],
    gallery: [
      photo("may-phay-cnc-dang-gia-cong", "Học viên thực hành trên máy phay CNC"),
      photo("tien-chi-tiet-tron-xoay", "Thực hành tiện chi tiết"),
      photo("banh-rang-tai-xuong-2", "Sản phẩm thực tế tại xưởng"),
    ],
    faqs: [
      { q: "Chưa biết gì về CNC có học được không?", a: "Được. Khóa cơ bản bắt đầu từ đọc bản vẽ và an toàn máy, phù hợp với người mới." },
      { q: "Lịch học như thế nào?", a: "Có lớp ban ngày và buổi tối. Liên hệ hotline để được xếp lịch phù hợp." },
    ],
  },
];

export const workflow = [
  { title: "Tiếp nhận yêu cầu", text: "Nhận bản vẽ, mẫu hoặc mô tả qua email, Zalo hay trực tiếp tại xưởng." },
  { title: "Phân tích kỹ thuật", text: "Kiểm tra bản vẽ, vật liệu, dung sai và đề xuất phương án gia công." },
  { title: "Báo giá", text: "Gửi báo giá chi tiết trong 24 giờ làm việc, kèm tiến độ dự kiến." },
  { title: "Gia công, chế tạo", text: "Lập trình CAM, gia công trên máy CNC và đo kiểm trong suốt quá trình." },
  { title: "Kiểm tra chất lượng", text: "Đo kiểm kích thước lần cuối, lập phiếu kiểm tra khi khách yêu cầu." },
  { title: "Giao hàng, lắp đặt", text: "Đóng gói, giao tận nơi hoặc lắp đặt, chạy thử tại nhà máy." },
];

export const allMaterials = [
  { group: "Thép", items: "C45, SS400, SCM440, SKD11, SKD61, S50C" },
  { group: "Inox", items: "201, 304, 316, 420" },
  { group: "Kim loại màu", items: "Nhôm 6061, 7075; đồng thau, đồng đỏ" },
  { group: "Nhựa kỹ thuật", items: "POM, PE, PA (MC), Teflon, PU" },
];

// ---------------------------------------------------------------------------
// Năng lực
// ---------------------------------------------------------------------------

export const capabilityGroups = [
  {
    title: "Gia công CNC",
    icon: Gauge,
    items: ["Phay CNC 3 trục", "Tiện CNC", "Khoan, taro, doa lỗ chính xác", "Gia công nhựa kỹ thuật", "Cắt tấm CNC"],
  },
  {
    title: "Chế tạo và lắp ráp",
    icon: Cog,
    items: ["Chế tạo máy chuyên dùng", "Jig, fixture, đồ gá", "Hàn MIG, TIG, hàn que", "Lắp ráp cụm cơ khí", "Phục hồi hộp số, bánh răng"],
  },
  {
    title: "Thiết kế kỹ thuật",
    icon: DraftingCompass,
    items: ["Bản vẽ 2D, mô hình 3D", "Lập trình CAM", "Đo mẫu, dựng lại bản vẽ", "Tư vấn vật liệu, xử lý nhiệt", "Lập phương án lắp đặt"],
  },
];

// SỐ LIỆU MẪU – cần thay bằng danh sách máy thật của xưởng.
export const machineRows = [
  ["Trung tâm gia công phay CNC (VMC)", "4", "Hành trình 1.000 × 500 × 500 mm, dung sai ±0,01 mm"],
  ["Máy tiện CNC", "3", "Tiện Ø 500 mm, dài 1.500 mm"],
  ["Máy phay cơ vạn năng", "3", "Bàn máy 1.300 × 300 mm"],
  ["Máy tiện cơ", "5", "Tiện Ø 800 mm, dài 3.000 mm"],
  ["Máy cắt plasma CNC", "1", "Khổ cắt 1.500 × 3.000 mm, thép dày đến 25 mm"],
  ["Máy khoan cần, máy mài", "4", "Khoan lỗ đến Ø 50 mm, mài phẳng và mài tròn"],
  ["Máy hàn MIG, TIG", "6", "Hàn thép, inox, nhôm"],
];

export const qualityTools = [
  "Thước cặp điện tử, panme 0,001 mm",
  "Đồng hồ so, đồng hồ đo lỗ",
  "Calip ren, calip trục và lỗ",
  "Bàn đá chuẩn, thước đo cao",
  "Máy đo độ cứng",
  "Phiếu kiểm tra kích thước theo từng lô",
];

// ---------------------------------------------------------------------------
// Sản phẩm
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  material: string;
  quantity: string;
  tolerance: string;
  duration: string;
  image: Photo;
  gallery: Photo[];
  challenge: string;
  solution: string;
  results: string[];
};

// NỘI DUNG MẪU – thông tin khách hàng, số lượng và thời gian cần thay bằng dữ liệu thật.
export const projects: Project[] = [
  {
    slug: "banh-rang-va-truc-hop-so-bang-tai",
    title: "Bánh răng và trục cho hộp số băng tải",
    category: "Linh kiện máy",
    summary: "Gia công thay thế bộ bánh răng trụ và trục cho hộp số băng tải clinker đã mòn.",
    client: "Nhà máy vật liệu xây dựng tại Bà Rịa – Vũng Tàu",
    material: "Thép SCM440, tôi cao tần bề mặt răng",
    quantity: "24 bánh răng, 6 trục",
    tolerance: "±0,02 mm, cấp chính xác răng 7",
    duration: "18 ngày",
    image: photo("banh-rang-tai-xuong", "Bánh răng trụ thành phẩm"),
    gallery: [
      photo("banh-rang-tai-xuong", "Bánh răng trụ thành phẩm"),
      photo("banh-rang-tai-xuong-2", "Lô bánh răng tại xưởng"),
      photo("banh-rang-tru-va-o-bi", "Bánh răng trụ và ổ bi"),
      photo("hop-so-cong-nghiep", "Hộp số sau khi lắp bánh răng mới"),
    ],
    challenge:
      "Hộp số băng tải hoạt động liên tục trong môi trường bụi, bánh răng bị mòn và mẻ răng. Phụ tùng chính hãng phải đặt từ nước ngoài với thời gian chờ khoảng 3 tháng.",
    solution:
      "Đo đạc bánh răng mẫu để xác định module, số răng và góc ăn khớp; chọn thép SCM440, gia công tạo hình răng rồi tôi cao tần bề mặt để tăng độ cứng và độ bền mòn.",
    results: ["Rút ngắn thời gian dừng máy từ 3 tháng xuống 18 ngày", "Chi phí thấp hơn khoảng 60% so với phụ tùng nhập khẩu", "Hộp số vận hành ổn định sau lắp đặt"],
  },
  {
    slug: "phuc-hoi-truc-banh-rang-nghieng",
    title: "Phục hồi trục bánh răng nghiêng",
    category: "Sửa chữa, phục hồi",
    summary: "Gia công mới trục bánh răng nghiêng cho hộp giảm tốc máy nghiền không còn phụ tùng thay thế.",
    client: "Nhà máy chế biến nông sản tại Đồng Nai",
    material: "Thép 20CrMnTi, thấm carbon",
    quantity: "2 trục",
    tolerance: "Đồng tâm 0,01 mm",
    duration: "12 ngày",
    image: photo("truc-banh-rang-nghieng", "Trục bánh răng nghiêng sau gia công"),
    gallery: [
      photo("truc-banh-rang-nghieng", "Trục bánh răng nghiêng sau gia công"),
      photo("truc-banh-rang-nghieng-2", "Chi tiết răng nghiêng"),
      photo("lap-rap-cum-truc", "Lắp ráp cụm trục vào hộp giảm tốc"),
    ],
    challenge: "Hộp giảm tốc đời cũ, hãng sản xuất đã ngừng cung cấp phụ tùng. Trục bị gãy răng khiến cả dây chuyền nghiền phải dừng.",
    solution: "Đo trục hỏng, tính toán lại góc nghiêng và module, chọn thép thấm carbon để tăng độ bền, gia công tiện, cắt răng và mài cổ trục.",
    results: ["Dây chuyền hoạt động trở lại sau 12 ngày", "Trục mới ăn khớp êm với bánh răng cũ còn tốt", "Khách hàng đặt thêm 1 trục dự phòng"],
  },
  {
    slug: "mat-bich-inox-he-thong-bon-chua",
    title: "Mặt bích inox cho hệ thống bồn chứa",
    category: "Chi tiết CNC",
    summary: "Tiện và phay CNC mặt bích inox 304 theo tiêu chuẩn JIS cho hệ thống bồn và đường ống.",
    client: "Nhà máy thực phẩm tại Bình Dương",
    material: "Inox SUS304",
    quantity: "40 mặt bích",
    tolerance: "±0,02 mm",
    duration: "10 ngày",
    image: photo("mat-bich-inox-cnc", "Mặt bích inox gia công CNC"),
    gallery: [
      photo("mat-bich-inox-cnc", "Mặt bích inox gia công CNC"),
      photo("tien-mat-bich", "Tiện mặt bích trên máy"),
      photo("mat-bich-phuc-hoi", "Mặt bích trước khi gia công lại"),
    ],
    challenge: "Mặt bích cần độ phẳng cao để làm kín, đồng thời bề mặt phải đạt yêu cầu vệ sinh của ngành thực phẩm.",
    solution: "Tiện CNC hai mặt trong cùng một lần gá chuẩn, phay CNC lỗ bu lông theo tọa độ, đánh bóng bề mặt tiếp xúc.",
    results: ["100% mặt bích lắp kín, không rò rỉ khi thử áp", "Bề mặt đạt yêu cầu vệ sinh thực phẩm", "Giao hàng đúng tiến độ lắp đặt"],
  },
  {
    slug: "con-lan-nhua-bang-tai-thuc-pham",
    title: "Con lăn nhựa POM cho băng tải thực phẩm",
    category: "Chi tiết CNC",
    summary: "Gia công con lăn nhựa POM kèm nhông xích cho băng tải đóng gói.",
    client: "Nhà máy bánh kẹo tại TP. Hồ Chí Minh",
    material: "Nhựa POM trắng, trục thép C45",
    quantity: "120 con lăn",
    tolerance: "±0,05 mm",
    duration: "14 ngày",
    image: photo("con-lan-nhua", "Con lăn nhựa POM"),
    gallery: [photo("con-lan-nhua", "Con lăn nhựa POM"), photo("con-lan-nhua-2", "Con lăn nhựa có nhông xích")],
    challenge: "Con lăn thép cũ bị gỉ và gây tiếng ồn, không phù hợp môi trường tiếp xúc thực phẩm.",
    solution: "Thay bằng nhựa POM an toàn thực phẩm, tiện CNC côn chính xác, ép trục thép và lắp nhông xích đồng bộ.",
    results: ["Giảm tiếng ồn băng tải", "Không còn gỉ sét trong khu vực đóng gói", "Nhẹ hơn, giảm tải cho động cơ"],
  },
  {
    slug: "dia-chia-phoi-cat-cnc",
    title: "Đĩa chia phôi cắt và phay CNC",
    category: "Cắt, phay tấm",
    summary: "Cắt CNC và phay hoàn thiện đĩa chia phôi bằng thép tấm và nhựa cho máy chiết rót.",
    client: "Nhà máy nước giải khát tại Long An",
    material: "Thép SS400 dày 12 mm, nhựa PE",
    quantity: "16 đĩa",
    tolerance: "±0,05 mm biên dạng",
    duration: "7 ngày",
    image: photo("dia-thep-cat-cnc", "Đĩa chia phôi cắt CNC"),
    gallery: [
      photo("dia-thep-cat-cnc", "Đĩa chia phôi cắt CNC"),
      photo("dia-thep-cat-cnc-2", "Đĩa thép sau cắt"),
      photo("cat-tam-thep-cnc", "Cắt tấm thép trên máy CNC"),
      photo("dia-nhua-phay-cnc", "Đĩa nhựa phay CNC"),
    ],
    challenge: "Biên dạng hốc chia phôi phải khớp đúng kích thước chai, sai lệch nhỏ sẽ gây kẹt chai trên dây chuyền.",
    solution: "Dựng biên dạng từ đĩa mẫu, cắt thô bằng CNC, sau đó phay tinh biên dạng và lỗ tâm trong một lần gá.",
    results: ["Chạy thử không kẹt chai ở tốc độ định mức", "Có bản vẽ lưu trữ để đặt lại nhanh", "Chi phí thấp hơn đặt hàng từ hãng máy"],
  },
  {
    slug: "ga-do-thep-chan-han",
    title: "Gá đỡ thép chấn hàn theo bản vẽ 3D",
    category: "Jig, đồ gá",
    summary: "Thiết kế 3D và gia công bộ gá đỡ thép chấn hàn cho cụm thiết bị trên dây chuyền.",
    client: "Nhà máy linh kiện điện tử tại Đồng Nai",
    material: "Thép tấm SS400 dày 8 mm",
    quantity: "30 bộ",
    tolerance: "±0,1 mm vị trí lỗ",
    duration: "10 ngày",
    image: photo("gia-do-thep-chan", "Gá đỡ thép chấn hàn"),
    gallery: [
      photo("gia-do-thep-chan", "Gá đỡ thép chấn hàn"),
      photo("gia-do-thep-chan-2", "Lô gá đỡ thành phẩm"),
      photo("ket-cau-thep-han", "Mối hàn gá đỡ"),
      photo("ban-ve-3d-gia-do", "Bản vẽ 3D gá đỡ"),
    ],
    challenge: "Khách hàng chỉ có ý tưởng sơ bộ, cần gá đỡ vừa chắc chắn vừa có lỗ định vị chính xác để lắp thiết bị.",
    solution: "Dựng mô hình 3D để khách hàng duyệt, cắt CNC, chấn định hình, hàn trên đồ gá rồi phay lỗ định vị sau hàn.",
    results: ["Lắp đặt khớp 100% ngay lần đầu", "Duyệt thiết kế trong 2 ngày nhờ mô hình 3D", "Có bộ bản vẽ để đặt thêm khi mở rộng dây chuyền"],
  },
  {
    slug: "bac-lot-va-vong-bac-duong-kinh-lon",
    title: "Bạc lót và vòng bạc đường kính lớn",
    category: "Chi tiết CNC",
    summary: "Tiện CNC lô bạc lót và vòng bạc cho cụm con lăn và khớp quay.",
    client: "Công ty cơ khí cảng biển tại Bà Rịa – Vũng Tàu",
    material: "Thép C45, S50C",
    quantity: "150 chi tiết",
    tolerance: "H7/h6 cho lỗ và trục lắp ghép",
    duration: "15 ngày",
    image: photo("vong-bac-duong-kinh-lon", "Vòng bạc đường kính lớn"),
    gallery: [
      photo("vong-bac-duong-kinh-lon", "Vòng bạc đường kính lớn"),
      photo("bac-ong-tai-xuong", "Bạc ống tại xưởng"),
      photo("bac-ong-tai-xuong-2", "Lô bạc thành phẩm"),
      photo("chi-tiet-tien-thep", "Chi tiết tiện thép"),
    ],
    challenge: "Số lượng lớn với nhiều kích thước khác nhau, yêu cầu lắp ghép chặt giữa bạc và trục.",
    solution: "Chia lô theo kích thước, tiện CNC với chương trình riêng cho từng mã và kiểm tra lỗ bằng calip cho 100% sản phẩm.",
    results: ["150 chi tiết đạt dung sai lắp ghép", "Giao theo từng đợt đáp ứng tiến độ lắp ráp", "Trở thành đơn hàng định kỳ hằng quý"],
  },
  {
    slug: "truc-bac-va-dau-noi-ren-inox",
    title: "Trục, bạc và đầu nối ren inox",
    category: "Linh kiện máy",
    summary: "Tiện CNC trục, bạc và đầu nối ren inox, bu lông đồng cho hệ thống thủy lực.",
    client: "Xưởng chế tạo thiết bị thủy lực tại TP. Hồ Chí Minh",
    material: "Inox 304, đồng thau",
    quantity: "200 chi tiết",
    tolerance: "Ren M20 – M48, cấp 6g/6H",
    duration: "12 ngày",
    image: photo("dau-noi-ren-inox", "Đầu nối ren inox"),
    gallery: [
      photo("dau-noi-ren-inox", "Đầu nối ren inox"),
      photo("truc-bac-inox", "Trục và bạc inox"),
      photo("truc-bac-inox-2", "Lô trục inox"),
      photo("bu-long-dong-gia-cong", "Bu lông đồng gia công"),
    ],
    challenge: "Inox dẻo và khó cắt, ren phải kín khít để chịu áp suất thủy lực.",
    solution: "Chọn dao và chế độ cắt phù hợp inox, tiện ren CNC và kiểm tra bằng calip ren cho từng chi tiết.",
    results: ["Kín khít khi thử áp", "Bề mặt ren sạch, không bavia", "Giao đủ số lượng trong 12 ngày"],
  },
  {
    slug: "cum-banh-rang-hanh-tinh-may-tron",
    title: "Cụm bánh răng hành tinh cho máy trộn",
    category: "Chế tạo, lắp đặt",
    summary: "Chế tạo và lắp ráp cụm đĩa bánh răng hành tinh thay thế cho máy trộn công nghiệp.",
    client: "Nhà máy sản xuất thức ăn chăn nuôi tại Long An",
    material: "Thép C45, SCM440",
    quantity: "1 cụm hoàn chỉnh",
    tolerance: "Đồng tâm 0,02 mm",
    duration: "20 ngày",
    image: photo("dia-banh-rang-hanh-tinh", "Đĩa bánh răng hành tinh"),
    gallery: [
      photo("dia-banh-rang-hanh-tinh", "Đĩa bánh răng hành tinh"),
      photo("banh-rang-tren-may", "Bánh răng trên máy"),
      photo("tien-chi-tiet-tron-xoay", "Tiện chi tiết tròn xoay"),
    ],
    challenge: "Cụm hành tinh bị vỡ, máy trộn là thiết bị chính của dây chuyền nên cần phục hồi nhanh.",
    solution: "Đo đạc toàn bộ cụm, gia công mới đĩa mang, bánh răng vệ tinh và trục, lắp ráp chạy thử tại xưởng trước khi giao.",
    results: ["Lắp đặt và chạy lại trong 1 ca", "Máy trộn vận hành êm, không rung", "Tiết kiệm chi phí so với thay hộp số mới"],
  },
  {
    slug: "vanh-luoi-loc-inox",
    title: "Vành lưới lọc inox cho dây chuyền",
    category: "Chi tiết CNC",
    summary: "Tiện vành inox và căng lưới lọc cho bộ lọc dung dịch trong dây chuyền sản xuất.",
    client: "Nhà máy hóa chất tại Đồng Nai",
    material: "Inox 316, lưới inox 80 mesh",
    quantity: "20 bộ",
    tolerance: "±0,05 mm",
    duration: "8 ngày",
    image: photo("luoi-loc-vanh-inox", "Vành lưới lọc inox"),
    gallery: [photo("luoi-loc-vanh-inox", "Vành lưới lọc inox"), photo("tien-mat-bich", "Tiện vành inox")],
    challenge: "Lưới cần được căng phẳng và kẹp chắc để không bị xé khi dòng chảy có áp.",
    solution: "Tiện CNC hai vành kẹp khớp nhau, khoan lỗ bu lông đều và căng lưới trên đồ gá riêng.",
    results: ["Lưới phẳng, không nhăn", "Dễ tháo lắp để vệ sinh", "Chịu được hóa chất nhờ inox 316"],
  },
];

export const projectCategories = Array.from(new Set(projects.map((item) => item.category)));

// ---------------------------------------------------------------------------
// Nội dung trang chủ, giới thiệu, báo giá
// ---------------------------------------------------------------------------

export const whyUs = [
  { title: "Chính xác đến ±0,01 mm", text: "Đo kiểm trong suốt quá trình gia công, không chỉ ở khâu cuối.", icon: Ruler },
  { title: "Báo giá trong 24 giờ", text: "Phản hồi nhanh, đơn giá rõ ràng theo từng hạng mục.", icon: Clock3 },
  { title: "Nhận cả đơn nhỏ và đơn gấp", text: "Từ 1 chi tiết mẫu đến lô hàng loạt, ưu tiên chi tiết thay thế khi máy dừng.", icon: Truck },
  { title: "Kỹ thuật làm việc tại xưởng", text: "Người tư vấn cũng là người trực tiếp gia công, nên hiểu đúng yêu cầu.", icon: Users },
];

export const industries = [
  "Thực phẩm, đồ uống",
  "Bao bì, in ấn",
  "Vật liệu xây dựng, xi măng",
  "Nhựa, cao su",
  "Gỗ, nội thất",
  "Cảng biển, logistics",
  "Dầu khí, năng lượng",
  "Chế tạo máy, tự động hóa",
];

export const values = [
  { title: "Chính xác", text: "Làm đúng bản vẽ, đúng dung sai và đúng cam kết tiến độ.", icon: Ruler },
  { title: "Tận tâm", text: "Coi bài toán của khách hàng là bài toán của mình, tư vấn thẳng thắn cả khi không có lợi cho xưởng.", icon: Handshake },
  { title: "Bền vững", text: "Chọn vật liệu và phương án để chi tiết chạy lâu, không chỉ để giao hàng.", icon: ShieldCheck },
  { title: "Học hỏi", text: "Liên tục đầu tư máy móc và đào tạo đội ngũ theo công nghệ mới.", icon: Award },
];

export const aboutStory = [
  "Xuất thân ngành cơ khí tại Việt Nam, công tác chuyên ngành CNC – lập trình – vận hành máy CNC 5 năm tại Nhật Bản, có hơn 15 năm kinh nghiệm thực chiến về lĩnh vực gia công cơ khí, chế tạo lắp đặt máy, bảo trì bảo dưỡng máy tại Việt Nam. Tôi bước chân khởi nghiệp bằng phương châm người thật – việc thật. Từ một xưởng gia công cơ khí nhỏ, những đơn hàng nhỏ, những người cộng sự luôn đồng hành cùng Tôi để Tôi có được ngày nay.",
  "Đặc điểm nổi bật của Chúng Tôi ở những chi tiết máy khó, những yêu cầu kỹ thuật khó: Chúng Tôi sẵn sàng tiếp nhận, làm kỹ và đạt mức kết quả tốt, luôn đảm bảo giao hàng đúng hẹn cho đối tác, khách hàng. Uy tín bắt đầu từ đó giúp Chúng Tôi có thêm động lực đầu tư và phát triển ngày càng mạnh hơn mảng cơ khí chính xác CNC.",
  "Hiện nay, Công ty TNHH Cơ Khí Nguyễn Thắng phục vụ Quý Khách Hàng doanh nghiệp tại TP. Hồ Chí Minh, Đồng Nai, Bình Dương, Bà Rịa – Vũng Tàu và các tỉnh lân cận, trong các ngành thực phẩm, vật liệu xây dựng, bao bì, cảng biển và chế tạo máy công/nông nghiệp.",
  "Chúng Tôi vô cùng hân hạnh được trở thành sự lựa chọn tối ưu nhất, tốt nhất của Quý Khách Hàng cùng Quý Đối Tác.",
];

export const aboutGallery: Photo[] = [
  photo("may-cnc-tai-xuong", "Máy CNC tại xưởng"),
  photo("may-phay-cnc-dang-gia-cong", "Máy phay CNC đang gia công"),
  photo("banh-rang-tai-xuong-2", "Bánh răng thành phẩm"),
  photo("bac-ong-tai-xuong", "Bạc ống tại xưởng"),
  photo("tien-mat-bich", "Tiện mặt bích"),
  photo("hop-so-cong-nghiep", "Phục hồi hộp số"),
  photo("gia-do-thep-chan-2", "Gá đỡ thép chấn hàn"),
  photo("dia-nhua-phay-cnc", "Đĩa nhựa phay CNC"),
];

export const quoteChecklist = [
  "Bản vẽ 2D (PDF, DWG, DXF) hoặc file 3D (STEP, IGES)",
  "Vật liệu và yêu cầu xử lý nhiệt, xử lý bề mặt (nếu có)",
  "Số lượng cần gia công",
  "Thời gian cần nhận hàng",
  "Ảnh chụp mẫu thực tế nếu không có bản vẽ",
];

export const quoteSteps = [
  { title: "Gửi yêu cầu", text: "Điền form hoặc gửi bản vẽ qua Zalo, email." },
  { title: "Kỹ thuật liên hệ", text: "Kỹ sư gọi lại để làm rõ yêu cầu trong vòng 2 giờ làm việc." },
  { title: "Nhận báo giá", text: "Báo giá chi tiết đơn giá, tiến độ trong 24 giờ làm việc." },
];

export const quoteFaqs: Faq[] = [
  { q: "Báo giá có mất phí không?", a: "Hoàn toàn miễn phí. Bạn chỉ trả tiền khi đồng ý đặt hàng." },
  { q: "Bao lâu thì nhận được báo giá?", a: "Thông thường trong 24 giờ làm việc. Với cụm máy phức tạp cần khảo sát, thời gian có thể lâu hơn và chúng tôi sẽ báo trước." },
  { q: "Bản vẽ của tôi có được bảo mật không?", a: "Có. Bản vẽ chỉ dùng để báo giá và gia công, không chia sẻ cho bên thứ ba. Chúng tôi sẵn sàng ký cam kết bảo mật (NDA) khi cần." },
  { q: "Hình thức thanh toán thế nào?", a: "Chuyển khoản, có xuất hóa đơn VAT. Đơn hàng lớn có thể tạm ứng theo tiến độ." },
];
