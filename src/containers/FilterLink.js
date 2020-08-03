// import { connect } from 'react-redux'
import React from "react";
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'
import {useDispatch, useSelector} from "react-redux";

//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)
function FilterLink(props) {
  const dispatch = useDispatch();
  const active = useSelector(state => props.filter === state.visibilityFilter);
  return <Link onClick={() => dispatch(setVisibilityFilter(props.filter))} active={active} {...props} />
}

export default FilterLink