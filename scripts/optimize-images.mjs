// Chuyển ảnh gốc trong img/ sang WebP (2 kích thước) vào public/images/.
// Chạy lại khi thêm ảnh: npm run images
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "img";
const OUT = "public/images";

// Hậu tố hash của ảnh gốc -> tên file có nghĩa (có thể là mảng nếu một ảnh dùng cho nhiều tên)
const names = {
  f638c2bc: "dau-noi-ren-inox",
  d7dc5486: "dia-banh-rang-hanh-tinh",
  "7369826d": "banh-rang-tru-va-o-bi",
  "219a2ae8": "bu-long-dong-gia-cong",
  "458bf8ca": "mat-bich-inox-cnc",
  "5a08afa7": "truc-bac-inox",
  "782f6c00": "truc-bac-inox-2",
  b896c1fb: "banh-rang-tren-may",
  "39bdd947": "ban-ve-3d-gia-do",
  "585978ca": ["banh-rang-tai-xuong", "banh-rang-tai-xuong-2", "bac-ong-tai-xuong", "bac-ong-tai-xuong-2"], // 1 ảnh gốc dùng cho nhiều tên
  "506b67f9": "vong-bac-duong-kinh-lon",
  bbeea7cc: "luoi-loc-vanh-inox",
  "406f959e": "tien-mat-bich",
  "1eadd2af": "tien-chi-tiet-tron-xoay",
  "7bc66979": "lap-rap-cum-truc",
  "9867cc6b": "con-lan-nhua",
  b2d6afa4: "con-lan-nhua-2",
  "669d1936": "dia-thep-cat-cnc",
  "8d8c6e12": "dia-thep-cat-cnc-2",
  "4be6fca0": "cat-tam-thep-cnc",
  "2f55ab8a": "chi-tiet-tien-thep",
  b123496b: "ket-cau-thep-han",
  c3659ca1: "gia-do-thep-chan",
  fa70b5b7: "gia-do-thep-chan-2",
  e24968be: "dia-nhua-phay-cnc",
  da53c221: "hop-so-cong-nghiep",
  "46cd6e53": "mat-bich-phuc-hoi",
  fbd3ffc8: "may-phay-cnc-dang-gia-cong",
  dc6bf052: "truc-banh-rang-nghieng",
  eca39b49: "truc-banh-rang-nghieng-2",
  "94151e7c": "may-cnc-tai-xuong",
};

fs.mkdirSync(OUT, { recursive: true });

for (const file of fs.readdirSync(SRC)) {
  const hash = file.replace(/\.jpg$/i, "").slice(-8);
  const mapped = names[hash];
  if (!mapped) continue;
  const input = path.join(SRC, file);
  for (const name of [mapped].flat()) {
    await sharp(input).rotate().resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true }).webp({ quality: 72 }).toFile(path.join(OUT, `${name}.webp`));
    await sharp(input).rotate().resize({ width: 640, height: 640, fit: "inside", withoutEnlargement: true }).webp({ quality: 68 }).toFile(path.join(OUT, `${name}-sm.webp`));
  }
}

await sharp(path.join(SRC, "Logo.jpg")).resize({ width: 256, height: 256, fit: "inside" }).webp({ quality: 90 }).toFile(path.join(OUT, "logo.webp"));
console.log("Done");
