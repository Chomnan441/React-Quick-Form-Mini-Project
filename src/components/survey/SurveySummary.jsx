import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

function SurveySummary({ submittedData, onRestart }) {
  const { name, email, selectedMovie, comments } = submittedData;

  return (
    <section className="flex flex-col gap-5">
      <div className="rounded-lg border border-green-200 bg-green-50 p-5">
        <p className="mb-4 flex items-center gap-2 font-medium text-green-700">
          <Check className="size-5 shrink-0" aria-hidden="true" />
          ส่งแบบสำรวจสำเร็จ!
        </p>

        <dl className="flex flex-col gap-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">ชื่อ:</dt>
            <dd>{name}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">อีเมล:</dt>
            <dd>{email}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">หนังที่เลือก:</dt>
            <dd className="font-medium text-violet-600">{selectedMovie}</dd>
          </div>
        </dl>

        {comments && (
          <>
            <hr className="my-4 border-border" />
            <div className="text-sm">
              <p className="mb-2 font-medium text-foreground">ความคิดเห็น:</p>
              <p className="rounded-lg border border-border bg-background p-3">
                {comments}
              </p>
            </div>
          </>
        )}
      </div>

      <Button
        type="button"
        size="lg"
        className="h-10 w-full bg-foreground text-background hover:bg-foreground/90"
        onClick={onRestart}
      >
        <RotateCcw aria-hidden="true" />
        ทำแบบสำรวจใหม่
      </Button>
    </section>
  );
}

export { SurveySummary };
