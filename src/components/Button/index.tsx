interface IButton {
  text: string;
}

export default function Button({ text }: IButton) {
  return (
    <button
      data-testid="btn-multi"
      className="uppercase w-[200px] text-[14px] font-bold p-2 bg-[#006E3A] text-white rounded-[4px] hover:cursor-pointer">
      {text}
    </button>
  );
}