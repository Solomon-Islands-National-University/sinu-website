function Title({children}: any) {
    return (
        <h1 className=" lg:ml-4 text-4xl lg:text-6xl font-bold leading-relaxed tracking-wider xl:text-7xl capitalize">
            {children}            
        </h1>
    );
}

export default Title;