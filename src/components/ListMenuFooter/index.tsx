interface ILista {
  title: string;
  items: string[];
}

export default function ListMenuFooter({ title, items }: ILista) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="font-bold text-[16px]">{title}</li>
      {
        items?.map((item) => (
          <li key={item} className="w-fit text-[14px] hover:border-b-1 hover:border-white hover:cursor-pointer">{item}</li>
        ))
      }
    </ul>
  );
}