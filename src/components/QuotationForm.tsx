import { AlertTriangle, CheckCircle2, FileUp, Loader2, Send, X } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { FORMSPREE_FORM_ID, QUOTE_EMAIL } from "../config";
import { company, services } from "../data/siteData";

const ACCEPT = ".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png,.zip";
const MAX_FILE_MB = 10;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; fileSkipped: boolean }
  | { kind: "error"; message: string };

async function sendToFormspree(data: FormData) {
  const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  return response.ok;
}

export function QuotationForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const inputRef = useRef<HTMLInputElement>(null);

  const pickFile = (picked: File | null | undefined) => {
    setFileError("");
    if (!picked) return setFile(null);
    if (picked.size > MAX_FILE_MB * 1024 * 1024) {
      setFile(null);
      setFileError(`File vượt quá ${MAX_FILE_MB} MB. Vui lòng nén lại hoặc gửi qua email ${QUOTE_EMAIL}.`);
      return;
    }
    setFile(picked);
  };

  const clearFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!FORMSPREE_FORM_ID) {
      setStatus({
        kind: "error",
        message: `Form chưa được kết nối. Vui lòng gọi ${company.phones[0]} hoặc gửi email tới ${QUOTE_EMAIL}.`,
      });
      return;
    }

    setStatus({ kind: "sending" });
    const data = new FormData(form);
    data.delete("drawing");
    data.append("_subject", `Yêu cầu báo giá mới từ ${data.get("name") || "khách hàng"}`);

    try {
      let fileSkipped = false;
      let ok: boolean;

      if (file) {
        const withFile = new FormData(form);
        withFile.set("drawing", file);
        withFile.append("_subject", `Yêu cầu báo giá mới từ ${data.get("name") || "khách hàng"}`);
        ok = await sendToFormspree(withFile);
        // Gói Formspree miễn phí không nhận file đính kèm: gửi lại phần nội dung để không mất yêu cầu
        if (!ok) {
          data.append("ghi_chu_file", `Khách có file "${file.name}" nhưng không đính kèm được, cần xin lại qua Zalo/email.`);
          ok = await sendToFormspree(data);
          fileSkipped = ok;
        }
      } else {
        ok = await sendToFormspree(data);
      }

      if (!ok) throw new Error("send failed");
      form.reset();
      clearFile();
      setStatus({ kind: "success", fileSkipped });
    } catch {
      setStatus({
        kind: "error",
        message: `Chưa gửi được yêu cầu. Vui lòng thử lại, hoặc gọi ${company.phones[0]} / gửi email tới ${QUOTE_EMAIL}.`,
      });
    }
  };

  if (status.kind === "success") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-white p-8 text-center shadow-industrial">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h2 className="mt-4 text-2xl font-extrabold text-navy">Đã nhận yêu cầu của bạn</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-muted">
          Kỹ sư của chúng tôi sẽ liên hệ trong vòng 2 giờ làm việc để trao đổi và gửi báo giá.
        </p>
        {status.fileSkipped && (
          <p className="mx-auto mt-4 max-w-md rounded-md bg-amber-50 p-3 text-sm leading-6 text-amber-800">
            File bản vẽ chưa đính kèm được. Vui lòng gửi file qua Zalo {company.phones[0]} hoặc email {QUOTE_EMAIL}.
          </p>
        )}
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="btn-navy mt-6">
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-industrial sm:p-8">
      <fieldset disabled={sending} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="field-label">
            <span>
              Họ và tên <span className="text-red-600">*</span>
            </span>
            <input required name="name" autoComplete="name" className="field" />
          </label>
          <label className="field-label">
            Tên công ty
            <input name="company" autoComplete="organization" className="field" />
          </label>
          <label className="field-label">
            <span>
              Số điện thoại <span className="text-red-600">*</span>
            </span>
            <input required name="phone" type="tel" autoComplete="tel" pattern={String.raw`[0-9 +.\-]{9,15}`} title="Số điện thoại 9–15 chữ số" className="field" />
          </label>
          <label className="field-label">
            Email
            <input name="email" type="email" autoComplete="email" className="field" />
          </label>
          <label className="field-label">
            Dịch vụ cần báo giá
            <select name="service" className="field" defaultValue={services[0].title}>
              {services.map((service) => (
                <option key={service.slug}>{service.title}</option>
              ))}
              <option>Khác</option>
            </select>
          </label>
          <label className="field-label">
            Số lượng
            <input name="quantity" placeholder="Ví dụ: 50 chi tiết" className="field" />
          </label>
          <label className="field-label">
            Vật liệu
            <input name="material" placeholder="Ví dụ: Inox 304, thép C45" className="field" />
          </label>
          <label className="field-label">
            Thời gian cần hàng
            <input name="deadline" placeholder="Ví dụ: trong 2 tuần" className="field" />
          </label>
        </div>

        <label className="field-label">
          <span>
            Mô tả yêu cầu <span className="text-red-600">*</span>
          </span>
          <textarea required name="message" rows={5} className="field py-3" placeholder="Kích thước chính, dung sai, xử lý bề mặt, yêu cầu lắp đặt…" />
        </label>

        <div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => inputRef.current?.click()}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                inputRef.current?.click();
              }
            }}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              pickFile(event.dataTransfer.files[0]);
            }}
            className={`flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-4 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
              dragging ? "border-blue bg-blue/5" : "border-slate-300 bg-surface hover:border-blue"
            }`}
          >
            <FileUp className="h-7 w-7 text-blue" />
            <span className="text-sm font-semibold text-navy">Kéo thả file bản vẽ vào đây hoặc bấm để chọn</span>
            <span className="text-xs text-muted">PDF, DWG, DXF, STEP, IGES, ảnh hoặc ZIP, tối đa {MAX_FILE_MB} MB</span>
          </div>
          <input ref={inputRef} name="drawing" type="file" className="sr-only" tabIndex={-1} accept={ACCEPT} onChange={(event) => pickFile(event.currentTarget.files?.[0])} />
          {file && (
            <p className="mt-2 flex items-center justify-between gap-2 rounded-md bg-surface px-3 py-2 text-sm text-navy">
              <span className="truncate">{file.name}</span>
              <button type="button" onClick={clearFile} className="shrink-0 text-muted hover:text-red-600" aria-label="Bỏ file đã chọn">
                <X className="h-4 w-4" />
              </button>
            </p>
          )}
          {fileError && <p className="mt-2 text-sm text-red-600">{fileError}</p>}
        </div>

        {status.kind === "error" && (
          <p className="flex gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700" role="alert">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
            {status.message}
          </p>
        )}

        <button type="submit" className="btn-primary w-full text-base">
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {sending ? "Đang gửi…" : "Gửi yêu cầu báo giá"}
        </button>
        <p className="text-center text-xs text-muted">Thông tin và bản vẽ của bạn được bảo mật, chỉ dùng để báo giá.</p>
      </fieldset>
    </form>
  );
}
