/* eslint-disable react/prop-types */
export function Layout ({ children }) {
    return (
        <div className="flex flex-col mt-20 items-center">
            {children}
        </div>
    )
}