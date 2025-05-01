import Card1 from "../../components/Cards/Card1";
import { quickSearches } from "../../utils/QuickSearchesData";

export default function QuickSearches() {
  return (
    <div className="mx-28 mt-10">
      <h2 className="text-3xl !font-poppins-extrabold text-secondary">
        Quick Searches
      </h2>
      <p className="text-primary">Discover restaurants by type of meal</p>
      <div className="grid grid-cols-12 gap-5 my-8">
        {quickSearches.map((search) => {
          return (
            <div className="col-span-4" key={search.title}>
              <Card1
                title={search.title}
                desc={search.desc}
                img={search.img}
                imgAlt={search.imgAlt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
