import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = {setPageSize, setSortProperty};

const mergeProps = (dataStore, actionCreators, router) => ({
    ...dataStore, ...router, ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((dataStore.songs_total 
        || dataStore.pageSize || 10)/(dataStore.pageSize || 10)),
    navigateToPage: page => router.history
        .push(`/mop/songs/${router.match.params.category}/${page}`),
})

export const SongsPageConnector = (PageComponent) => 
    withRouter(connect(mapStateToProps, mapDispatchToProps,mergeProps)(PageComponent))