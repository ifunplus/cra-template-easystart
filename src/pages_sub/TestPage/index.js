import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const index = (props) => {
    return (
        <div>
            <p>yarn add --dev react-test-renderer</p>
            <h1>snapshot Test</h1>
        </div>
    )
}

index.propTypes = {
    props: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
