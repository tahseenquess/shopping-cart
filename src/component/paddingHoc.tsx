import React from 'react'

export default function paddingHoc<P extends Object>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <div className='p-5'>
                <WrappedComponent {...props} />

            </div>
        )
    }
}
