import { ICard1Props } from "../../props/Cards/ICard1Props";

export default function Card1(props: ICard1Props) {
  return (
    <div className="flex items-center bg-white shadow-lg h-36">
      <img className="h-full w-42" src={props.img} alt={props.imgAlt} />
      <div className="px-4 py-4">
        <p className="text-secondary !font-poppins-semibold text-xl">
          {props.title}
        </p>
        <p className="text-primary mt-3 line-clamp-2">{props.desc}</p>
      </div>
    </div>
  );
}
