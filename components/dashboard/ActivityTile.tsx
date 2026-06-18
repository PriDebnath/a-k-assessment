import { PAGE_ITEMS } from "@/constants";
import Tooltip from "../shared/Tooltip";

export default function ActivityTile() {
  return (
    <section
      id={PAGE_ITEMS.analytics}

      className="col-span-4 rounded-2xl bg-neutral-900 p-6">
      <h2 className="text-sm font-medium mb-4">
        Activity
      </h2>

      {/* fake grid chart */}
      <div className="grid grid-cols-12 gap-1 relative">
        {Array.from({ length: 60 }).map((_, i) => {
          const mockCondition1 = i % 7 === 0
          const mockCondition2 = i % 8 === 0
          const bgClassName = (mockCondition1 ? " bg-lime-800 " : mockCondition2 ? " bg-lime-200 " : " bg-neutral-800 ")
          const prefixText = " min."
          const tooltipText = (mockCondition1 ? "15" + prefixText : mockCondition2 ? "30" + prefixText : "0" + prefixText)
          return (
            <div 
                  key={i}
            className="relative">
            <Tooltip 
            text={tooltipText}
              children={
                <div
                  className={
                    "h-3 w-6 rounded " + bgClassName
                  }
                ></div>
              }
            />
            </div>
          )
        }
        )
        }

      </div>
    </section>
  );
}