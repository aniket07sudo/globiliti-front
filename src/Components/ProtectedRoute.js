import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            { ...props }
            render = {
                routerProps => {
                    if(props.userid) {
                        return <Component { ...routerProps } { ...props }/>
                    } else {
                        return <Redirect to="/login"/>
                    }
                }
            }
        />
    )
}
 
const mapStateToProps = state => {
    return {
        userid: state.reducer.userId,
    }
}
 
export default connect(mapStateToProps)(ProtectedRoute);