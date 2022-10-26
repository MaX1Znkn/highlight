import React from "react";
import Video from "./Video";
import Article from "./Article";
import New from "./New";
import Popular from "./Popular";

const withUpdatedDisplay = (Video, Article) => {
	return class extends React.Component {
		render() {
			if (this.props.type === "video") {
				if (this.props.views < 100) {
					return (
						<New>
							<Video {...this.props} />
						</New>
					);
				} else if (this.props.views >= 1000) {
					return (
						<Popular>
							<Video {...this.props} />
						</Popular>
					);
				} else {
					return <Video {...this.props} />;
				}
			} else if (this.props.type === "article") {
				if (this.props.views < 100) {
					return (
						<New>
							<Article {...this.props} />
						</New>
					);
				} else if (this.props.views >= 1000) {
					return (
						<Popular>
							<Article {...this.props} />
						</Popular>
					);
				} else {
					return <Article {...this.props} />;
				}
			}
		}
	};
};

const WithUpdatedDisplay = withUpdatedDisplay(Video, Article);

export default WithUpdatedDisplay;
