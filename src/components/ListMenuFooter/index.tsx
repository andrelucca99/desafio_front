interface ILista {
  title: string;
  items: string[];
}

export default function ListMenuFooter({ title, items }: ILista) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-[16px]">{title}</p>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="w-fit text-[14px] hover:border-b hover:cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}