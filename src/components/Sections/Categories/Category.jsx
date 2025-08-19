import SeactionHeading from "../SectionsHeading/SeactionHeading.jsx";
import Card from '../../Card/Card.jsx'

const Categories = ({ title, data }) => {
  return (
      <>
      <SeactionHeading title={title} />
      <div className="flex px-8">

        {data && data.map((item, index) => (
          <Card description={item?.description} title={item?.title} imagePath={item?.image}  actionArrow={true} height={'280px'} width={'240px'} />
        ))}
      </div>
      </>
  );
};

export default Categories;
