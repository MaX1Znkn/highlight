import WithUpdatedDisplay from "./WithUpdatedDisplay";

function List(props) {
	return props.list.map((item, i) => {
		switch (item.type) {
			case "video":
				return <WithUpdatedDisplay {...item} key={i} />;

			case "article":
				return <WithUpdatedDisplay {...item} key={i} />;
			default:
				return "";
		}
	});
}
export default List;
