const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipItem({ setTip }: TipPercentageProps) {
  return (
    <>
      <form className="flex flex-col gap-2">
        {tipOptions.map((tip) => (
          <div className="flex justify-start items-center gap-2" key={tip.id}>
            <label htmlFor={tip.id} className="font-medium">
              {tip.label}
            </label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </>
  );
}
