import { useState } from "react";
import { items } from "./checklistItems";
import { stagger, useAnimate } from "framer-motion";

function App() {
  const [checklistItems, setChecklistItems] = useState(items);
  const [scope, checkboxAnimate] = useAnimate();

  const randomNumber = Math.random();

  function handleChange(id) {
    const newChecklistItems = checklistItems.map((item) => ({
      ...item,
      checked: item.id === id ? !item.checked : item.checked,
    }));
    setChecklistItems(newChecklistItems);

    if (newChecklistItems.every((item) => item.checked)) {
      const lastCheckedItem = checklistItems.findIndex((item) => !item.checked);

      if (0 < randomNumber && randomNumber < 0.25) {
        checkboxAnimate(
          "input",
          {
            scale: [1, 1.2, 1],
          },
          {
            duration: 0.4,
            delay: stagger(0.07, { from: lastCheckedItem }),
          }
        );
      } else if (0.25 < randomNumber && randomNumber < 0.5) {
        checkboxAnimate(
          "input",
          {
            x: [0, -3, 0],
          },
          {
            duration: 0.3,
            delay: stagger(0.08, { from: lastCheckedItem }),
          }
        );
      } else if (0.5 < randomNumber && randomNumber < 0.75) {
        checkboxAnimate(
          "input",
          {
            opacity: [1, 0.3, 1],
          },
          {
            duration: 0.65,
            delay: stagger(0.085, { from: lastCheckedItem }),
          }
        );
      } else {
        checkboxAnimate(
          "input",
          {
            scale: [1, 0.9, 1],
            filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"],
          },
          {
            duration: 0.4,
            delay: stagger(0.065, { from: lastCheckedItem }),
          }
        );
      }
    }
  }

  return (
    <>
      <section className="h-screen bg-mint-green">
        <div className="flex flex-col items-center justify-center w-[90%] max-w-screen-2xl h-full m-auto">
          <div className="max-w-[380px] p-6 bg-gray-100 border-4 border-black shadow-hard-l rounded-3xl">
            <h1 className="text-3xl font-bold tracking-tighter leading-none">
              A joyful checklist!
            </h1>
            <div ref={scope} className="w-full flex flex-col gap-4 mt-8">
              {checklistItems.map((item) => (
                <label
                  key={item.id}
                  className={`flex w-full font-medium select-none transition-colors ${item.checked ? "text-gray-400 line-through" : ""}`}
                >
                  <input
                    type="checkbox"
                    className="mr-2 my-0.5 w-5 h-5 bg-gray-100 border-2 text-mint-green border-mint-green rounded-full focus:ring-0 hover:text-mint-green cursor-pointer transition-colors"
                    onChange={() => handleChange(item.id)}
                    checked={item.checked}
                  ></input>
                  <span>{item.text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
