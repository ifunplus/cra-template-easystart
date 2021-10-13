import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const index = (props) => {
    return (
        <div>
            用户界面
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
