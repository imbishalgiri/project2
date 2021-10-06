import React from 'react'
import { showNotice } from './../../actions/commonActions';
import { connect } from 'react-redux';


class ViewNotice extends React.Component {

	componentDidMount() {
		this.props.showNotice();
	}


	render() {
		// const {title, description} = this.props.notice.data.notices[0];
		return (
			<div className="jumbotron">
				<h1 className="display-4">{this.props.notice.data.notices[0].title}</h1>
				<p className="lead">{this.props.notice.data.notices[0].description}</p>
				<hr className="my-4" />
				<p>Nepal College of Information Technology. Balkumari, Lalitpur.</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notice: state.notice
})


export default connect(mapStateToProps, {showNotice})(ViewNotice);